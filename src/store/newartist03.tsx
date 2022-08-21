import create from 'zustand';

interface usenewArtistStoreType {
  artistListthree: {
    id: string;
    name: string;
    position: string;
    description: string;
    photo: string[];
  }[];
}

const usenewArtistStore3 = create<usenewArtistStoreType>((set) => ({
  artistListthree: [
    {
      id: 'mipak',
      name: 'Mi Pak',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2'],
    },

    {
      id: 'parkseongho',
      name: 'Park Seongho',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2'],
    },

    {
      id: 'sungyeonhwa',
      name: 'Sung Yeonhwa',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'shinhyosun',
      name: 'Shin Hyosun',
      position: 'Sketch',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'yonghahyeon',
      name: 'Yong Hahyeon',
      position: 'Sketch',
      description: 'none',
      photo: ['1', '2', '3', '4'],
    },

    {
      id: 'woohanam',
      name: 'Woo Hanam',
      position: 'Mixture',
      description: 'none',
      photo: ['1', '2'],
    },

    {
      id: 'wonhyeri',
      name: 'Won Hyeri',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2'],
    },

    {
      id: 'yoodaeun',
      name: 'Yoo Daeun',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'leere',
      name: 'Lee Re',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'leesanghwa',
      name: 'Lee Sanghwa',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2'],
    },

    {
      id: 'leeinhye',
      name: 'Lee Inhye',
      position: 'Sketch',
      description: 'none',
      photo: ['1', '2'],
    },

    {
      id: 'leejiseon',
      name: 'Lee Jiseon',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3', '4'],
    },

    {
      id: 'limjuyeong',
      name: 'Lim Juyeong',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'jangsujin',
      name: 'Jang Sujin',
      position: 'Sculpture',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'chosua',
      name: 'Cho Sua',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'jongu',
      name: 'Jong U',
      position: 'Digital Drawing',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'choigyuri',
      name: 'Choi Gyuri',
      position: 'Mixture',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'choijinyeon',
      name: 'Choi Jinyeon',
      position: 'IIstallation Art',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'huhjeongrok',
      name: 'Huh Jeongrok',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3', '4'],
    },

    {
      id: 'kimbareu',
      name: 'Kim Bareu',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3', '4', '5'],
    },
  ],
}));

export { usenewArtistStore3 };
