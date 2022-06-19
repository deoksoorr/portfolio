import create from 'zustand';
interface UseAboutStoreType {
  aboutList: {
    id: string;
    num: string;
    stack: string[];
    year: number;
    name: string;
  }[];
  detail: {}[];
}

const useAboutStore = create<UseAboutStoreType>((set) => ({
  aboutList: [
    {
      id: '01',
      num: '00-1',
      stack: ['React', ' / ', 'Typescript'],
      year: 2022,
      name: 'LEMKUS',
    },
    {
      id: '02',
      num: '00-2',
      stack: ['Vue', ' / ', 'Sass'],
      year: 2022,
      name: 'SOPHIE DALLAMORE',
    },
    {
      id: '03',
      num: '00-3',
      stack: ['Java', ' / ', 'Spring boot'],
      year: 2022,
      name: 'VANA',
    },
    {
      id: '04',
      num: '00-4',
      stack: ['Design'],
      year: 2021,
      name: 'TIGRE WHEEL',
    },
  ],
  detail: [],
}));

export { useAboutStore };
