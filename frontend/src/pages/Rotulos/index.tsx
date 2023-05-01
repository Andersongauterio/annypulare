import { useState } from 'react';
import RotuloDifusor from '../../components/RotuloDifusor';
import './styles.css'

const Rotulos = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  }


  return (
    <div className="annypulare-rotulos-main-container">
      <div className="annypulare-rotulos-title">
        <h1>Rótulos</h1>
      </div>
      <div className="annypulare-rotulos-list">
        <ul className="annypulare-rotulos-ul list-group">
          <li onClick={() => handleItemClick('1')} className="annypulare-rotulos-li list-group-item">Difusores/Home Spray</li>
          <li onClick={() => handleItemClick('2')} className="annypulare-rotulos-li list-group-item">Shampoo</li>
          <li onClick={() => handleItemClick('3')} className="annypulare-rotulos-li list-group-item">Cremes</li>
          <li onClick={() => handleItemClick('4')} className="annypulare-rotulos-li list-group-item">Condicionadores</li>
        </ul>
      </div>
      <div className="annypulare-rotulos-form">
        {selectedItem && (
          <div>
            {selectedItem === '1' && <RotuloDifusor />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rotulos;