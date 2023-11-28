import { HiOutlineDotsHorizontal } from 'react-icons/hi';

type MonthlyStatButtonsProp = {
  onLastMonth: () => void;
  onThisMonth: () => void;
  month: number;
};

const MonthlyStatButtons = ({
  onLastMonth,
  onThisMonth,
  month,
}: MonthlyStatButtonsProp) => {
  const isLastMonthActive = month === 0;
  const isThisMonthActive = month === 1;
  return (
    <div className='flex items-center justify-between mb-8'>
      <span className='flex gap-x-8 '>
        <span
          onClick={onLastMonth}
          className={`${
            isLastMonthActive
              ? 'is-active text-base'
              : 'text-[#707480] text-base'
          }`}
        >
          <p className='font-medium leading-7'>Last Month</p>
        </span>
        <span
          onClick={onThisMonth}
          className={`${
            isThisMonthActive
              ? 'is-active text-base'
              : 'text-[#707480] text-base'
          }`}
        >
          <p className='font-medium leading-7'>This Month</p>
        </span>
      </span>
      <HiOutlineDotsHorizontal />
    </div>
  );
};

export default MonthlyStatButtons;
