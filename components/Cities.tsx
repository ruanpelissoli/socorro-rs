import React, { useState, useEffect } from 'react';

interface CitiesProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Cities: React.FC<CitiesProps> = ({ value, onChange }) => {
  const [cidades, setCidades] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/cities.json');
        const data = await response.json();
        setCidades(data);
      } catch (error) {
        console.error('Error fetching cidade data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <select
      value={value}
      onChange={onChange}
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    >
      {cidades.map((cidade, index) => (
        <option key={index} value={index} className='py-1'>
          {cidade}
        </option>
      ))}
    </select>
  );
};

export default Cities;
