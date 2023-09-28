import Thermometer from 'react-thermometer-component';
import axios from 'axios';

import { useEffect, useState } from 'react';

const baseURL = "https://api.steinhq.com/v1/storages/651605b561eb47055da02529/Administracao";

export default function Page() {  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(baseURL).then((response) => {
        setData(response.data);
      });
    };
    
    fetchData();

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 2 minutes
    }, 600000);

    return () => clearInterval(intervalId);

  }, []);

  if (!data) return null;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pagamentos</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Pagamentos realizados para o Churrasco do PPGEE 2023
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((item)=>(
              <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <span className="absolute inset-0" />
                {item.Grupo}
              </h3>
              <Thermometer
                  theme="light"
                  value={(parseFloat(item.quantidade_atual)/parseFloat(item.quantidade_maxima))*100}
                  max="100"
                  steps="10"
                  format="%"
                  size="large"
                  height="300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  }