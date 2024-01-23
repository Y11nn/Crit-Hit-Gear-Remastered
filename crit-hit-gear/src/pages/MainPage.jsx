import '../assets/styles/App.css';
import React from 'react';
import ArmorImage from '../assets/images/Armor.webp';
import SwordImage from '../assets/images/logo-sword.png';
import AccessoriesImage from '../assets/images/Accessories.png';
import ConsumablesTrinket from '../assets/images/Consumables.png';
import TrinketsImage from '../assets/images/Trinket.png';
import MountsImage from '../assets/images/Mounts.png';
import PetsImage from '../assets/images/Pets.png';

export default function MainPage() {
  return (
  <div id = "main-category-container">  
    <div className="category-containers">
      <img className = "category-images" src={ArmorImage} alt="Armor-Category"/>
      <p className="category-text">Armor</p>
    </div>
    <div className="category-containers">
      <img className = "category-images" src={SwordImage} alt="Weapon-Category"/>
      <p className="category-text">Weapons</p>
    </div>
    <div className="category-containers">
      <img className = "category-images" src={AccessoriesImage} alt="Accessories-Category"/>
      <p className="category-text">Accessories</p>
    </div>
    <div className="category-containers">
      <img className="category-images" src={ConsumablesTrinket} alt="Consumables-Category"/>
      <p className="category-text">Consumables</p>
    </div>
    <div className="category-containers">
      <img className="category-images" src={TrinketsImage} alt="Trinkets-Category"/>
      <p className="category-text">Trinkets</p>
    </div>
    <div className="category-containers">
      <img className="category-images" src={MountsImage} alt="Mounts-Category"/>
      <p className = "category-text">Mounts</p>
    </div>
    <div className="category-containers">
      <img className="category-images" src={PetsImage} alt="Pets-Category"/>
      <p className = "category-text">Pets</p>
    </div>
  </div>
  );
}

