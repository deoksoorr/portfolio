import create from 'zustand';

interface useoldArtistStoreType {
  oldartistList: {
    id: string;
    name: string;
    position: string;
    description: string;
    photo: string[];
  }[];
}

const useoldArtistStore = create<useoldArtistStoreType>((set) => ({
  oldartistList: [
    {
      id: 'kimgeunyeong',
      name: 'Kim Geunyeong',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'kimdaeho',
      name: 'Kim Daeho',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'kimdongyu',
      name: 'Kim Dongyu',
      position: 'Silkscreen',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'kimin',
      name: 'Kim In',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'jeea',
      name: 'Jee A',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'honggyeongpyo',
      name: 'Hong Gyeongpyo',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'kimbyeongjin',
      name: 'Kim Byeongjin',
      position: 'Ink',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'kimyunhui',
      name: 'Kim Yunhui',
      position: 'Mixture',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'kimilju',
      name: 'Kim Ilju',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'kimjiyeong',
      name: 'Kim Jiyeong',
      position: 'Watercolours',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'kimhoseong',
      name: 'Kim Hoseong',
      position: 'Oil',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'shinjaehong',
      name: 'Shin Jaehong',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'leeeunju',
      name: 'Lee Eunju',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'hongjeonghwa',
      name: 'Hong Jeonghwa',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'leejanguk',
      name: 'Lee Janguk',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'leejaeuk',
      name: 'Lee Jaeuk',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'jungyeohwan',
      name: 'Jung Yeohwan',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
    {
      id: 'nessi',
      name: 'NESSI',
      position: 'Illustrator',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
  ],
}));

export { useoldArtistStore };
