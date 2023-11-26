import { NavLink, Outlet } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { IoStatsChartSharp } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { PiNewspaperThin } from 'react-icons/pi';

type BottomBar = {
  icon: React.ReactNode;
  title: string;
  path: string;
};

const bottomBar: BottomBar[] = [
  {
    icon: <IoHome />,
    title: 'home',
    path: '/',
  },
  {
    icon: <PiNewspaperThin />,
    title: 'report',
    path: '/paper',
  },
  {
    icon: <IoHome />,
    title: 'chat',
    path: '/text',
  },
  {
    icon: <IoStatsChartSharp />,
    title: 'budget',
    path: '/budget',
  },
  {
    icon: <FaRegUser />,
    title: 'profile',
    path: '/profile',
  },
];

const HomeLayout = () => {
  return (
    <div>
      <div className='px-8 pt-5'>
        <Outlet />
      </div>
      <div className='fixed bottom-0 bg-green-400 h-[87px] justify-between flex w-full pl-[30px] pr-[35px]  items-center'>
        {bottomBar.map((link) => {
          return (
            <NavLink key={link.path} to={link.path} className={'text-4xl'}>
              <span className='flex flex-col gap-y-3 items-center'>
                <span>{link.icon}</span>
                <span className='text-xs'>{link.title}</span>
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default HomeLayout;
