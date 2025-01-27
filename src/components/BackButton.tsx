import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="flex items-center text-white hover:text-gray-400 mb-6"
    >
      <span className="text-4xl">←</span>
    </button>
  );
};

export default BackButton;
