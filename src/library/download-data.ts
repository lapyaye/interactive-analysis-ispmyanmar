export interface DownloadContent {
  id: number
  text: string
  href: string
}

export const downloadContents: DownloadContent[] = [
  {
    id: 1,
    text: 'English Version',
    href: '#',
  },
  {
    id: 2,
    text: 'Burmese Version',
    href: 'https://ispmyanmar.com/community/wp-content/uploads/2025/11/Blockage-Survey_Burmese.pdf',
  },
]
