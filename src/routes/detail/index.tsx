import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useClientsStore } from '../../store/clients';
import { ClientType } from '../../types/clientsType';

const Detail = () => {
  // url 에 포함되있는 name 파라미터를 가져온다.
  const { name } = useParams();
  console.log(name);
  // useClientsStore getCliet 함수 가져온다.
  const { getClient } = useClientsStore((state) => state);
  // state에 데이터 저장.
  const [data, setData] = useState<ClientType | null>(null);
  useEffect(() => {
    // name 이 있으면 데이터 패치.
    if (name) {
      const data = getClient(name);
      if (data) {
        setData(data);
      }
    }
  }, []);

  // 데이터 없으면 리턴 false
  if (!data) return <></>;
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      {data.name}
      <br />
      {data.id}
      <br />
      {data.description}
    </div>
  );
};

export default Detail;
