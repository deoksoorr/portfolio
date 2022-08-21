import create from 'zustand';

interface usenewArtistStoreType {
  artistListone: {
    id: string;
    name: string;
    position: string;
    description: string;
    photo: string[];
  }[];
}

const usenewArtistStore1 = create<usenewArtistStoreType>((set) => ({
  artistListone: [
    {
      id: 'kimseoungsoo',
      name: 'Kim Seungsoo',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3', '4'],
    },

    {
      id: 'kimayeong',
      name: 'Kim Ayeong',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3', '4'],
    },

    {
      id: 'parkseyeon',
      name: 'Park Seyeon',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3', '4'],
    },

    {
      id: 'parku',
      name: 'Park U',
      position: 'Mixture',
      description: 'none',
      photo: ['1', '2', '3', '4'],
    },

    {
      id: 'simeunsol',
      name: 'Sim Eunsol',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'leesangyeop',
      name: 'Lee Sangyeop',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'changjinyeong',
      name: 'Chang Jinyeong',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'junghagyeong',
      name: 'Jung Hagyeong',
      position: 'Sketch',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'choiyeonjae',
      name: 'Choi Yeonjae',
      position: 'Western Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'hwangtak',
      name: 'Hwang Tak',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kimseonghun',
      name: 'Kim Seonghun',
      position: 'Acrylic, Oil',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kimsojeong',
      name: 'Kim Sojeong',
      position: 'Acrylic, Oil',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kimjeongyong',
      name: 'Kim Jeongyong',
      position: 'Ink',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kimjihye',
      name: 'Kim Jihye',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'kimhyeonju',
      name: 'Kim Hyeonju',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'parkyunjin',
      name: 'Park Yunjin',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3', '4'],
    },

    {
      id: 'banyeji',
      name: 'Ban Yeji',
      position: 'Oil Painting',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'shinyeji',
      name: 'Shin Yeji',
      position: 'Acrylic',
      description: 'none',
      photo: ['1', '2', '3'],
    },

    {
      id: 'ohhyejun',
      name: 'Oh Hyejun',
      position: 'Ceramic',
      description: 'none',
      photo: ['1', '2'],
    },

    {
      id: 'leenayeong',
      name: 'Lee Nayeong',
      position: 'Sketch',
      description: 'none',
      photo: ['1', '2', '3'],
    },
  ],
}));

export { usenewArtistStore1 };
