import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CreditCard } from 'lucide-react';

const CheckoutForm: React.FC<{ amount: string; onSuccess: () => void }> = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin,
      },
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message || 'Payment failed');
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setMessage('Payment successful! Thank you! ☕');
      setTimeout(onSuccess, 2000);
    }
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement options={{ layout: 'tabs' }} />
      {message && (
        <p className={`text-sm ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-yellow-600 bg-yellow-600/10 text-yellow-600 rounded-lg font-semibold hover:bg-yellow-600/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <CreditCard className="w-5 h-5" />
        {isProcessing ? 'Processing...' : `Pay $${amount}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
