import { RedSquareIcon } from '@/app/components/chart-ui/red-square-icon'
import DownloadSection from '@/app/components/blockage-survey/download'
import { downloadContents } from '@/library/download-data'
import DownloadButton from "@/app/components/blockage-survey/util/download-button";

export default function Appendix() {
  return (
    <div id={'appendix'} className={'mt-20'}>
      <h3 className={'font-medium flex items-center text-lg mb-5'}>
        <RedSquareIcon /> Appendix: Survey Methodology
      </h3>
      <p className={'w-full mb-3'}>
        This brief survey was conducted to examine the impact of
        conflict-related trade blockades on the public. A total of{' '}
        <span className={'font-medium'}>
          1,015 respondents from 85 townships
        </span>{' '}
        across all 15 regions and states of Myanmar, including the Naypyitaw
        Council Territory, participated in the study.
      </p>
      <p className={'w-full mb-3'}>
        A quantitative approach was used in the data-collection. A sampling
        frame was created for a sample population targeting{' '}
        <span className={'font-medium'}>
          1,020 people across 85 townships (12 locals per township)
        </span>
        . Among these townships, 32 district-level townships and 11 townships
        under martial law were included, but due to communication difficulties,
        only 1,015 responses were received.
      </p>
      <p className={'w-full mb-3'}>
        Purposive sampling was employed, with each township’s sample required to
        meet <span className={'font-medium'}>four criteria</span>:
      </p>
      <ol className={'list-decimal list-inside mb-3'}>
        <li className={'py-1'}>
          respondents must be local residents of the township
        </li>
        <li className={'py-1'}>include at least five women</li>
        <li className={'py-1'}>
          represent all area types, including urban, rural, border, and IDP camp
          residents
        </li>
        <li className={'py-1'}>be aged 18 or older</li>
      </ol>
      <p className={'w-full mb-3'}>
        Data was collected via online surveys, phone calls, and in-person
        interviews from{' '}
        <span className={'font-medium'}>September 23-28, 2025</span>.
      </p>
      <p className={'w-full mb-3'}>
        The survey was conducted by the respective research team leaders in
        accordance with the ISP-Myanmar&#39;s security protocols and ethical
        guidelines. During the interview, respondents were informed and
        consented to the secure collection of their personal information and
        responses in accordance with the ISP-Myanmar’s data security policies.
        Upon completion of the survey, the data collector stores the collected
        data in accordance with ISP-Myanmar&#39;s established protocols.
      </p>
      <p className={'w-full mb-3'}>
        <a
          href="https://ispmyanmar.com/publications/"
          target={'_blank'}
          className={'underline decoration-pink-600 hover:no-underline'}
        >
            Please find other research and publications here.
        </a>
      </p>
        <div className={'flex flex-col items-center lg:hidden'}>
            <DownloadSection content={downloadContents} />
            {/*<DownloadButton text={'Download PDF'} href={'/'}/>*/}
        </div>
    </div>
  )
}
