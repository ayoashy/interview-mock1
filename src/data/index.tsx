import { IoCloudyNight } from 'react-icons/io5';
import { SingleBreakdownComponentProp } from '../components/SingleBreakdownComponent';

export const budgetList: SingleBreakdownComponentProp[] = [
  {
    icon: <IoCloudyNight className='t' />,
    category: 'Food and Drink',
    rate: '40%',
    amountSpent: 20000,
    amountBudget: 42000,
  },
  {
    icon: <IoCloudyNight className='t' />,
    category: 'Savings',
    rate: '20%',
    amountSpent: 10000,
    amountBudget: 24000,
  },
  // {
  //   icon: <IoCloudyNight className='t' />,
  //   category: 'Food and Drink',
  //   rate: '40%',
  //   amountSpent: 20000,
  //   amountBudget: 42000,
  // },
];
