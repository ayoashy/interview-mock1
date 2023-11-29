import { FaNairaSign } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div>
      <h1 className='text-3xl font-circularStd font-bold'>Budget</h1>
      <span className='mt-7 mb-3 flex items-center'>
        <span className='bg-[#ccdff3] rounded-full w-5 h-5 flex items-center justify-center p-[5px] mr-[10px]'>
          <FaNairaSign className='text-[#0466C8] ' />
        </span>
        <span className='text-base text-[#707480]  font-circular'>
          Monthly Budget
        </span>
      </span>
    </div>
  );
};

export default Hero;
