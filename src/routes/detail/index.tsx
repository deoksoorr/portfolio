import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useClientsStore } from '../../store/clients';

const Detail = () => {
  const { name } = useParams();
  const { getClient } = useClientsStore((state: any) => state);
  const [data, setData] = useState(null);
  useEffect(() => {
    const data = getClient(name);
    if (data) {
      setData(data);
    }
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      {typeof data === 'object' && data && data.name}
      <br />
      {data?.id}
      <br />
      {data?.description}
    </div>
  );
};

export default Detail;
