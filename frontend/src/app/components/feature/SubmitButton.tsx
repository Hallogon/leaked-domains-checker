'use client';
import { useFormStatus } from 'react-dom';
import { Search } from 'lucide-react';
import Loader from '../ui/Loader';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg flex items-center"
      type="submit"
      disabled={pending}
    >
      {pending ? <Loader /> : <Search className="w-5 h-5" />}
    </button>
  );
};

export default SubmitButton;
