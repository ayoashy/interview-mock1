import React from 'react';
import StatusBar from '../components/StatusBar';
import Hero from '../components/Hero';
import BudgetBalanceBox from '../components/BudgetBalanceBox';
import MonthlyStat from '../components/MonthlyStat';

const Budget = () => {
  return (
    <div>
      <StatusBar />
      <Hero />
      <BudgetBalanceBox />
      <MonthlyStat />
    </div>
  );
};

export default Budget;
