import { createContext } from 'react';

const SearchContext = createContext({
  searchText: '',
  onSearch: () => {},
});
export default SearchContext;
