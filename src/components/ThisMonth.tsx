import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

const ThisMonth = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <span className='flex justify-center items-center w-[150px] h-[150px] border-[10px] border-[#0466C8] border-opacity-40 rounded-full p-0 mb-5'>
        <CircularProgress
          value={49}
          color='green.400'
          // stroke={'white'}
          stroke='#000'
          size={'130px'}
          fill={'white'}
          // size={'100%'}
          thickness={'6px'}
          className='bg-white p-0 rounded-full border-0 border-green-400s '
        >
          <CircularProgressLabel>49%</CircularProgressLabel>
        </CircularProgress>
      </span>
      <span className=''>
        <p className='text-[#707480]'>Amount spent so far</p>
        <p className='mt-1'>
          N50,000 <span>/N120,000</span>
        </p>
      </span>
    </div>
  );
};

export default ThisMonth;
