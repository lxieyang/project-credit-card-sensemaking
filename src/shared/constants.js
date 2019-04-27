import NoAnnualFeeIcon from '../assets/images/benefit-no-annual-fee.png';
import CashBackIcon from '../assets/images/benefit-cash-back.png';
import TravelIcon from '../assets/images/benefit-travel.png';
import GasIcon from '../assets/images/benefit-gas.png';
// import ZeroAPRIcon from '../assets/images/benefit-0-apr.png';
import GroceryIcon from '../assets/images/benefit-grocery.png';
import StudentIcon from '../assets/images/benefit-student.png';
import CreditBuilding from '../assets/images/benefit-credit-building.png';
import DiningIcon from '../assets/images/benefit-dining.png';
import SignupBonus from '../assets/images/benefit-bonus.png';
import BalanceTransferIcon from '../assets/images/benefit-balance-transfer.png';

export const incomeRanges = [
  '0 - 10k',
  '10k - 30k',
  '30k - 50k',
  '50k - 80k',
  '80k - 100k',
  '100k - 200k',
  '200k - 500k',
  '500k - ∞'
];

export const creditScoreRanges = [
  "I don't know",
  '300 - 579',
  '580 - 689',
  '690 - 719',
  '720 - 799',
  '800 - 850'
];

export const benefitCategories = [
  {
    title: 'Cash Back',
    icon: CashBackIcon
  },
  {
    title: 'Gas',
    icon: GasIcon
  },
  {
    title: 'Grocery',
    icon: GroceryIcon
  },
  {
    title: 'Travel Rewards',
    icon: TravelIcon
  },
  {
    title: 'Balance Transfer',
    icon: BalanceTransferIcon
  },
  {
    title: 'Credit Building',
    icon: CreditBuilding
  },
  // {
  //   title: 'Co-branded Travel',
  //   icon: null
  // },
  {
    title: 'Dining',
    icon: DiningIcon
  },
  {
    title: 'Sign-up Bonuses',
    icon: SignupBonus
  },
  {
    title: 'Student',
    icon: StudentIcon
  },
  // {
  //   title: '0% APR',
  //   icon: ZeroAPRIcon
  // },
  {
    title: 'No Annual Fee',
    icon: NoAnnualFeeIcon
  }
];
