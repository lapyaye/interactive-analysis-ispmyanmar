import { RedSquareIcon } from '@/app/components/chart-ui/red-square-icon'
import PieChartApp from '@/app/components/chart-ui/pie-chart'
import {
  fig07MedicineBuyDifficulty,
  fig08MedicineBuyReasons,
  fig09HealthAccess,
} from '@/library/blockage-data'
import BarChartApp from '@/app/components/chart-ui/bar-chart'
import React, { useMemo } from 'react'
import useAnimateOnScroll from '@/app/components/blockage-survey/util/animate-on-scroll'

function Chapter2() {
  const figures: string[] = useMemo(() => ['fig7', 'fig8', 'fig9'], [])

  const visibleIds = useAnimateOnScroll(figures)
  return (
    <div id="healthcare-impacts" className={'mt-10'}>
      <h3 className={'font-medium flex items-center text-lg mb-5'}>
        <RedSquareIcon /> 2. Impacts on the Healthcare
      </h3>
      <p className={'lg:w-full mb-3'}>
        The healthcare sector has been hit hard by the crisis, leading to
        shortages and price hikes of medicines. Furthermore, there have been
        difficulties in visiting hospitals or clinics and in purchasing
        medicines or medical supplies.
      </p>
      <p className={'lg:w-full'}>
        In the past 60 days,{' '}
        <span className={'font-bold'}>74 percent (749 respondents)</span>{' '}
        reported difficulties in purchasing medicines or medical supplies (
        <a href="#fig7" className={'underline decoration-pink-600'}>
          see Figure 7
        </a>
        ), primarily due to sharp price increases (
        <a href="#fig8" className={'underline decoration-pink-600'}>
          see Figure 8
        </a>
        ).
      </p>
      <div
        id={'fig7'}
        className={`opacity-0 ${visibleIds.includes('fig7') ? 'opacity-100' : ''} transition-all duration-800 lg:w-full mt-10 mb-8 border-t-2 border-blue-300`}
      >
        {visibleIds.includes('fig7') && (
          <PieChartApp props={fig07MedicineBuyDifficulty} />
        )}
      </div>
      <div
        id={'fig8'}
        className={`opacity-0 ${visibleIds.includes('fig8') ? 'opacity-100' : ''} transition-all duration-800 lg:w-full mt-10 mb-8 border-t-2 border-blue-300`}
      >
        {visibleIds.includes('fig8') && (
          <BarChartApp props={fig08MedicineBuyReasons} />
        )}
      </div>
      <p className={'lg:w-full'}>
        While <span className={'font-bold'}>60 percent (606 respondents)</span>{' '}
        said they could still reach hospitals or clinics without major
        difficulty,{' '}
        <span className={'font-bold'}>27 percent (270 respondents)</span> found
        it hard to do so,{' '}
        <span className={'font-bold'}>10 percent (107 respondents)</span> could
        only go occasionally, and{' '}
        <span className={'font-bold'}>three percent (32 respondents)</span> said
        they could not go at all (
        <a href="#fig9" className={'underline decoration-pink-600'}>
          see Figure 9
        </a>
        ).
      </p>
      <div
        id={'fig9'}
        className={`opacity-0 ${visibleIds.includes('fig9') ? 'opacity-100' : ''} transition-all duration-800 lg:w-full mt-10 mb-8 border-t-2 border-blue-300`}
      >
        {visibleIds.includes('fig9') && (
          <PieChartApp props={fig09HealthAccess} />
        )}
      </div>
    </div>
  )
}
export default React.memo(Chapter2)
