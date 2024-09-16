import './App.css';
import Header from './component/header/Header';
import Body from './component/body/Body';
import Footer from './component/footer/Footer';
import { useState } from 'react';

function App() {
  const category = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Strawberry', 'Blueberry'];
  
  const brand = new Set(['Ajmal', 'Lattafa', 'Taif Al Emarat', 'Al Haramain', 'Naseem Perfumes', 'Abdul Samad Al Qurashi', 'Rasasi']);
  const gender = new Set(['male', 'female', 'unisex']);
 
  const [filter, setFilter] = useState('');
  const [filterList, setFilterList] = useState({ brand: [], gender: [] });

  // Function to update filter (for search)
  const filterQuery = (word) => {
    setFilter(word);
    console.log("filter", word);
  };

  // Filter perfumes list based on search and selected filters
  const filteredList = category.filter(item => 
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
 
        <Header 
          filterQuery={filterQuery} 
          written={filter} 
          filterOption={{ brand, gender }} 
          filter={{ get: filterList, set: setFilterList }} 
        />
        <Body 
          perfumesList={filteredList} 
          onSearch={filter} 
          searchTermList={filterList} 
        />
        <Footer />
    </div>
  );
}

export default App;