import { XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cancel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center p-8">
        <XCircle className="w-20 h-20 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Your payment was cancelled. No charges were made.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Cancel;
