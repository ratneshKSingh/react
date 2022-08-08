import './App.css';
import Form from './components/form';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Tourist from './components/tourist';
import { useState } from 'react';

function App() {

  const [allTourist, setAllTourist] = useState([]);

  const saveTourist = (tourist) => {
    setAllTourist([...allTourist, tourist]);
    console.log(allTourist);
  }

  return (
    <>
      <BrowserRouter>
        <div style={{ padding: '30px', background: 'green', color: 'white', marginBottom: '50px' }}>
          <div style={{ float: 'right', paddingRight: '15px' }}><Link to="/save-tourist">Form</Link></div>
          <div style={{ float: 'right', paddingRight: '15px' }}><Link to="/">All </Link></div>
          <div style={{ clear: 'both' }}></div>
        </div>
        <Routes>
          <Route path='/' exact element={<Tourist allTourist={allTourist} />} />
          <Route path='/save-tourist' element={<Form save={saveTourist} />} />
        </Routes>
      </BrowserRouter>
      {/* <Form save={ saveTourist }/>
      <Tourist allTourist={ allTourist } /> */}
    </>

  );
}

export default App;
