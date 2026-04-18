export interface PhotoWork {
  id: string
  title: string
  category: 'portrait' | 'landscape' | 'urban' | 'product'
  src: string
  srcLarge: string
  aspectRatio: number
  year: number
}

export interface VideoWork {
  id: string
  title: string
  description: string
  duration: string
  thumbnail: string
  videoUrl: string
  platform: 'youtube' | 'vimeo' | 'local' | 'bilibili'
  bvid?: string
  year: number
  tags: string[]
}

export interface PersonalInfo {
  name: string
  title: string
  slogan: string
  heroImage: string
  email: string
  wechat: string
  socials?: SocialLink[]
}

export interface SocialLink {
  platform: 'instagram' | 'weibo' | 'bilibili' | 'xiaohongshu' | 'behance' | 'dribbble'
  url: string
  label: string
}
