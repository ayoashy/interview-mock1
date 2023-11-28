import { useState } from 'react';
import MonthlyStatButtons from './MonthlyStatButtons';
import LastMonth from './LastMonth';
import ThisMonth from './ThisMonth';

const MonthlyStat = () => {
  const [month, setMonth] = useState<number>(0);

  const onLastMonth = () => setMonth(0);
  const onThisMonth = () => setMonth(1);
  return (
    <div>
      <MonthlyStatButtons
        month={month}
        onLastMonth={onLastMonth}
        onThisMonth={onThisMonth}
      />
      <div>{month === 0 ? <LastMonth /> : <ThisMonth />}</div>
    </div>
  );
};

export default MonthlyStat;
