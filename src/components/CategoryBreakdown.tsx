import { budgetList } from '../data';
import SingleBreakdownComponent from './SingleBreakdownComponent';

const CategoryBreakdown = () => {
  return (
    <div className=''>
      <span className='my-8 block font-bold text-xl'>
        <h3>Category Breakdown</h3>
      </span>
      <span className='flex flex-col gap-y-5 mb-24'>
        {budgetList.map((budget) => (
          <SingleBreakdownComponent key={budget.category} {...budget} />
        ))}
      </span>
    </div>
  );
};

export default CategoryBreakdown;
