import create from 'zustand';

interface usenewArtistStoreType {
  artistListtwo: {
    id: string;
    name: string;
    position: string;
    description: string;
    photo: string[];
  }[];
}

const usenewArtistStore2 = create<usenewArtistStoreType>((set) => ({
  artistListtwo: [
    {
      id: 'leedahye',
      name: 'Lee Dahye',
      position: 'Sketch',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'chowongyeong',
      name: 'Cho Wongyeong',
      position: 'Maca',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'chunnuni',
      name: 'Chun Nuni',
      position: 'Sketch',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'choiyeojin',
      name: 'Choi Yeojin',
      position: 'Sketch',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kasanghyeon',
      name: 'Ka Sanghyeon',
      position: 'Photographer',
      description: 'none',
      photo: ['1', '2', '3', '4'],
    },

    {
      id: 'kosanghyeon',
      name: 'Ko Sanghyeon',
      position: 'IIstallation Art',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kwonryeonggu',
      name: 'Kwon Ryeonggu',
      position: 'Photographer',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kwonjieun',
      name: 'Kwon Jieun',
      position: 'Oriental Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kwonhyeokeon',
      name: 'Kwon Hyeokeon',
      position: 'Figure Paintin',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kimnaryeong',
      name: 'Kim Naryeong',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kimnamu',
      name: 'Kim Namu',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3', '4'],
    },

    {
      id: 'kimminju',
      name: 'Kim Minju',
      position: 'Oriental Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kimminji',
      name: 'Kim Minji',
      position: 'Abstract Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kimminhui',
      name: 'Kim Minhui',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3', '4'],
    },

    {
      id: 'kimsijin',
      name: 'Kim Sijin',
      position: 'Abstract Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kimayeon',
      name: 'Kim Ayeon',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2'],
    },

    {
      id: 'kimjeonga',
      name: 'Kim Jeonga',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kimhyojeong',
      name: 'Kim Hyojeong',
      position: 'Pastel',
      description: 'none',
      photo: ['1', '2'],
    },

    {
      id: 'namyuri',
      name: 'Nam Yuri',
      position: 'Sketch',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'laetitia',
      name: 'Laetitia',
      position: 'Sketch',
      description: 'none',
      photo: ['1', '2', '3'],
    },
  ],
}));

export { usenewArtistStore2 };
