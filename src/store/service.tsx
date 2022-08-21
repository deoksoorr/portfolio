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
      name: 'Management',
      description:
        '고객의 니즈(Needs)에 맞춰 최적화 된 솔루션을 제공하며, 치밀한 분석을 통한 컨텐츠 기반의 결과물을 제공합니다. `A2O`는 시장의 변화와 트랜드를 끊임없이 분석하고 연구하며, 변화에 대응한 새로운 경험을 고객에게 전달하는 회사로  도약해 나아갈 것입니다.',
      filename: 'a2o_Marketing',
      btntop: 'GET DOCUMENT +',
      btnbot: 'DOWNLOAD',
    },
    {
      id: '02',
      name: 'Marketing',
      description:
        '고객의 니즈(Needs)에 맞춰 최적화 된 솔루션을 제공하며, 치밀한 분석을 통한 컨텐츠 기반의 결과물을 제공합니다. `A2O`는 시장의 변화와 트랜드를 끊임없이 분석하고 연구하며, 변화에 대응한 새로운 경험을 고객에게 전달하는 회사로  도약해 나아갈 것입니다.',
      filename: 'a2o_Marketing',
      btntop: 'GET DOCUMENT +',
      btnbot: 'DOWNLOAD',
    },
  ],

  // clientsList 에서 특정 name에 해당하는 객체만 가져오는 함수
  getClient: (name: string) => {
    //name 조회 후
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
