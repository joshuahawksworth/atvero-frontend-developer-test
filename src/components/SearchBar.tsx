import React, { useState } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Search Documents</h2>
      <input 
        type="text" 
        placeholder="Search by title..." 
        value={query} 
        onChange={handleInputChange} 
        className="px-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
