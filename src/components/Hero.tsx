import { FaNairaSign } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl'>Budget</h1>
      <span className='mt-7 mb-3 flex items-center'>
        <span className='bg-[#0466C8]s bg-yellow-300  opacity-20s rounded-full w-5 h-5 flex items-center justify-center p-[5px] mr-[10px]'>
          <FaNairaSign className='text-[#0466C8] ' />
        </span>
        <span className='text-base text-[#707480]'>Monthly Budget</span>
      </span>
    </div>
  );
};

export default Hero;
