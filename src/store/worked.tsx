import create from 'zustand';
interface useWorkedStoreType {
  workedList: {
    title: string;
    subtitle: string;
    description: string;
  }[];
}

const useWorkedStore = create<useWorkedStoreType>((set) => ({
  workedList: [
    {
      title: 'WOOLWORTHS',
      subtitle: 'RESEARCH - STRATEGY',
      description:
        'Working closely with Woolworths within a SPRINT framework, we undertook extensive primary and secondary user research as well as user experience testing with the client’s desired target audience. The result was a tested and validated savings and budgeting proposition.',
    },
    {
      title: 'SNEAKER LAB',
      subtitle: 'DESIGN',
      description:
        'Sneaker LAB specialises in the development, marketing and distribution of cleaning, care and protection products for shoes. We created a simple, clean, and frictionless online experience that embodied the key service attributes that are received at the Sneaker Lab brick and mortar stores. We also highlighted their commitment to communities and the planet by visually dialling up their positioning around being “built on a green philosophy” and a “culture of care".',
    },
    {
      title: 'HKLM',
      subtitle: 'RESEARCH - STRATEGY - DESIGN - DEVELOPMENT',
      description:
        'We’ve been providing HKLM with ongoing web design, development, and optimisation services since 2018. Our team has built web properties for some of South Africa’s most well known brands within the hospitality and education sectors - Tswalu Game Reserve, Richfield, and AAA School of Advertising to name a few.',
    },
    {
      title: 'DIGITAS LIQUORICE',
      subtitle: 'DESIGN',
      description:
        'Digitas Liquorice is owned by the Publicis Groupe - one of the world’s leading communications groups. They brought us in to assist with the redesign of four Unilever brand websites - starting with wireframes and ending with high-fidelity designs which were then handed over to the Unilever development team.',
    },
  ],
}));

export default useWorkedStore;
