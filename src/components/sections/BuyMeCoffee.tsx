import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, X, Smartphone, Building2, Wallet } from "lucide-react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm';
import { useWeb3Payment } from '../../hooks/useWeb3Payment';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: Wallet, color: "border-blue-600 bg-blue-600/10 text-blue-600", description: "Visa, Mastercard, Amex" },
  { id: "paypal", name: "PayPal", icon: Wallet, color: "border-indigo-600 bg-indigo-600/10 text-indigo-600", description: "Pay with PayPal balance" },
  { id: "mtn", name: "MTN Mobile Money", icon: Smartphone, color: "border-yellow-500 bg-yellow-500/10 text-yellow-500", description: "MTN MoMo" },
  { id: "airtel", name: "Airtel Money", icon: Smartphone, color: "border-red-600 bg-red-600/10 text-red-600", description: "Airtel Money" },
  { id: "bank", name: "Bank Transfer", icon: Building2, color: "border-purple-600 bg-purple-600/10 text-purple-600", description: "Direct bank transfer" },
  { id: "web3", name: "Crypto (ETH)", icon: Wallet, color: "border-orange-500 bg-orange-500/10 text-orange-500", description: "MetaMask / Web3" },
  { id: "binance", name: "Binance Pay", icon: Wallet, color: "border-yellow-400 bg-yellow-400/10 text-yellow-400", description: "BTC, ETH, BNB, USDT" },
];

const BuyMeCoffee: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState<"USD" | "RWF">("USD");
  const [phone, setPhone] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [momoStatus, setMomoStatus] = useState<"idle" | "pending" | "success" | "failed">("idle");
  const [momoMessage, setMomoMessage] = useState("");
  const [binanceLoading, setBinanceLoading] = useState(false);
  const { pay: web3Pay, web3Status, web3Message, txHash, reset: web3Reset } = useWeb3Payment();

  const handlePayment = async () => {
    if (!amount || parseFloat(amount) <= 0) return alert("Please enter a valid amount");
    if (!selectedMethod) return alert("Please select a payment method");

    if (selectedMethod === "card") {
      try {
        const res = await fetch("http://localhost:3000/api/payment/stripe/payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: Math.round(parseFloat(amount) * 100) }),
        });
        const { clientSecret } = await res.json();
        setClientSecret(clientSecret);
        setShowPaymentForm(true);
      } catch {
        alert("Payment failed. Please try again.");
      }
    } else if (selectedMethod === "mtn" || selectedMethod === "airtel") {
      if (!phone) return alert("Please enter your phone number");
      await handleMomoPayment(selectedMethod);
    } else if (selectedMethod === "web3") {
      await web3Pay(amount);
    } else if (selectedMethod === "binance") {
      setBinanceLoading(true);
      try {
        const res = await fetch("http://localhost:3000/api/payment/binance/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount }),
        });
        const data = await res.json();
        if (data.success) {
          window.open(data.checkoutUrl, "_blank");
        } else {
          alert(data.error || "Binance Pay failed. Try again.");
        }
      } catch {
        alert("Binance Pay failed. Try again.");
      } finally {
        setBinanceLoading(false);
      }
    } else {
      alert(`${selectedMethod} integration coming soon!`);
    }
  };

  const handleMomoPayment = async (provider: "mtn" | "airtel") => {
    setMomoStatus("pending");
    setMomoMessage("Sending payment request to your phone...");
    try {
      const res = await fetch(`http://localhost:3000/api/payment/momo/${provider}/pay`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseFloat(amount), phone }),
      });
      const data = await res.json();

      if (!data.success) {
        setMomoStatus("failed");
        setMomoMessage("Payment request failed. Please try again.");
        return;
      }

      setMomoMessage("Check your phone and approve the payment prompt...");
      pollMomoStatus(provider, data.referenceId);
    } catch {
      setMomoStatus("failed");
      setMomoMessage("Something went wrong. Please try again.");
    }
  };

  const pollMomoStatus = (provider: "mtn" | "airtel", referenceId: string) => {
    let attempts = 0;
    const interval = setInterval(async () => {
      attempts++;
      try {
        const res = await fetch(`http://localhost:3000/api/payment/momo/${provider}/status/${referenceId}`);
        const data = await res.json();
        const status = data.status?.toUpperCase();

        if (status === "SUCCESSFUL" || status === "SUCCESS") {
          clearInterval(interval);
          setMomoStatus("success");
          setMomoMessage("Payment successful! Thank you! ☕");
          setTimeout(handlePaymentSuccess, 2000);
        } else if (status === "FAILED" || status === "REJECTED") {
          clearInterval(interval);
          setMomoStatus("failed");
          setMomoMessage("Payment was declined. Please try again.");
        } else if (attempts >= 10) {
          clearInterval(interval);
          setMomoStatus("failed");
          setMomoMessage("Payment timed out. Please try again.");
        }
      } catch {
        clearInterval(interval);
        setMomoStatus("failed");
        setMomoMessage("Could not verify payment status.");
      }
    }, 5000);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentForm(false);
    setIsOpen(false);
    setAmount("");
    setPhone("");
    setSelectedMethod(null);
    setClientSecret("");
    setMomoStatus("idle");
    setMomoMessage("");
    web3Reset();
  };

  const isMomo = selectedMethod === "mtn" || selectedMethod === "airtel";
  const isWeb3 = selectedMethod === "web3";
  const isBinance = selectedMethod === "binance";

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2 px-6 py-3 border-2 border-yellow-600 bg-yellow-600/10 text-yellow-600 rounded-full font-semibold shadow-lg hover:bg-yellow-600/20 transition-all duration-300"
      >
        <Coffee className="w-5 h-5" />
        <span className="hidden sm:inline">Buy Me Coffee</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Coffee className="w-8 h-8 text-yellow-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Buy Me a Coffee</h2>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">Support my work with a coffee! ☕</p>

              {showPaymentForm && clientSecret ? (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm amount={amount} onSuccess={handlePaymentSuccess} />
                </Elements>
              ) : web3Status !== "idle" ? (
                <div className="text-center py-8 space-y-4">
                  {(web3Status === "connecting" || web3Status === "pending") && (
                    <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
                  )}
                  {web3Status === "success" && <div className="text-4xl">✅</div>}
                  {web3Status === "failed" && <div className="text-4xl">❌</div>}
                  <p className={`font-medium ${web3Status === "success" ? "text-green-600" : web3Status === "failed" ? "text-red-600" : "text-gray-700 dark:text-gray-300"}`}>
                    {web3Message}
                  </p>
                  {txHash && (
                    <a href={`https://etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-500 underline">
                      View on Etherscan
                    </a>
                  )}
                  {web3Status === "success" && (
                    <button onClick={handlePaymentSuccess} className="px-4 py-2 border-2 border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600/10 transition-colors">Close</button>
                  )}
                  {web3Status === "failed" && (
                    <button onClick={web3Reset} className="px-4 py-2 border-2 border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600/10 transition-colors">Try Again</button>
                  )}
                </div>
              ) : momoStatus !== "idle" ? (
                <div className="text-center py-8 space-y-4">
                  {momoStatus === "pending" && (
                    <div className="w-12 h-12 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin mx-auto" />
                  )}
                  {momoStatus === "success" && <div className="text-4xl">✅</div>}
                  {momoStatus === "failed" && <div className="text-4xl">❌</div>}
                  <p className={`font-medium ${momoStatus === "success" ? "text-green-600" : momoStatus === "failed" ? "text-red-600" : "text-gray-700 dark:text-gray-300"}`}>
                    {momoMessage}
                  </p>
                  {momoStatus === "failed" && (
                    <button onClick={() => { setMomoStatus("idle"); setMomoMessage(""); }} className="px-4 py-2 border-2 border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600/10 transition-colors">
                      Try Again
                    </button>
                  )}
                </div>
              ) : (
                <>
                  {/* Amount */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter Amount</label>
                    <div className="flex gap-2">
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value as "USD" | "RWF")}
                        className="px-3 py-3 border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      >
                        <option value="USD">$ USD</option>
                        <option value="RWF">RWF</option>
                      </select>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter any amount"
                        className="flex-1 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Choose Payment Method</label>
                    <div className="grid grid-cols-2 gap-3">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          onClick={() => setSelectedMethod(method.id)}
                          className={`p-4 border-2 rounded-xl transition-all text-left ${selectedMethod === method.id ? method.color : "border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                        >
                          <method.icon className="w-6 h-6 mb-2" />
                          <div className="font-semibold text-sm">{method.name}</div>
                          <div className="text-xs opacity-75 mt-1">{method.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {isWeb3 && (
                    <div className="mb-6 p-4 border-2 border-orange-500/30 bg-orange-500/5 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">🦊 MetaMask will open to confirm the transaction.</p>
                      <p className="text-xs text-gray-500 mt-1">Amount will be converted from USD to ETH at current market rate.</p>
                    </div>
                  )}
                  {isBinance && (
                    <div className="mb-6 p-4 border-2 border-yellow-400/30 bg-yellow-400/5 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">🟡 You will be redirected to Binance Pay to complete the payment.</p>
                      <p className="text-xs text-gray-500 mt-1">Supports BTC, ETH, BNB, USDT and 300+ coins. 0% merchant fees.</p>
                    </div>
                  )}
                  {/* Phone input for MoMo */}
                  {isMomo && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 2507XXXXXXXX"
                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">Enter number in international format without +</p>
                    </div>
                  )}

                  <button
                    onClick={handlePayment}
                    disabled={!selectedMethod || !amount || (isMomo && !phone) || (isWeb3 && !window.ethereum) || binanceLoading}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-yellow-600 bg-yellow-600/10 text-yellow-600 rounded-lg font-semibold hover:bg-yellow-600/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Coffee className="w-5 h-5" />
                    {binanceLoading ? "Redirecting to Binance..." : "Continue to Payment"}
                  </button>
                </>
              )}

              <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">Secure payment processing</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BuyMeCoffee;
