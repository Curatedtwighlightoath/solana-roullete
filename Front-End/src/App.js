import './styles.css';
import { Route, Routes, } from 'react-router-dom';
import Howto from './routes/How';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Howto/>}/>
      </Routes> 
    </div>
  );
}

export default App;