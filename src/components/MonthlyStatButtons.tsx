import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const MonthlyStatButtons = () => {
  return (
    <div className='flex items-center justify-between'>
      <span className='flex gap-x-8 '>
        <p>Last Month</p>
        <p>This Month</p>
      </span>
      <HiOutlineDotsHorizontal />
    </div>
  );
};

export default MonthlyStatButtons;
