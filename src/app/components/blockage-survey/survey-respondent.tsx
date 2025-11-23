import { RedSquareIcon } from '@/app/components/chart-ui/red-square-icon'
import PieChartApp from '@/app/components/chart-ui/pie-chart'
import { age, gender, income, location } from '@/library/blockage-data'
import Image from 'next/image'
import React, { useMemo } from 'react'
import useAnimateOnScroll from '@/app/components/blockage-survey/util/animate-on-scroll'

function SurveyRespondent() {
  const figures: string[] = useMemo(
    () => ['gender', 'location', 'income', 'age'],
    [],
  )
  const visibleIds = useAnimateOnScroll(figures)

  return (
    <div id="respondent-info" className={'mt-10'}>
      <h3 className={'font-medium flex items-center text-lg mb-5'}>
        <RedSquareIcon />
        Respondent Demographics
      </h3>
      <p className={'mb-3'}>
        A total of 1,015 respondents participated in the survey.{' '}
        <span className={'font-bold'}>57 percent</span> were female (579
        respondents), followed by{' '}
        <span className={'font-bold'}>41 percent male</span> (417 respondents),
        and <span className={'font-bold'}>two percent</span> others (19
        respondents). The survey covered a mix of locations: urban areas, rural
        areas, border areas, and IDP (Internally Displaced Person) camps.
        Participants were 18 years of age and older, with the 26–40 age group
        the largest, followed by those aged 41–60. In terms of monthly household
        income, <span className={'font-bold'}>24 percent</span> reported earning
        between 400,000 and 600,000 MMK,{' '}
        <span className={'font-bold'}>20 percent</span> between 200,000 and
        400,000 MMK, and <span className={'font-bold'}>18 percent</span> over 1
        million MMK.
      </p>
      <div className={'chart-grid grid grid-cols-1 xl:grid-cols-2 gap-4 my-10'}>
        <div
          id={'gender'}
          className={`opacity-0 ${visibleIds.includes('gender') ? 'opacity-100' : ''} transition-all duration-800 border-t-2 border-blue-300 w-full`}
        >
          {visibleIds.includes('gender') && <PieChartApp props={gender} />}
        </div>
        <div
          id={'location'}
          className={`opacity-0 ${visibleIds.includes('location') ? 'opacity-100' : ''} transition-all duration-800 border-t-2 border-blue-300 w-full`}
        >
          {visibleIds.includes('location') && <PieChartApp props={location} />}
        </div>
        <div
          id={'income'}
          className={`opacity-0 ${visibleIds.includes('income') ? 'opacity-100' : ''} transition-all duration-800 border-t-2 border-blue-300 w-full`}
        >
          {visibleIds.includes('income') && <PieChartApp props={income} />}
        </div>
        <div
          id={'age'}
          className={`opacity-0 ${visibleIds.includes('age') ? 'opacity-100' : ''} transition-all duration-800 border-t-2 border-blue-300 w-full`}
        >
          {visibleIds.includes('age') && <PieChartApp props={age} />}
        </div>
      </div>
      <div>
        <Image
          className={'w-full h-auto object-cover'}
          src={
            'https://ispmyanmar.com/wp-content/uploads/2025/11/Blockage-Survey_Eng_Map.jpg'
          }
          alt={'Blockage Survey Map'}
          width={600}
          height={700}
        />
      </div>
    </div>
  )
}
export default React.memo(SurveyRespondent)
