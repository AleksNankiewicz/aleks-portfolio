import { TKnowMe } from '../types/TKnowMe'

export const knowMeData: TKnowMe[] = [
  {
    title: 'O mnie',
    description: 'Kim jestem i co robię',
    href: '/aboutMe',
    image: '/images/memojiOne.png',
    imageWidth: 260,
    imageHeight: 260,
  },
  {
    title: 'Umiejętności',
    description: 'Narzędzia i technologie których używam',
    href: '/techStack',
    image: '/images/tech-stack.png',
    imageWidth: 647,
    imageHeight: 417,
    imageClassName: 'scale-[1.46] relative top-[65px] right-[20px]',
  },
] as const
