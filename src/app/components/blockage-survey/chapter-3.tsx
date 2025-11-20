import { RedSquareIcon } from '@/app/components/chart-ui/red-square-icon'
import PieChartApp from '@/app/components/chart-ui/pie-chart'
import {
  fig10LivelihoodChange,
  fig11IncomeChange,
} from '@/library/blockage-data'

export default function Chapter3() {
  return (
    <div id="livelihood-impacts" className={'mt-10'}>
      <h3 className={'font-medium flex items-center text-lg mb-5'}>
        <RedSquareIcon /> 3. Impacts on Livelihoods
      </h3>
      <p className={'lg:w-full'}>
        The conflict-driven blockages along trade routes have also affected the
        livelihoods of the respondents and their households. When asked whether
        there had been changes to their job/livelihood within 60 days before
        September 23, 2025,{' '}
        <span className={'font-bold'}>36 percent (365 respondents)</span>{' '}
        reported that they or their family members had experienced such a
        change, while the other{' '}
        <span className={'font-bold'}>64 percent (650 respondents)</span> had
        not (
        <a href="#fig10" className={'underline decoration-pink-600'}>
          see Figure 10
        </a>
        ).
      </p>
      <div
        id={'fig10'}
        className={'w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <PieChartApp props={fig10LivelihoodChange} />
      </div>
      <p className={'lg:w-full'}>
        When asked whether their income had changed,{' '}
        <span className={'font-bold'}>34 percent (344 respondents)</span>{' '}
        reported no change. Meanwhile,{' '}
        <span className={'font-bold'}>35 percent (360 respondents)</span>
        reported a slight decrease, and{' '}
        <span className={'font-bold'}>29 percent (290 respondents)</span>{' '}
        reported a significant decrease. In contrast, a very small percentage of
        respondents experienced an income increase:{' '}
        <span className={'font-bold'}>only 1.5 percent (16 respondents)</span>{' '}
        saw a raise, and an even smaller{' '}
        <span className={'font-bold'}>0.5 percent (five respondents)</span>{' '}
        reported a significant increase (
        <a href="#fig11" className={'underline decoration-pink-600'}>
          see Figure 11
        </a>
        ).
      </p>
      <div
        id={'fig11'}
        className={'w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <PieChartApp props={fig11IncomeChange} />
      </div>
    </div>
  )
}
