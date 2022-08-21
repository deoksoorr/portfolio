import create from 'zustand';

interface usenewmainArtistStoreType {
  artistList: {
    id: string;
    name: string;
    position: string;
    description: string;
    photo: string[];
  }[];
}

const usenewmainArtistStore = create<usenewmainArtistStoreType>((set) => ({
  artistList: [
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
      photo: ['1', '2', '3', '4', '5'],
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
      photo: ['1', '2', '3', '4'],
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
  ],
}));

export { usenewmainArtistStore };
