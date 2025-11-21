import { RedSquareIcon } from '@/app/components/chart-ui/red-square-icon'
import {
  fig12CopingStrategiesFull,
  fig13SocialSecurityImpacts,
} from '@/library/blockage-data'
import BarChartApp from '@/app/components/chart-ui/bar-chart'

export default function Chapter4() {
  return (
    <div id="livelihood-crisis" className={'mt-10'}>
      <h3 className={'font-medium flex items-center text-lg mb-5'}>
        <RedSquareIcon /> 4. Daily Struggles and Coping Mechanisms
      </h3>
      <p className={'lg:w-full'}>
        The combination of a declining economy and ongoing armed conflicts has
        exacerbated the population&#39;s socioeconomic crisis. In response to
        the crisis—characterized by insufficient income, commodity shortages,
        and price hikes—respondents primarily adopted some coping strategies:{' '}
        <span className={'font-bold'}>76 percent (775 respondents)</span>{' '}
        reported cutting back, and a very similar{' '}
        <span className={'font-bold'}>75 percent (766 respondents)</span> stated
        they only purchase cheaper goods and food. More than half —{' '}
        <span className={'font-bold'}>52 percent (525 respondents)</span> — are
        also reducing their meat and fish consumption. Other coping strategies
        include borrowing money, pawning possessions, and eating one less meal a
        day (
        <a href="#fig12" className={'underline decoration-pink-600'}>
          see Figure 12
        </a>
        ).
      </p>
      <div
        id={'fig12'}
        className={'lg:w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <BarChartApp props={fig12CopingStrategiesFull} />
      </div>
      <p className={'lg:w-full'}>
        Inquiring into the social impact of the economic crisis, the survey
        found that{' '}
        <span className={'font-bold'}>81 percent (822 respondents)</span>{' '}
        reported a widespread increase in theft, burglary, and fraud, alongside
        a pervasive rise in anxiety and worry by{' '}
        <span className={'font-bold'}>80 percent (811 respondents)</span>. The
        crisis has spurred an increase in migration, reported by{' '}
        <span className={'font-bold'}>68 percent (694 respondents)</span>, and a
        rise in people engaging in illegal work, reported by{' '}
        <span className={'font-bold'}>44 percent (447 respondents)</span>.
        Alarmingly, a rise in domestic violence was reported by{' '}
        <span className={'font-bold'}>31 percent (312 respondents)</span>; an
        increase in robbery was observed by{' '}
        <span className={'font-bold'}>24 percent (243 respondents)</span>; and,
        most distressingly, an increase in suicide within the community was
        reported by{' '}
        <span className={'font-bold'}>seven percent (74 individuals)</span> (
        <a href="#fig13" className={'underline decoration-pink-600'}>
          see Figure 13
        </a>
        ).
      </p>
      <div
        id={'fig13'}
        className={'lg:w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <BarChartApp props={fig13SocialSecurityImpacts} />
      </div>
    </div>
  )
}
