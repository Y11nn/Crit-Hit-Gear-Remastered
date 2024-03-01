import '../assets/styles/App.css';
import React from 'react';
import ArmorImage from '../assets/images/Armor.webp';
import SwordImage from '../assets/images/logo-sword.png';
import AccessoriesImage from '../assets/images/Accessories.png';
import ConsumablesTrinket from '../assets/images/Consumables.png';
import TrinketsImage from '../assets/images/Trinket.png';
import MountsImage from '../assets/images/Mounts.png';
import PetsImage from '../assets/images/Pets.png';
import { Link } from 'react-router-dom';

export default function MainPage() {

  return (
  <div id = "main-category-container">
    <div className="category-containers">
      <Link to="/ArmorPage" style={{textDecoration: 'none'}}>
      <img className = "category-images" src={ArmorImage} alt="Armor-Category"/>
      <p className="category-text">Armor</p>
      </Link>
    </div>
    <div className="category-containers">
      <Link to="/WeaponsPage" style={{textDecoration: 'none'}}>
      <img className = "category-images" src={SwordImage} alt="Weapon-Category"/>
      <p className="category-text">Weapons</p>
      </Link>
    </div>
    <div className="category-containers">
      <Link to="/AccessoriesPage" style={{textDecoration: 'none'}}>
      <img className = "category-images" src={AccessoriesImage} alt="Accessories-Category"/>
      <p className="category-text">Accessories</p>
      </Link>
    </div>
    <div className="category-containers">
      <Link to="/ConsumablesPage" style={{textDecoration: 'none'}}>
      <img className="category-images" src={ConsumablesTrinket} alt="Consumables-Category"/>
      <p className="category-text">Consumables</p>
      </Link>
    </div>
    <div className="category-containers">
      <Link to="/TrinketsPage" style={{textDecoration: 'none'}}>
      <img className="category-images" src={TrinketsImage} alt="Trinkets-Category"/>
      <p className="category-text">Trinkets</p>
      </Link>
    </div>
    <div className="category-containers">
      <Link to="/MountsPage" style={{textDecoration: 'none'}}>
      <img className="category-images" src={MountsImage} alt="Mounts-Category"/>
      <p className = "category-text">Mounts</p>
      </Link>
    </div>
    <div className="category-containers">
      <Link to="/PetsPage" style={{textDecoration: 'none'}}>
      <img className="category-images" src={PetsImage} alt="Pets-Category"/>
      <p className = "category-text">Pets</p>
      </Link>
    </div>
  </div>
  );
}

