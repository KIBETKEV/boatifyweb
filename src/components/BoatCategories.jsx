import React from 'react';
import { FaShip, FaCocktail, FaBolt, FaGem, FaAnchor, FaHome, FaWater } from 'react-icons/fa';
import { GiFishingHook, GiSpeedBoat, GiCanoe, GiRaft } from 'react-icons/gi';

function BoatCategories() {
    const categories = [
      { name: 'Sailboats', icon: <FaShip size={24} /> },
      { name: 'Party Boats', icon: <FaCocktail size={24} /> },
      { name: 'Speed Boats', icon: <FaBolt size={24} /> },
      { name: 'Luxury Boats', icon: <FaGem size={24} /> },
      { name: 'Fishing Boats', icon: <GiFishingHook size={24} /> },
      { name: 'Speed Cruisers', icon: <GiSpeedBoat size={24} /> },
      { name: 'Canoes', icon: <GiCanoe size={24} /> },
      { name: 'Houseboats', icon: <FaHome size={24} /> },
      { name: 'Cabin Cruisers', icon: <FaAnchor size={24} /> },
      { name: 'Rafts', icon: <GiRaft size={24} /> },
      { name: 'Floating Villas', icon: <FaWater size={24} /> },
    ];
  
    return (
      <div className="boat-categories" style={{ display: 'flex', justifyContent: 'center', gap: '24px', padding: '16px 0', flexWrap: 'wrap' }}>
        {categories.map((category) => (
          <div
            key={category.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'color 0.3s, transform 0.3s',
              color: '#1f0531',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#0ca86f';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#444';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {category.icon}
            <span style={{ fontSize: '0.9rem', marginTop: '6px', fontWeight: 'bold' }}>{category.name}</span>
          </div>
        ))}
      </div>
    );
  }
  
export default BoatCategories;