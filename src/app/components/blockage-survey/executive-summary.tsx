import { RedSquareIcon } from '@/app/components/chart-ui/red-square-icon'
import DownloadButton from '@/app/components/blockage-survey/util/download-button'
import React from 'react'

function ExecutiveSummary() {
  return (
    <div id="executive-summary">
      <h2 className={'font-bold text-xl mb-5 uppercase'}>
        A Survey of Myanmar&apos;s Socioeconomic Crisis and Public Resilience
      </h2>
      <h3 className={'font-medium flex items-center text-lg mb-5'}>
        <RedSquareIcon /> Summary
      </h3>
      <p className={'mb-3'}>
        In late September 2025, ISP-Myanmar conducted a nationwide survey to
        assess how conflict-related trade disruptions have affected the public.
        A total of <span className={'font-bold'}>1,015 respondents</span> from{' '}
        <span className={'font-bold'}>85 townships</span> across all 15 regions
        and states of Myanmar, including the Naypyitaw Council Territory,
        participated in the study.
      </p>
      <p className={'mb-3'}>
        Survey findings reveal that trade disruptions have caused{' '}
        <span className={'font-bold'}>
          shortages of daily consumer goods and basic medicines
        </span>
        , and prices for these goods have increased by{' '}
        <span className={'font-bold'}>one and a half to twice</span>, or even
        three or four times, in some areas. The healthcare sector has been hit
        hard, particularly due to medicine shortages, price surges, and
        difficult access to healthcare facilities. Livelihoods have also
        deteriorated, forcing many{' '}
        <span className={'font-bold'}>
          to switch jobs or struggle with more restricted income
        </span>
        . To cope, people have turned inward—cutting back on household budgets,
        consumption, and relying on support from local charity groups and Civil
        Society Organizations (CSOs) to get by.
      </p>
      <p className={'mb-3'}>
        The report finds that the State Security and Peace Commission (SSPC)’s
        mismanaged economic policies and administration have upended much of the
        country’s economic system. Survey results also suggest that the{' '}
        <span className={'font-bold'}>
          SSPC’s administrative apparatus has limited capacity to provide relief
          and promote wellbeing of the citizens
        </span>
        . Similarly, the ability of Ethnic Armed Organizations (EAOs), local
        defense forces (PDFs and LPDFs), and the National Unity Government (NUG)
        to offer meaningful assistance remains{' '}
        <span className={'font-bold'}>
          severely limited as alternative service providers
        </span>
        .
      </p>
      <p className={'mb-3'}>
        Respondents felt that they do not have enough for their needs compared
        to last year citing rising prices and poor job prospects. As conditions
        continue to worsen, the{' '}
        <span className={'font-bold'}>public’s foremost demands</span> are for{' '}
        <span className={'font-bold'}>employment and personal security</span>.
        When asked how they viewed current conditions,{' '}
        <span className={'font-bold'}>just over half of respondents</span> said
        they <span className={'font-bold'}>“can continue to struggle on,”</span>{' '}
        while <span className={'font-bold'}>a significant portion</span> also
        described the situation as{' '}
        <span className={'font-bold'}>“hopeless.”</span> Only{' '}
        <span className={'font-bold'}>a small minority</span> believed
        conditions <span className={'font-bold'}>“will get better.”</span>
      </p>
      <p className={'mb-5'}>
        The survey findings are organized into five sections. These findings are
        preliminary rather than conclusive, underscoring the need for more
        comprehensive socioeconomic research. Some of the results were also
        discussed in the October 18, 2025, episode of{' '}
        <span className={'font-bold'}>30 Minutes with the ISP</span>, titled{' '}
        <a
          href="https://ispmyanmar.com/event/the-spirit-is-willing-but-the-flesh-is-weak/"
          className={'italic whitespace-pre-wrap'}
        >
          “The Spirit Is Willing, but the Flesh Is Weak.”
        </a>{' '}
        The full discussion, with English subtitles, is available on
        ISP-Myanmar’s website and YouTube channel.
      </p>
      <div className={'flex flex-col items-center lg:hidden'}>
        <DownloadButton
          text={'Download PDF'}
          href={
            'https://ispmyanmar.com/wp-content/uploads/2025/11/Raising-the-Lanterns-Wick-High.pdf'
          }
        />
      </div>
    </div>
  )
}
export default React.memo(ExecutiveSummary)
