import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar-container" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '10px',
      border: '2px solid #7ed0d9',
      borderRadius: '18px',
      maxWidth: '600px',
      margin: '20px auto',
      backgroundColor: '#f3f4f6'
    }}>
        <style>
        {`input::placeholder {
            font-family: Arial, sans-serif;
            font-size: 0.95rem;
            color: #7ed0d9;
        }`}
      </style>
      {/* Destination Input */}
      <input
        type="text"
        placeholder="Destination?"
        style={{ padding: '12px', width: '220px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #0ca86f' }}
      />

      {/* Check-in Date */}
      <input
        type="text"
        placeholder="Check-in"
        onFocus={(e) => (e.target.type = 'date')}
        onBlur={(e) => (e.target.type = 'text')}
        style={{ padding: '12px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #0ca86f' }}
      />

      {/* Check-out Date with Placeholder */}
      <input
        type="text"
        placeholder="Check-out"
        onFocus={(e) => (e.target.type = 'date')}
        onBlur={(e) => (e.target.type = 'text')}
        style={{ padding: '12px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #0ca86f' }}
      />


      {/* Search Button */}
      <button
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 'bold',
          backgroundColor: '#0ca86f',
          color: 'white',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#7ed0d9'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#0ca86f'}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;