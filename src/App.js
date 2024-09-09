import './App.css';
import './component/header/Header.js'
import Header from './component/header/Header.js';
import './component/body/Body.js';
import Body from './component/body/Body.js';
import './component/footer/Footer.js';
import Footer from './component/footer/Footer.js';
import { useState } from 'react';


function App() {
  const category = [
    'Apple','Banana','Orange','Mango','Pineapple','Strawberry','Blueberry',
  ];
  const brand=[
    'Ajmal', 'Lattafa', 'Taif Al Emarat', 'Al Haramain', 'Naseem Perfumes', 'Abdul Samad Al Qurashi', 'Rasasi'
  ]
  const gender=['male','female','unisex']
 
  const [filter,setFilter]= useState("");
  const filterQuery=(word)=>{
    setFilter(word);
  }
  const [searchTerm, setSearchTerm] = useState('');

  const [filterList, setFilterList] = useState({brand:["LV"],"gender":[]});

  const setFilterListFun=(cat,val)=>{
    console.log("te",filterList)
    setFilterList(filterList => ({
      ...filterList,        // Spread the previous state to keep all other values unchanged
      cat:[...filterList[cat],val] // Update only the occupation field
    }));
  }
  console.log("filterList",filterList)
 
  const filteredList = category.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );
 
  return (
    <div className="App">
      <Header category={filterQuery} written={filter} subjects={{br:brand,gender:gender}} setFilterListFun={setFilterListFun}/>
      <Body perfumesList={filteredList} onSearch={filter} searchTermList={filterList} />
      <Footer/>
    </div>
  );
}

export default App;
