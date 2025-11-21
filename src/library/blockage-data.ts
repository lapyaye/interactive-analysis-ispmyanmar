// --- Nav Items ---
import { CartesianLayout } from 'recharts/types/util/types'

export const navItems = [
  {
    href: '#executive-summary',
    label: 'Summary',
    id: 'executive-summary',
  },
  {
    href: '#commodity-shortages',
    label: '1. Commodity Shortages and Price Surge',
    id: 'commodity-shortages',
  },
  {
    href: '#healthcare-impacts',
    label: '2. Impacts on the Healthcare',
    id: 'healthcare-impacts',
  },
  {
    href: '#livelihood-impacts',
    label: '3. Impacts on Livelihoods',
    id: 'livelihood-impacts',
  },
  {
    href: '#livelihood-crisis',
    label: '4. Daily Struggles and Coping Mechanisms',
    id: 'livelihood-crisis',
  },
  {
    href: '#support-capacity',
    label: '5. Capacity for Support and Hope',
    id: 'support-capacity',
  },
  {
    href: '#respondent-info',
    label: 'Respondent Demographics',
    id: 'respondent-info',
  },
  { href: '#appendix', label: 'Survey Methodology', id: 'appendix' },
]

// If you use interface to declare type, [key:string]: any will be needed
// export interface ChartData {
//     [key: string]: any;
// }
//
// export interface Survey extends ChartData {
//     percentage?: number;
//     count: number;
//     color: string;
//     item?: string;
//     label?: string;
// }
// --- Type ---
export type Survey = {
  percentage?: number
  count: number
  color: string
  item?: string
  label?: string
}

export type SurveyData = {
  id?: number
  question: string
  note?: string
  layout?: CartesianLayout
  payload: Survey[]
}

// --- Demographic ---
export const gender: SurveyData = {
  id: 100,
  question: 'Respondents',
  payload: [
    {
      label: 'Female',
      percentage: 57,
      count: 579,
      color: '#f07b72',
    },
    {
      label: 'Male',
      percentage: 41,
      count: 417,
      color: '#fec34e',
    },
    {
      label: 'Other',
      percentage: 2,
      count: 19,
      color: '#5482a3',
    },
  ],
}

export const location: SurveyData = {
  id: 100,
  question: 'Respondents by Location',
  payload: [
    {
      label: 'Urban Area',
      percentage: 50,
      count: 514,
      color: '#3468d9',
    },
    {
      label: 'Rural Area',
      percentage: 42,
      count: 423,
      color: '#8c6aa9',
    },
    {
      label: 'IDP Camp',
      percentage: 6,
      count: 57,
      color: '#4997ad',
    },
    {
      label: 'Border Area',
      percentage: 2,
      count: 21,
      color: '#e6a54e',
    },
  ],
}

export const age: SurveyData = {
  id: 100,
  question: 'Age Group',
  payload: [
    {
      label: '18-25 Years',
      percentage: 15,
      count: 151,
      color: '#cad172',
    },
    {
      label: '26-40 Years',
      percentage: 43,
      count: 435,
      color: '#96a866',
    },
    {
      label: '41-60 Years',
      percentage: 31,
      count: 319,
      color: '#71c287',
    },
    {
      label: '61-65 Years',
      percentage: 8,
      count: 76,
      color: '#33a853',
    },
    {
      label: '65+ Years',
      percentage: 3,
      count: 34,
      color: '#337a53',
    },
  ],
}

export const income: SurveyData = {
  id: 100,
  question: 'Monthly Household Income',
  payload: [
    {
      label: 'Below 200,000 Kyats',
      percentage: 8,
      count: 83,
      color: '#e6a54e',
    },
    {
      label: '200,000-400,000 Kyats',
      percentage: 20,
      count: 208,
      color: '#ce6434',
    },
    {
      label: '400,000-600,000 Kyats',
      percentage: 24,
      count: 242,
      color: '#8c6aa9',
    },
    {
      label: '600,000-800,000 Kyats',
      percentage: 17,
      count: 168,
      color: '#e65c33',
    },
    {
      label: '800,000-1,000,000 Kyats',
      percentage: 13,
      count: 128,
      color: '#3468d9',
    },
    {
      label: 'Above 1,000,000 Kyats',
      percentage: 18,
      count: 186,
      color: '#4997ad',
    },
  ],
}

// --- Figure Data (Fig 01 through Fig 18) ---
export const fig01ScarcityYesNo: SurveyData = {
  question: 'Figure 1: Have there been any shortages of imported goods?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025.',
  payload: [
    {
      label: 'Yes',
      percentage: 85,
      count: 863,
      color: '#f07b72',
    },
    {
      label: 'No',
      percentage: 15,
      count: 152,
      color: '#5482a3',
    },
  ],
}

export const fig02ScarcityGoods: SurveyData = {
  question:
    'Figure 2: Which imported goods are currently in short supply in your area?',
  note: 'This question allows multiple selections.',
  layout: 'vertical',
  payload: [
    {
      item: 'Daily Consumer Goods',
      count: 674,
      percentage: 66,
      color: '#ea4335',
    },
    {
      item: 'Basic Medicine',
      count: 620,
      percentage: 61,
      color: '#f07b72',
    },
    {
      item: 'Dry Food Items',
      count: 471,
      percentage: 46,
      color: '#33a853',
    },
    {
      item: 'Basic Food Items',
      count: 395,
      percentage: 40,
      color: '#71c287',
    },
    {
      item: 'Personal Hygiene Products',
      count: 379,
      percentage: 37,
      color: '#4285f4',
    },
    {
      item: 'Fuel',
      count: 298,
      percentage: 29,
      color: '#7baaf7',
    },
    {
      item: 'Construction Materials',
      count: 276,
      percentage: 27,
      color: '#fbbc05',
    },
    {
      item: 'Agricultural Inputs',
      count: 265,
      percentage: 26,
      color: '#fcd04f',
    },
    {
      item: 'No Shortages',
      count: 36,
      percentage: 3,
      color: '#f89851',
    },
    {
      item: 'Do not know',
      count: 12,
      percentage: 1.2,
      color: '#46bdc6',
    },
    {
      item: 'Spare electrical/mechanical parts',
      count: 9,
      percentage: 0.9,
      color: '#9a7cc6',
    },
  ],
}

export const fig03PriceIncreasePerception: SurveyData = {
  question: 'Figure 3: Have the prices increased?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025. This question allows multiple selections.',
  payload: [
    {
      label: 'Increase 1.5x',
      percentage: 48,
      count: 486,
      color: '#e6a54e',
    },
    {
      label: 'Doubled',
      percentage: 40,
      count: 403,
      color: '#ce6434',
    },
    {
      label: 'Tripled',
      percentage: 7,
      count: 68,
      color: '#8c6aa9',
    },
    {
      label: 'Quadrupled',
      percentage: 2,
      count: 22,
      color: '#e65c33',
    },
    {
      label: 'No change',
      percentage: 3,
      count: 36,
      color: '#3468d9',
    },
  ],
}

export const fig04PriceIncreaseGoods: SurveyData = {
  question: 'Figure 4: Which goods have become more expensive?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025. This question allows multiple selections.',
  layout: 'vertical',
  payload: [
    {
      item: 'Daily Consumer goods',
      count: 773,
      percentage: 79,
      color: '#ea4335',
    },
    {
      item: 'Basic Food items',
      count: 770,
      percentage: 78.7,
      color: '#f07b72',
    },
    {
      item: 'Basic Medicine',
      count: 710,
      percentage: 73,
      color: '#33a853',
    },
    {
      item: 'Dry Food',
      count: 683,
      percentage: 70,
      color: '#71c287',
    },
    {
      item: 'Personal Hygiene Products',
      count: 555,
      percentage: 57,
      color: '#4285f4',
    },
    {
      item: 'Construction Materials',
      count: 487,
      percentage: 50,
      color: '#7baaf7',
    },
    {
      item: 'Fuel',
      count: 478,
      percentage: 49,
      color: '#fbbc05',
    },
    {
      item: 'Agricultural Inputs',
      count: 442,
      percentage: 45,
      color: '#fcd04f',
    },
  ],
}

export const fig05FamilyImpact: SurveyData = {
  question:
    'Figure 5: Have you or your household been impacted by goods shortages and rising prices?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025.',
  payload: [
    {
      label: 'Yes',
      percentage: 92,
      count: 938,
      color: '#5482a3',
    },
    {
      label: 'No',
      percentage: 8,
      count: 77,
      color: '#f07b72',
    },
  ],
}

export const fig06PurchaseDifficulty: SurveyData = {
  question:
    'Figure 6:How available are basic goods for you to purchase for your family?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025.',
  payload: [
    {
      label: 'Notably Improved',
      percentage: 0.2,
      count: 2,
      color: '#3468d9',
    },
    {
      label: 'Slightly Improved',
      percentage: 1.8,
      count: 18,
      color: '#ce6434',
    },
    {
      label: 'No Change',
      percentage: 23,
      count: 235,
      color: '#8c6aa9',
    },
    {
      label: 'Slightly Worsened',
      percentage: 50,
      count: 510,
      color: '#46bdc6',
    },
    {
      label: 'Notably Worsened',
      percentage: 25,
      count: 250,
      color: '#e65c33',
    },
  ],
}

export const fig07MedicineBuyDifficulty: SurveyData = {
  question:
    'Figure 7: Have you experienced any difficulties purchasing medicines or medical supplies?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025.',
  payload: [
    {
      label: 'Yes',
      percentage: 74,
      count: 749,
      color: '#5482a3',
    },
    {
      label: 'No',
      percentage: 26,
      count: 266,
      color: '#f07b72',
    },
  ],
}

export const fig08MedicineBuyReasons: SurveyData = {
  question:
    'Figure 8: What are the main difficulties in purchasing medicines or medical supplies?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025. This question allows multiple selections.',
  layout: 'vertical',
  id: 8,
  payload: [
    {
      item: 'Noticeable Price Increases',
      count: 626,
      percentage: 84,
      color: '#ea4335',
    },
    {
      item: 'Medicine/ Supply Shortages',
      count: 522,
      percentage: 70,
      color: '#f07b72',
    },
    {
      item: 'Stock Rationing',
      count: 349,
      percentage: 47,
      color: '#33a853',
    },
  ],
}

export const fig09HealthAccess: SurveyData = {
  question: 'Figure 9: Are you able to access hospitals or clinics?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025.',
  payload: [
    {
      label: 'Yes, easily',
      percentage: 60,
      count: 606,
      color: '#5482a3',
    },
    {
      label: 'Yes, with great difficulty',
      percentage: 27,
      count: 270,
      color: '#46bdc6',
    },
    {
      label: 'Yes, only sometimes',
      percentage: 10,
      count: 107,
      color: '#ce6434',
    },
    {
      label: 'No',
      percentage: 3,
      count: 32,
      color: '#8c6aa9',
    },
  ],
}

export const fig10LivelihoodChange: SurveyData = {
  question: 'Figure 10: Have you had to change your job or livelihood?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025.',
  payload: [
    {
      label: 'No',
      percentage: 64,
      count: 650,
      color: '#f07b72',
    },
    {
      label: 'Yes',
      percentage: 36,
      count: 365,
      color: '#5482a3',
    },
  ],
}

export const fig11IncomeChange: SurveyData = {
  question: 'Figure 11: Has there been a change in your income?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025.',
  payload: [
    {
      label: 'Significantly Increased',
      percentage: 0.5,
      count: 5,
      color: '#3468d9',
    },
    {
      label: 'Increased',
      percentage: 1.5,
      count: 16,
      color: '#ce6434',
    },
    {
      label: 'No Change',
      percentage: 34,
      count: 344,
      color: '#8c6aa9',
    },
    {
      label: 'Slightly Decreased',
      percentage: 35,
      count: 360,
      color: '#46bdc6',
    },
    {
      label: 'Significantly Decreased',
      percentage: 29,
      count: 290,
      color: '#f07b72',
    },
  ],
}

export const fig12CopingStrategiesFull: SurveyData = {
  question:
    'Figure 12: How are you and your household coping with current conditions?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025. This question allows multiple selections.',
  layout: 'vertical',
  payload: [
    {
      item: 'Cutting back',
      count: 775,
      percentage: 76,
      color: '#ea4335',
    },
    {
      item: 'Buying cheaper goods and food',
      count: 766,
      percentage: 75.5,
      color: '#f07b72',
    },
    {
      item: 'Eating less meat and fish',
      count: 525,
      percentage: 52,
      color: '#33a853',
    },
    {
      item: 'Switching to domestic products',
      count: 480,
      percentage: 47,
      color: '#71c287',
    },
    {
      item: 'Borrowing, pawning, or selling items',
      count: 449,
      percentage: 44,
      color: '#4285f4',
    },
    {
      item: 'Receiving support from friends and family',
      count: 426,
      percentage: 42,
      color: '#7baaf7',
    },
    {
      item: 'Gambling to earn money',
      count: 260,
      percentage: 26,
      color: '#fbbc05',
    },
    {
      item: 'Buying from the black market',
      count: 165,
      percentage: 16,
      color: '#fcd04f',
    },
    {
      item: 'Eating one less meal a day',
      count: 113,
      percentage: 11,
      color: '#ff6d02',
    },
    {
      item: 'Does not face significant hardship',
      count: 64,
      percentage: 6.3,
      color: '#ff994d',
    },
    {
      item: 'Unable to cope',
      count: 63,
      percentage: 6.2,
      color: '#46bdc6',
    },
    {
      item: 'Begging',
      count: 46,
      percentage: 4.5,
      color: '#9a7cc6',
    },
  ],
}

export const fig13SocialSecurityImpacts: SurveyData = {
  question:
    'Figure 13: What social impacts have you observed as a result of the economic crisis?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025. This question allows multiple selections.',
  layout: 'vertical',
  payload: [
    {
      item: 'Increase in theft, burglary, and fraud',
      count: 822,
      percentage: 81,
      color: '#ea4335',
    },
    {
      item: 'Increase in anxiety and worry',
      count: 811,
      percentage: 80,
      color: '#f07b72',
    },
    {
      item: 'Increase in migration',
      count: 694,
      percentage: 68,
      color: '#33a853',
    },
    {
      item: 'Increase in illegal work',
      count: 447,
      percentage: 44,
      color: '#71c287',
    },
    {
      item: 'Increase in domestic violence',
      count: 312,
      percentage: 31,
      color: '#4285f4',
    },
    {
      item: 'Increase in robbery',
      count: 243,
      percentage: 24,
      color: '#7baaf7',
    },
    {
      item: 'Increase in suicide',
      count: 74,
      percentage: 7,
      color: '#fbbc05',
    },
  ],
}

export const fig14AssistanceProviders: SurveyData = {
  question: 'Figure 14: Who is mainly providing help?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025. This question allows multiple selections.',
  layout: 'vertical',
  payload: [
    {
      item: 'No help at all',
      count: 496,
      percentage: 49,
      color: '#ea4335',
    },
    {
      item: 'Mutual help between locals',
      count: 376,
      percentage: 37,
      color: '#f07b72',
    },
    {
      item: 'Local charity organizations',
      count: 285,
      percentage: 28,
      color: '#33a853',
    },
    {
      item: 'Civil society organizations',
      count: 269,
      percentage: 26.5,
      color: '#71c287',
    },
    {
      item: 'Religious organizations',
      count: 159,
      percentage: 16,
      color: '#46bdc6',
    },
    {
      item: 'Ethnic Armed Organizations (EAOs)',
      count: 54,
      percentage: 5,
      color: '#ff6d02',
    },
    {
      item: 'Local defense forces (PDFs/LPDFs)',
      count: 47,
      percentage: 4.6,
      color: '#ff994d',
    },
    {
      item: 'Military commission’s social service department',
      count: 46,
      percentage: 4.5,
      color: '#fbbc05',
    },
    {
      item: 'National Unity Government (NUG)',
      count: 10,
      percentage: 1,
      color: '#fcd04f',
    },
  ],
}

export const fig15FeelingSufficiency: SurveyData = {
  question:
    'Figure 15: Compared to last year, do you feel that your family has enough resources to meet daily needs?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025.',
  payload: [
    {
      label: 'No',
      percentage: 89,
      count: 899,
      color: '#5482a3',
    },
    {
      label: 'Yes',
      percentage: 11,
      count: 116,
      color: '#f07b72',
    },
  ],
}

export const fig16InsufficiencyReasons: SurveyData = {
  question:
    'Figure 16: Why do you feel that your family does not meet daily needs?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025.',
  id: 16,
  layout: 'vertical',
  payload: [
    {
      item: 'Increased good prices',
      count: 851,
      percentage: 95,
      color: '#ea4335',
    },
    {
      item: 'Job loss and poor employment conditions',
      count: 505,
      percentage: 56,
      color: '#f07b72',
    },
    {
      item: 'Market blockage',
      count: 402,
      percentage: 45,
      color: '#33a853',
    },
  ],
}

export const fig17MainNeeds: SurveyData = {
  question:
    'Figure 17: What is the most urgent need amid widespread economic hardship?',
  note: 'The data reflect conditions during the 60 days leading up to September 23, 2025. This question allows multiple selections.',
  layout: 'vertical',
  payload: [
    {
      item: 'Job Opportunities',
      count: 817,
      percentage: 80,
      color: '#ea4335',
    },
    {
      item: 'Security',
      count: 647,
      percentage: 64,
      color: '#f07b72',
    },
    {
      item: 'Health Services',
      count: 574,
      percentage: 57,
      color: '#33a853',
    },
    {
      item: 'Food',
      count: 537,
      percentage: 53,
      color: '#71c287',
    },
    {
      item: 'Transportation',
      count: 509,
      percentage: 50,
      color: '#4285f4',
    },
    {
      item: 'Education',
      count: 355,
      percentage: 35,
      color: '#7baaf7',
    },
  ],
}

export const fig18OutlookOnSituation = {
  question: 'Figure 18: How do you view the current situation today?',
  note: 'Figure 16: Why do you feel that your family does not meet daily needs?',
  payload: [
    {
      label: 'Can continue to struggle on',
      percentage: 53,
      count: 539,
      color: '#f07b72',
    },
    {
      label: 'Hopeless',
      percentage: 42,
      count: 424,
      color: '#8c6aa9',
    },
    {
      label: 'Will Get Better',
      percentage: 5,
      count: 52,
      color: '#46bdc6',
    },
  ],
}
