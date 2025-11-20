import DownloadButton from '@/app/components/blockage-survey/util/download-button'
import { DownloadContent } from '@/library/download-data'

export default function DownloadSection({
  content,
}: {
  content: DownloadContent[]
}) {
  return (
    <div
      className={
        'mt-10 flex flex-col justify-center items-center bg-gray-100 p-5 lg:w-2/3 mx-auto'
      }
    >
      <p className={'text-sm font-medium'}>Download the publication here.</p>
      <div className={'mt-3 flex flex-col justify-center md:flex-row'}>
        {content.map(({ id, text, href }) => (
          <DownloadButton key={id} text={text} href={href} />
        ))}
      </div>
    </div>
  )
}
