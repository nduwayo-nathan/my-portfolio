import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center p-8">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Thank you for your support! ☕</p>
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

export default Success;
