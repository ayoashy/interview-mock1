import { IoCloudyNight } from 'react-icons/io5';
import { SingleBreakdownComponentProp } from '../components/SingleBreakdownComponent';

export const budgetList: SingleBreakdownComponentProp[] = [
  {
    icon: <IoCloudyNight className='t' />,
    category: 'Food and Drink',
    rate: 40,
    amountSpent: 20000,
    amountBudget: 42000,
    color: '#C89104',
    backgroundColor: '#F4E9CD',
  },
  {
    icon: <IoCloudyNight className='t' />,
    category: 'Savings',
    rate: 20,
    amountSpent: 10000,
    amountBudget: 24000,
    color: '#038A39',
    backgroundColor: '#CAE7D6',
  },
];
