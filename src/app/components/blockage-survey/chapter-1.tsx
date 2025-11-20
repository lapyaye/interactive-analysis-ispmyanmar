import { RedSquareIcon } from '@/app/components/chart-ui/red-square-icon'
import PieChartApp from '@/app/components/chart-ui/pie-chart'
import {
  fig01ScarcityYesNo,
  fig02ScarcityGoods,
  fig03PriceIncreasePerception,
  fig04PriceIncreaseGoods,
  fig05FamilyImpact,
  fig06PurchaseDifficulty,
} from '@/library/blockage-data'
import BarChartApp from '@/app/components/chart-ui/bar-chart'

export default function Chapter1() {
  return (
    <div id="commodity-shortages" className={'mt-10'}>
      <h3 className={'font-medium flex items-center text-lg mb-5'}>
        <RedSquareIcon /> 1. Commodity Shortages and Price Surge
      </h3>
      <p className={'lg:w-full'}>
        In the 60 days leading up to September 23, 2025, a vast majority of
        respondents—
        <span className={'font-bold'}>85 percent (863 respondents)</span>
        —reported shortages of imported goods caused by trade blockages (
        <a href="#fig1" className={'underline decoration-pink-600'}>
          see Figure 1
        </a>
        ).
      </p>
      <div
        id={'fig1'}
        className={'lg:w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <PieChartApp props={fig01ScarcityYesNo} />
      </div>
      <p className={'lg:w-full'}>
        The most common shortages were everyday consumer goods. Medicine
        shortages were the second most common, followed by dry food, basic food
        items and personal hygiene products.{' '}
        <span className={'font-bold'}>Sixty-six percent (674 respondents)</span>
        reported shortages of consumer goods, while{' '}
        <span className={'font-bold'}>61 percent (620 respondents)</span>
        cited shortages of basic medicines. Only{' '}
        <span className={'font-bold'}>three percent (36 respondents)</span>
        said they had experienced no shortages (
        <a href="#fig2" className={'underline decoration-pink-600'}>
          see Figure 2
        </a>
        ).
      </p>
      <div
        id={'fig2'}
        className={'lg:w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <BarChartApp props={fig02ScarcityGoods} />
      </div>
      <p className={'lg:w-full'}>
        Rising prices compounded these problems;{' '}
        <span className={'font-bold'}>48 percent (486 respondents)</span>
        said prices had increased by 1.5 times, while{' '}
        <span className={'font-bold'}>40 percent (403 respondents)</span> said
        prices had doubled. Another{' '}
        <span className={'font-bold'}>seven percent (68 respondents)</span> and{' '}
        <span className={'font-bold'}>two percent (22 respondents)</span>,
        respectively, reported that prices had risen threefold and fourfold.
        Only <span className={'font-bold'}>three percent (36 respondents)</span>{' '}
        said they had seen no price increase at all (
        <a href="#fig3" className={'underline decoration-pink-600'}>
          see Figure 3
        </a>
        ).
      </p>
      <div
        id={'fig3'}
        className={'w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <PieChartApp props={fig03PriceIncreasePerception} />
      </div>
      <p className={'lg:w-full'}>
        Among the <span className={'font-bold'}>979 respondents</span> who
        answered that prices had increased, when they were asked which goods had
        become more expensive,{' '}
        <span className={'font-bold'}>79 percent (over 770 respondents)</span>{' '}
        pointed to daily consumer items and basic foodstuffs while{' '}
        <span className={'font-bold'}>73 percent (710 respondents)</span> to
        basic medicines (
        <a href="#fig4" className={'underline decoration-pink-600'}>
          see Figure 4
        </a>
        ).
      </p>
      <div
        id={'fig4'}
        className={'lg:w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <BarChartApp props={fig04PriceIncreaseGoods} />
      </div>
      <p className={'lg:w-full'}>
        Unsurprisingly,{' '}
        <span className={'font-bold'}>92 percent (938 respondents)</span> said
        these developments had directly affected their families and themselves,
        while{' '}
        <span className={'font-bold'}>eight percent (77 respondents)</span>{' '}
        reported no impact (
        <a href="#fig5" className={'underline decoration-pink-600'}>
          see Figure 5
        </a>
        ).
      </p>
      <div
        id={'fig5'}
        className={'w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <PieChartApp props={fig05FamilyImpact} />
      </div>
      <p className={'lg:w-full'}>
        Market conditions have also deteriorated.{' '}
        <span className={'font-bold'}>Half of respondents (510 people)</span>{' '}
        said it had become slightly harder to purchase goods for their
        households over the past 60 days, and{' '}
        <span className={'font-bold'}>25 percent (250 respondents)</span> said
        conditions had “noticeably worsened.” A further{' '}
        <span className={'font-bold'}>23 percent (235 respondents)</span>{' '}
        reported no change, while{' '}
        <span className={'font-bold'}>1.8 percent (18 respondents)</span> said
        the situation had improved, and{' '}
        <span className={'font-bold'}>only 0.2 percent (two respondents)</span>{' '}
        found that conditions were notably improved (
        <a href="#fig6" className={'underline decoration-pink-600'}>
          see Figure 6
        </a>
        ).
      </p>
      <div
        id={'fig6'}
        className={'w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <PieChartApp props={fig06PurchaseDifficulty} />
      </div>
    </div>
  )
}
