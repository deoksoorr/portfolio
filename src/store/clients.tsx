import create from 'zustand';
import { ClientType } from '../types/clientsType';

interface useClientsStoreType {
  clientsList: ClientType[];
  getClient: (name: string) => ClientType | null;
}

// const useClientsStore = create<useClientsStoreType>(() => ({
const useClientsStore = create<useClientsStoreType>(() => ({
  clientsList: [
    {
      id: '01',
      name: 'Lemkus',
      description:
        'Lemkus reached out to us to create a new design system and conduct an overhaul of the brand’s digital experience. The objective was to provide customers with seamless purchasing journeys and we did this by combining robust user experience with strong and engaging content.',
      btntop: 'VIEW CASE STUDY',
      btnbot: 'READ ABOUT LEMKUS',
    },
    {
      id: '02',
      name: 'Tigerwheel',
      description:
        'We were brought in to refresh their primary digital properties with a particular focus on building a robust eCommerce capability that re-imaged the way consumers purchase tyres, wheels and batteries online. We achieved this by crafting an informative and intuitive purchasing experience, backed by comprehensive usability research and validation.',
      btntop: 'VIEW CASE STUDY',
      btnbot: 'READ ABOUT TIGER WHEEL & TIRE',
    },
    {
      id: '03',
      name: 'Kia',
      description:
        'In collaboration with Kia’s development partner +OneX, we created a ”best-in-class” eCommerce experience underpinned and validated by an in-depth research study that focussed on incorporating the best possible UX principles and analyses.',
      btntop: 'VIEW WORK',
      btnbot: 'EXPLORE KIA',
    },
    {
      id: '04',
      name: 'AfriSam',
      description:
        'In collaboration with Promise Brand Specialists, we were tasked to create an elevated digital experience to reflect the innovative and performance-oriented nature of the brand. The primary goal of the website was to provide a seamless digital service when looking for key information as well as placing and paying for cement orders online.',
      btntop: 'VIEW WORK',
      btnbot: 'EXPLORE AFRISAM',
    },
  ],

  getClient: (name: string) => {
    const client = useClientsStore
      .getState()
      .clientsList.find((c: ClientType) => {
        return c.name === name;
      }) as ClientType;

    if (client) {
      return client;
    }
    return null;
  },
}));

export { useClientsStore };
