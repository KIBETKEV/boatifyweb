import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { boatListings } from "../pages/Boats"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function BoatDetails() {
    const { id } = useParams();
    const boat = boatListings.find((b) => b.id === parseInt(id));

    if (!boat) {
        return <h2 style={{ textAlign: "center", color: "red" }}>Boat not found!</h2>;
    }

    const images = Array.isArray(boat.images) ? boat.images : [boat.images]; // Handle single vs multiple images
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <div style={{ display: "flex", gap: "30px", padding: "20px", alignItems: "center" }}>
            
            {/* Left: Amenities - split into two columns */}
            <div style={{ flex: "1", textAlign: "left" }}>
        
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontWeight: "bold" }}>
                    {boat.amenities.map((amenity, index) => (
                        <span key={index} style={{ padding: "10px 5px", fontSize: "1rem", display: "flex", alignItems: "center" }}>
                            ✅ {amenity}
                        </span>
                    ))}
                </div>
            </div>

            {/* Center: Image Carousel  */}
            <div style={{ flex: "2", textAlign: "center", position: "relative" }}>
                <img
                    src={images[currentImageIndex]}
                    alt={boat.name}
                    style={{ width: "100%", height: "800px", objectFit: "cover", borderRadius: "10px" }}
                />
                {images.length > 1 && (
                    <>
                        <button 
                            onClick={prevImage} 
                            style={{ position: "absolute", top: "50%", left: "10px", background: "rgba(0,0,0,0.5)", color: "white", border: "none", fontSize: "1.5rem", padding: "8px", borderRadius: "50%", cursor: "pointer" }}>
                            <FaChevronLeft />
                        </button>
                        <button 
                            onClick={nextImage} 
                            style={{ position: "absolute", top: "50%", right: "10px", background: "rgba(0,0,0,0.5)", color: "white", border: "none", fontSize: "1.5rem", padding: "8px", borderRadius: "50%", cursor: "pointer" }}>
                            <FaChevronRight />
                        </button>
                    </>
                )}
            </div>

            {/* Right: Boat Details */}
            <div style={{ flex: "1", textAlign: "left", fontWeight: "bold" }}>
                <h1>{boat.name}</h1>
                <p>⭐ Rating: {boat.rating}</p>
                <p>📍 Location: {boat.location}</p>
                <p>💰 Price: ${boat.price} hourly</p>
               

            
                <button 
                    style={{ 
                        marginTop: "20px",
                        backgroundColor: "#0ca86f", 
                        color: "white", 
                        border: "none", 
                        fontSize: "1.5rem", 
                        fontWeight: "bold", 
                        padding: "15px 20px", 
                        borderRadius: "10px", 
                        cursor: "pointer",
                        width: "100%",
                        transition: "background-color 0.3s ease"
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#7ed0d9"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#0ca86f"}
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
}

export default BoatDetails;