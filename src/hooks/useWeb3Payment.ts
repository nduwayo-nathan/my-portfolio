import { useState } from 'react';
import { BrowserProvider, parseEther } from 'ethers';

const RECEIVER_ADDRESS = import.meta.env.VITE_WALLET_ADDRESS;

export const useWeb3Payment = () => {
  const [web3Status, setWeb3Status] = useState<'idle' | 'connecting' | 'pending' | 'success' | 'failed'>('idle');
  const [web3Message, setWeb3Message] = useState('');
  const [txHash, setTxHash] = useState('');

  const pay = async (amountInUsd: string) => {
    if (!window.ethereum) {
      setWeb3Status('failed');
      setWeb3Message('MetaMask not found. Please install it from metamask.io');
      return;
    }

    try {
      setWeb3Status('connecting');
      setWeb3Message('Connecting to MetaMask...');

      const provider = new BrowserProvider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();

      // Fetch ETH/USD rate to convert USD amount to ETH
      const rateRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
      const rateData = await rateRes.json();
      const ethPrice = rateData.ethereum.usd;
      const ethAmount = (parseFloat(amountInUsd) / ethPrice).toFixed(6);

      setWeb3Status('pending');
      setWeb3Message(`Sending ${ethAmount} ETH... Confirm in MetaMask`);

      const tx = await signer.sendTransaction({
        to: RECEIVER_ADDRESS,
        value: parseEther(ethAmount),
      });

      setWeb3Message('Transaction submitted, waiting for confirmation...');
      await tx.wait();

      setTxHash(tx.hash);
      setWeb3Status('success');
      setWeb3Message(`Payment confirmed! ☕ Tx: ${tx.hash.slice(0, 10)}...`);
    } catch (err: any) {
      setWeb3Status('failed');
      setWeb3Message(err.code === 4001 ? 'Transaction rejected in MetaMask.' : err.message || 'Transaction failed.');
    }
  };

  const reset = () => {
    setWeb3Status('idle');
    setWeb3Message('');
    setTxHash('');
  };

  return { pay, web3Status, web3Message, txHash, reset };
};
