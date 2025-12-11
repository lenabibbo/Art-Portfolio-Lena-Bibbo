export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'The Fight at Falcon Point',
    category: 'AP 2D Design',
    image: '/images/IMG_0779.jpg',
    year: '2025',
    description: 'Exploration of form and space.'
  },
  {
    id: '2',
    title: 'The Neighborhood Pool',
    category: 'AP 2D Design',
    image: '/images/IMG_0780.jpg',
    year: '2025',
    description: 'Visual study in contrast and texture.'
  },
  {
    id: '3',
    title: 'Pro lifer',
    category: 'AP 2D Design',
    image: '/images/IMG_0783.jpg',
    year: '2025',
    description: 'Compositional experiment.'
  },
  {
    id: '4',
    title: 'Dad and his Best Bro',
    category: 'AP 2D Design',
    image: '/images/IMG_0784.jpg',
    year: '2025',
    description: 'Mixed media integration.'
  },
  {
    id: '5',
    title: 'Blue Angels',
    category: 'AP 2D Design',
    image: '/images/IMG_0934.jpg',
    year: '2025',
    description: 'Color theory application.'
  },
  {
    id: '6',
    title: 'Government Shutdown',
    category: 'AP 2D Design',
    image: '/images/IMG_1764.jpg',
    year: '2025',
    description: 'Perspective study.'
  },
  {
    id: '7',
    title: 'Boycott Boycott Boycott, Buy Buy Buy',
    category: 'AP 2D Design',
    image: '/images/IMG_1769.jpg',
    year: '2025',
    description: 'Final composition.'
  }
];
