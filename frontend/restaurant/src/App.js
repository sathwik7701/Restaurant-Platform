import './App.css';
import Restaurants from './Pages/Restaurants';
import Fillout from './Pages/Fillout';
import { useEffect, useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {

  },[isModalOpen])

  return (
    <div className="App">
      <h1> Restaurents </h1>
      <button onClick={openModal}>create</button>
      {isModalOpen ? ( 
        <Fillout 
          isOpen={isModalOpen} 
          handleClose={closeModal} 
        />
      ) : null}
      <Restaurants />
    </div>
  );
}

export default App;
