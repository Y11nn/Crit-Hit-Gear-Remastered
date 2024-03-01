import '../assets/styles/App.css';
import React from 'react';
import ArmorImage from '../assets/images/Armor.webp';


export default function ArmorPage() {
   
  return (
  <div id = "main-category-container">  
    <div className="category-containers">
      <img className = "category-images" src={ArmorImage} alt="Armor-Category"/>
      <p className="category-text">Armor</p>
    </div>
    <div className="category-containers">
      <img className = "category-images" src={ArmorImage} alt="Armor-Category"/>
      <p className="category-text">Armor</p>
    </div>
    <div className="category-containers">
      <img className = "category-images" src={ArmorImage} alt="Armor-Category"/>
      <p className="category-text">Armor</p>
    </div>
    <div className="category-containers">
      <img className = "category-images" src={ArmorImage} alt="Armor-Category"/>
      <p className="category-text">Armor</p>
    </div>
  </div>
  );
}

