import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { IoConstruct } from 'react-icons/io5';

export type SingleBreakdownComponentProp = {
  icon: React.ReactNode;
  category: string;
  rate: string;
  amountSpent: number;
  amountBudget: number;
};

const SingleBreakdownComponent = ({
  icon,
  category,
  rate,
  amountSpent,
  amountBudget,
}: SingleBreakdownComponentProp) => {
  return (
    <div className='flex justify-between'>
      <span className='flex'>
        <span className='mr-3'>
          <CircularProgress
            value={49}
            color='green.400'
            stroke='#000'
            size={'46px'}
            fill={'white'}
            thickness={'6px'}
            className=' p-0 rounded-full  bg-green-300'
          >
            <CircularProgressLabel className='flex justify-center items-center   rounded-full'>
              {false && { icon }}
              <IoConstruct />
            </CircularProgressLabel>
          </CircularProgress>
        </span>
        <span>
          <p className='font-bold'>{category}</p>
          <p>{rate}</p>
        </span>
      </span>
      <span>
        <p>
          <span className='font-bold'>N{amountSpent}/</span>
          <span>N{amountBudget}</span>
        </p>
      </span>
    </div>
  );
};

export default SingleBreakdownComponent;
