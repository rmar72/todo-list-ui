import Link from 'next/link';

const BackButton = () => {
  return (
    <Link
      href="/"
      prefetch={true}
      className="flex items-center text-white hover:text-gray-400 mb-6"
    >
      <span className="text-4xl">←</span>
    </Link>
  );
};

export default BackButton;