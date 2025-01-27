import Image from 'next/image';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="flex justify-center mb-4">
        <Image
          src="https://s3-alpha-sig.figma.com/img/85c0/2079/0f716dd0d95262635b558603544a0316?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VHJCpTPa73oNmmeS6urjQQg10VOiemlJ35Ds9TqxV8bc-dQHZpkpzpSKUP5G2B~IPBsIYChY2X1LVnu3m5Tm5NVYiVqyGYWavrmnGaf5~9qnN7KUFobv2~6ZNcj5k2UlAeqapyEYhaqocqhLlgERQbJobDb86q4AcGRZZqvZtO468fFV95He6qIWzGCzhUU7Oaznlrr-ihArok1UMuZhqGWqpdRruo8a~eRqd4fNg~MZabfWoWqw5Jsc0vwpOnJFdJorjZ0wqC7KSr8Sl4oDRkhkEtKuKLB7Yp3v-YbPlu9ncwlqX8jA7684mCyuuKTu8SH45UT6PDNhGQJT43KLNA__"
          alt="Clipboard Icon"
          width={48}
          height={48}
          className="h-12 w-12"
        />
      </div>
      <p className="font-inter text-[#808080] text-[18px] font-bold leading-[22.4px]">
        You don&apos;t have any tasks registered yet.
      </p>
      <p className="font-inter text-[#808080] text-[16px] font-normal leading-[22.4px]">
        Create tasks and organize your to-do items.
      </p>
    </div>
  );
};

export default EmptyState;
