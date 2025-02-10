'use client';
import SubmitButton from './SubmitButton';

interface ISearchFormProps {
  formAction: (formData: FormData) => void;
}

const SearchForm = (props: ISearchFormProps) => {
  const { formAction } = props;

  return (
    <form action={formAction} className="w-full max-w-lg flex">
      <input
        type="text"
        name="domain"
        className="flex-1 bg-gray-800 border-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Enter the domain. For example: example.com"
      />
      <SubmitButton />
    </form>
  );
};

export default SearchForm;
