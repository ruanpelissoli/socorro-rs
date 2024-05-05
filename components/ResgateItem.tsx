'use client';

import React, { useState } from 'react';
import Cities from './Cities';

interface ResgateItemProps {
  address: string;
  number: number;
  neighbourhood: string;
  city: string;
  PersonQtd: number;
  PetQtd: number;
}

const ResgateItem: React.FC<ResgateItemProps> = ({
  address,
  number,
  neighbourhood,
  city,
  PersonQtd,
  PetQtd,
}) => {
  const [selectedCidade, setSelectedCidade] = useState<number>(0);

  const handleCidadeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCidade(Number(event.target.value));
  };

  return (
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap'>
      <div className='w-full px-3 mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Endereço:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          value={address}
          readOnly
        />
      </div>
      <div className='w-1/2 px-3 mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Bairro:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          value={neighbourhood}
          readOnly
        />
      </div>
      <div className='w-1/2 px-3 mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Cidade:
        </label>
        <Cities value={selectedCidade} onChange={handleCidadeChange} />
      </div>
      <div className='w-1/2 px-3 mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Nº de Pessoas:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='number'
          value={PersonQtd}
          readOnly
        />
      </div>
      <div className='w-1/2 px-3 mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Nº de Animais:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='number'
          value={PetQtd}
          readOnly
        />
      </div>
    </form>
  );
};

export default ResgateItem;
