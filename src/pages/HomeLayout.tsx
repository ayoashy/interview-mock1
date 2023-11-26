import { NavLink, Outlet } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { IoStatsChartSharp } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { PiNewspaperThin } from 'react-icons/pi';

type BottomBar = {
  icon: React.ReactNode;
  title: string;
};

export const bottomBar: BottomBar[] = [
  {
    icon: <IoHome />,
    title: 'home',
  },
  {
    icon: <PiNewspaperThin />,
    title: 'report',
  },
  {
    icon: <IoHome />,
    title: 'chat',
  },
  {
    icon: <IoStatsChartSharp />,
    title: 'budget',
  },
  {
    icon: <FaRegUser />,
    title: 'profile',
  },
];

const HomeLayout = () => {
  return (
    <div>
      <Outlet />
      <div className='fixed bottom-0 bg-green-400 h-[87px] justify-between flex w-full pl-[30px] pr-[35px]  items-center'>
        {bottomBar.map((link) => {
          return (
            <NavLink to={link.title} className={'text-4xl'}>
              {link.icon}{' '}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default HomeLayout;
