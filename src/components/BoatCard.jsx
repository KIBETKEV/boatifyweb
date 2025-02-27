import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function BoatCard({ boat }) {
    if (!boat || !boat.images || boat.images.length === 0) return null;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [liked, setLiked] = useState(false);
    const images = Array.isArray(boat.images) ? boat.images : [boat.images]; // Ensure single images are treated as an array

    const toggleLike = () => {
        setLiked(!liked);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="boat-card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', minHeight: '280px', overflow: 'visible' }}>
            {/* Wishlist Button (Plus and Checkmark) */}
            <div
                onClick={toggleLike}
                style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    fontSize: '1.8rem',
                    color: liked ? '#0ca86f' : 'rgba(255, 255, 255, 0.9)',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    textShadow: '0px 2px 8px rgba(0, 0, 0, 0.4)',
                    zIndex: 50,
                    fontWeight: 'bold'
                }}
            >
                {liked ? '✔️' : '+'}
            </div>
            
            {/* Image Carousel */}
            <div style={{ position: 'relative', width: '100%', height: '320px' }}>
                <img
                    src={images[currentImageIndex]}
                    alt={`Boat: ${boat.name}`}
                    className="boat-card-image"
                    style={{ maxHeight: '320px', objectFit: 'cover', width: '100%' }}
                />
                {/* Show navigation arrows only if multiple images exist */}
                {images.length > 1 && (
                    <>
                        {/* Left Arrow */}
                        <button 
                            onClick={prevImage} 
                            style={{ position: 'absolute', top: '50%', left: '2px', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', cursor: 'pointer', fontSize: '1.5rem', padding: '3px', borderRadius: '0%', zIndex: 50 }}>
                            <FaChevronLeft />
                        </button>
                        {/* Right Arrow */}
                        <button 
                            onClick={nextImage} 
                            style={{ position: 'absolute', top: '50%', right: '2px', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', cursor: 'pointer', fontSize: '1.5rem', padding: '3px', borderRadius: '0%', zIndex: 50 }}>
                            <FaChevronRight />
                        </button>
                    </>
                )}
            </div>

            {/* Boat Details */}
            <div className="boat-card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px' }}>
                <h3 className="boat-card-title" style={{ margin: 4 }}>{boat.name}</h3>
                <p className="boat-card-location" style={{ margin: '4px 0' }}>📍 {boat.location}</p>
                <p className="boat-card-price" style={{ margin: '4px 0' }}>${boat.price?.toLocaleString()} hourly</p>
                <div style={{ minHeight: '44px' }}>
                <Link to={`/boat/${boat.id}`} style={{ textDecoration: 'none' }}>
                    <button className="boat-card-button" style={{ padding: '8px', width: '100%' }}>
                        Book Now
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default BoatCard;