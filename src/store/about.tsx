import create from 'zustand';
interface UseAboutStoreType {
  aboutList: {
    id: string;
    num: string;
    stack: string;
    position: string;
    name: string;
  }[];
  detail: {}[];
}

const useAboutStore = create<UseAboutStoreType>((set) => ({
  aboutList: [
    {
      id: '01',
      num: '00-1',
      stack: 'Artist',
      position: 'Illustrator',
      name: 'Nessi',
    },
    {
      id: '02',
      num: '00-2',
      stack: 'Artist',
      position: 'Illustrator',
      name: 'Kim In',
    },
    {
      id: '03',
      num: '00-3',
      stack: 'Artist',
      position: 'Illustrator',
      name: 'Kim Seungsoo',
    },
    {
      id: '04',
      num: '00-4',
      stack: 'Artist',
      position: 'Illustrator',
      name: 'Kim Ayeong',
    },
  ],
  detail: [],
}));

export { useAboutStore };
