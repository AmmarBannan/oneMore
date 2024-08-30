import './App.css';
import './component/header/Header.js'
import Header from './component/header/Header.js';
import './component/body/Body.js';
import Body from './component/body/Body.js';
import './component/bottom/Bottom.js';
import Bottom from './component/bottom/Bottom.js';
import { useState } from 'react';


function App() {
  const category = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Strawberry',
    'Blueberry',
  ];
 
  const [filter,setFilter]= useState("");
  const filterQuery=(word)=>{
    setFilter(word);
  }
  const [searchTerm, setSearchTerm] = useState('');
 
  const filteredList = category.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );
  console.log("filteredItems",filter)
  return (
    <div className="App">
      <Header category={filterQuery} written={filter}/>
      <Body perfumesList={filteredList} />
      <Bottom/>
    </div>
  );
}

export default App;
