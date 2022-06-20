import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useClientsStore } from '../../store/clients';
import { ClientType } from '../../types/clientsType';

const Detail = () => {
  const { name } = useParams();
  const { getClient } = useClientsStore((state) => state);
  const [data, setData] = useState<ClientType | null>(null);
  useEffect(() => {
    if (name) {
      const data = getClient(name);
      if (data) {
        setData(data);
      }
    }
  }, []);
  if (!data) return false;
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
