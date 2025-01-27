import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-black text-center py-8">
      <Image
        src="https://cdn-icons-png.flaticon.com/512/231/231138.png"
        alt="Rocket Icon"
        width={48}
        height={48}
        className="mx-auto mb-2"
      />
      <h1 className="text-4xl font-bold text-center">
        <span className="text-[#4EA8DE]">Todo</span>{' '}
        <span className="text-[#8284FA]">App</span>
      </h1>
    </header>
  );
};

export default Header;
