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
    icon: CashBackIcon,
    codename: 'cashback',
    description: ['Earn 1%-2% bonus every time you make a purchase.']
  },
  {
    title: 'Gas',
    icon: GasIcon,
    codename: 'gas',
    description: ['Earn increased bonus when you pay for gas.']
  },
  {
    title: 'Grocery',
    icon: GroceryIcon,
    codename: 'grocery',
    description: [
      'Earn increased bonus when you use your card at supermarkets or grocery stores.'
    ]
  },
  {
    title: 'Travel Rewards',
    icon: TravelIcon,
    codename: 'travel',
    description: [
      'Earn increased bonus when you pay for airfare, hotel, etc.',
      'Benefits might include Global Entry / TSA Pre credit, lounge access, rental insurance coverage, etc.',
      'Airline & Hotel co-branded options available.'
    ]
  },
  {
    title: 'Balance Transfer',

    icon: BalanceTransferIcon,
    codename: 'balance_transfer',
    description: ['Cards good for transfering balance to.']
  },
  {
    title: 'Credit Building',
    icon: CreditBuilding,
    codename: 'building',
    description: ['Cards good for building or re-building your credit history.']
  },
  // {
  //   title: 'Co-branded Travel',
  //   icon: null
  // },
  {
    title: 'Dining',
    icon: DiningIcon,
    codename: 'dining',
    description: ['Earn increased bonus when you use your card at restaurants.']
  },
  {
    title: 'Sign-up Bonuses',
    icon: SignupBonus,
    codename: 'bonus_purchase',
    description: [
      'One-time bonus earned after spending certain amount within the first three months after opening the card.',
      'Usually $100 back after $500 spent.',
      'Or $500 back after $3000 spent.'
    ]
  },
  {
    title: 'Student',
    icon: StudentIcon,
    codename: 'student',
    description: [
      'Higher chances to get approved when you are a student.',
      'Good for building credit in college.',
      'Student benefits such as bonus when you reach certain GPA.'
    ]
  },
  // {
  //   title: '0% APR',
  //   icon: ZeroAPRIcon
  // },
  {
    title: 'No Annual Fee',
    icon: NoAnnualFeeIcon,
    codename: 'annual_fee',
    description: ['Most card don’t charge an annual fee.']
  }
];
