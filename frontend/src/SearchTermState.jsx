import React, { useState } from 'react';
import SearchTermContext from './SearchTermContext';

export default function SearchTermState({ children }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchTermContext.Provider>
  );
}
