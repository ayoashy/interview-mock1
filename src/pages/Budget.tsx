import React from 'react';
import StatusBar from '../components/StatusBar';
import Hero from '../components/Hero';
import BudgetBalanceBox from '../components/BudgetBalanceBox';
import MonthlyStat from '../components/MonthlyStat';
import CategoryBreakdown from '../components/CategoryBreakdown';

const Budget = () => {
  return (
    <div>
      <StatusBar />
      <Hero />
      <BudgetBalanceBox />
      <MonthlyStat />
      <CategoryBreakdown />
    </div>
  );
};

export default Budget;
