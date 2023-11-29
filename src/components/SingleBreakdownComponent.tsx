import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { IoConstruct } from 'react-icons/io5';

export type SingleBreakdownComponentProp = {
  icon: React.ReactNode;
  category: string;
  rate: number;
  amountSpent: number;
  amountBudget: number;
  backgroundColor: string;
  color: string;
};

const SingleBreakdownComponent = ({
  icon,
  category,
  rate,
  amountSpent,
  amountBudget,
  backgroundColor,
  color,
}: SingleBreakdownComponentProp) => {
  return (
    <div className='flex justify-between'>
      <span className='flex'>
        <span
          className={`mr-3 w-[38px] h-[38px] rounded-full  flex justify-center items-center `}
          style={{
            background: backgroundColor,
          }}
        >
          <CircularProgress
            value={rate}
            color={color}
            size={'46px'}
            fill={'white'}
            thickness={'5px'}
            className=' p-0 rounded-full  bg-green-300s circular-component-breakdown'
          >
            <CircularProgressLabel className='flex justify-center items-center   rounded-full'>
              {false && { icon }}
              <IoConstruct />
            </CircularProgressLabel>
          </CircularProgress>
        </span>
        <span>
          <p className='font-bold'>{category}</p>
          <p>{rate}%</p>
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
