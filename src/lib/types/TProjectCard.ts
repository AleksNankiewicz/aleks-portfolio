export type TProjectCard = {
  id: string
  title: string
  description: string
  image: string
  imagePosition: 'left' | 'right'
  imageDeviceType: 'phone' | 'tablet' | 'desktop'
  logo?: string
  siteHref: string
}
