import { RedSquareIcon } from '@/app/components/chart-ui/red-square-icon'
import BarChartApp from '@/app/components/chart-ui/bar-chart'
import {
  fig15FeelingSufficiency,
  fig14AssistanceProviders,
  fig16InsufficiencyReasons,
  fig17MainNeeds,
  fig18OutlookOnSituation,
} from '@/library/blockage-data'
import PieChartApp from '@/app/components/chart-ui/pie-chart'

export default function Chapter5() {
  return (
    <div id="support-capacity" className={'mt-10'}>
      <h3 className={'font-medium flex items-center text-lg mb-5'}>
        <RedSquareIcon /> 5. Capacity for Support and Hope
      </h3>
      <p className={'lg:w-full'}>
        When asked who was providing assistance amid these hardships, nearly
        half of the respondents—
        <span className={'font-bold'}>49 percent (496 people)</span>—gave a
        stark answer: “no help at all.” The next most common response is the
        &quot;mutual help between locals&quot;, answered by{' '}
        <span className={'font-bold'}>37 percent (376 respondents)</span>.
        Moreover,{' '}
        <span className={'font-bold'}>28 percent (285 respondents)</span> and{' '}
        <span className={'font-bold'}>26 percent (269 respondents)</span>
        reported the support of local charity groups and civil society
        organizations, respectively. In sharp contrast, institutional help was
        reported as minimal. The SSPC’s administrative capacity to provide
        support is seen as minimal, while that of EAOs, local defense forces
        (PDFs and LPDFs), and the NUG remains limited (
        <a href="#fig14" className={'underline decoration-pink-600'}>
          see Figure 14
        </a>
        ).
      </p>
      <div
        id={'fig14'}
        className={'lg:w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <BarChartApp props={fig14AssistanceProviders} />
      </div>
      <p className={'lg:w-full'}>
        Inquiring the question of whether the respondent and the family feel a
        sense of financial security in 2025 compared to 2024, a striking
        majority —{' '}
        <span className={'font-bold'}>89 percent (899 respondents)</span> —said
        they do not (
        <a href="#fig15" className={'underline decoration-pink-600'}>
          see Figure 15
        </a>
        ).
      </p>
      <div
        id={'fig15'}
        className={'w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <PieChartApp props={fig15FeelingSufficiency} />
      </div>
      <p className={'lg:w-full'}>
        When asked to explain their responses, the respondents cited{' '}
        <span className={'font-bold'}>
          price increases and an unstable economy
        </span>{' '}
        (
        <a href="#fig16" className={'underline decoration-pink-600'}>
          see Figure 16
        </a>
        ).
      </p>
      <div
        id={'fig16'}
        className={'lg:w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <BarChartApp props={fig16InsufficiencyReasons} />
      </div>
      <p className={'lg:w-full'}>
        When asked about the most urgent need amid these immediate pressures,
        the top answer was job opportunities, with{' '}
        <span className={'font-bold'}>80 percent (817 respondents)</span>. The
        second most critical need, indicated by{' '}
        <span className={'font-bold'}>64 percent (647 respondents)</span>, was
        security, followed by healthcare services as the third pressing need, at{' '}
        <span className={'font-bold'}>57 percent (574 respondents)</span>. Over{' '}
        <span className={'font-bold'}>half (more than 500 respondents)</span>{' '}
        cited food and transportation as an urgent need. Education was cited by
        the relatively smallest proportion of respondents, at{' '}
        <span className={'font-bold'}>35 percent (355 respondents)</span> (
        <a href="#fig17" className={'underline decoration-pink-600'}>
          see Figure 17
        </a>
        ).
      </p>
      <div
        id={'fig17'}
        className={'lg:w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <BarChartApp props={fig17MainNeeds} />
      </div>
      <p className={'lg:w-full'}>
        At the end of the survey, when summarizing their views about the ongoing
        situations,{' '}
        <span className={'font-bold'}>53 percent (539 respondents)</span>{' '}
        reported that they can continue to struggle on. However,{' '}
        <span className={'font-bold'}>42 percent (424 respondents)</span>{' '}
        believe the situation is hopeless, while only{' '}
        <span className={'font-bold'}>five percent (52 respondents) </span>
        expressed optimism, saying things will get better (
        <a href="#fig18" className={'underline decoration-pink-600'}>
          see Figure 18
        </a>
        ).
      </p>
      <div
        id={'fig18'}
        className={'w-full mt-10 mb-8 border-t-2 border-blue-300'}
      >
        <PieChartApp props={fig18OutlookOnSituation} />
      </div>
    </div>
  )
}
