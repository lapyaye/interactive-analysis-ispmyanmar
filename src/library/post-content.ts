export type PostContent = {
  id: number
  title: string
  subtitle: string
  description: string
  date: string
  category: string
  imageUrl: string
}

export type Post = {
  id: number
  url: string
  postContent: PostContent
}

export const posts: Post[] = [
  {
    id: 1,
    url: '/climate-shock',
    postContent: {
      id: 1,
      title: 'Climate Shocks and Response Capacity in Myanmar – A Survey',
      subtitle: '',
      description:
        'The findings reveal that nearly half of the surveyed townships faced multiple climate-related challenges, including droughts, floods, heavy rainfall from cyclones...',
      date: '24 Oct 2025',
      category: 'Climate Conflict Nexus',
      imageUrl:
        'https://ispmyanmar.com/wp-content/uploads/2025/10/Interactive_FP01.jpg',
    },
  },
  {
    id: 2,
    url: '/blockage-survey',
    postContent: {
      id: 2,
      title: "Raising the Lantern's Wick High",
      subtitle:
        "A Survey of Myanmar's Socioeconomic Crisis and Public Resilience",
      description:
        'Survey findings reveal that respondents do not have enough for their needs compared to last year citing rising prices and poor job prospects. As conditions continue to worsen...',
      date: '20 Nov 2025',
      category: 'Socioeconomic Studies',
      imageUrl:
        'https://ispmyanmar.com/wp-content/uploads/2025/11/SCI_BlockageSurvey.jpg',
    },
  },
]
