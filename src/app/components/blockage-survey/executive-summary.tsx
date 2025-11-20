import { RedSquareIcon } from '@/app/components/chart-ui/red-square-icon'
import DownloadSection from '@/app/components/blockage-survey/download'
import { downloadContents } from '@/library/download-data'
import DownloadButton from "@/app/components/blockage-survey/util/download-button";

export default function ExecutiveSummary() {
  return (
    <div id="executive-summary">
      <h2 className={'font-bold text-xl mb-5 uppercase'}>
        A Survey of Myanmar&apos;s Socioeconomic Crisis and Public Resilience
      </h2>
      <h3 className={'font-medium flex items-center text-lg mb-5'}>
        <RedSquareIcon /> Executive Summary
      </h3>
      <p className={'mb-3'}>
        In late September 2025, ISP-Myanmar conducted a nationwide survey to
        assess how conflict-related trade route blockages have affected the
        public. A total of{' '}
        <span className={'font-bold'}>1,015 respondents</span> from{' '}
        <span className={'font-bold'}>85 townships</span> across all 15 regions
        and states of Myanmar, including the Naypyitaw Council Territory,
        participated in the study.
      </p>
      <p className={'mb-3'}>
        Survey findings reveal that trade blockages have caused{' '}
        <span className={'font-bold'}>
          shortages of daily consumer goods and basic medicines
        </span>
        , and prices for these goods have increased by{' '}
        <span className={'font-bold'}>half to twice</span>, or even three or
        four times, in some areas. As Myanmar relies heavily on imports for
        western medicine, the healthcare sector has been hit particularly hard:
        medicine shortages and price surges have left many people struggling to
        reach hospitals and clinics. Livelihoods have also deteriorated, forcing
        many{' '}
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
        </span>
        . Similarly, the ability of Ethnic Armed Organizations (EAOs), local
        defense forces (PDFs and LPDFs), and the National Unity Government (NUG)
        to offer meaningful assistance remains{' '}
        <span className={'font-bold'}>severely limited</span>.
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
        The survey findings are organized into five sections. These findings are preliminary rather than conclusive, underscoring the
        need for more comprehensive socioeconomic research. Some of the results
        were also discussed in the October 18, 2025, episode of{' '}
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
        {/*<DownloadSection content={downloadContents} />*/}
          <DownloadButton text={'Download PDF'} href={'/'}/>
      </div>
    </div>
  )
}
