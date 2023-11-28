import React from 'react';

import { TbAntennaBars5 } from 'react-icons/tb';
import { MdOutlineWifi } from 'react-icons/md';
import { IoBatteryFullOutline } from 'react-icons/io5';

type StatusBarType = {
  name: string;
  icon: React.ReactNode;
};

const statusBarIcons: StatusBarType[] = [
  {
    name: 'network',
    icon: <TbAntennaBars5 />,
  },
  {
    name: 'wifi',
    icon: <MdOutlineWifi />,
  },
  {
    name: 'battery',
    icon: <IoBatteryFullOutline />,
  },
];

const StatusBar = () => {
  return (
    <div className='mb-8'>
      <span className='flex justify-between'>
        <h2>9:41</h2>
        <span className='flex gap-x-2'>
          {statusBarIcons.map((icon) => {
            return (
              <span className='text-2xl ' key={icon.name}>
                {icon.icon}
              </span>
            );
          })}
        </span>
      </span>
    </div>
  );
};

export default StatusBar;
