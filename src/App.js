import './App.css';
import './component/header/Header.js'
import Header from './component/header/Header.js';
import './component/body/Body.js';
import Body from './component/body/Body.js';
import './component/bottom/Bottom.js';
import Bottom from './component/bottom/Bottom.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Bottom/>
    </div>
  );
}

export default App;
