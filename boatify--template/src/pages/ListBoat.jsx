import React, { useState } from "react";

const categories = [
    "Sailboats", "Party Boats", "Speed Boats", "Luxury Boats",
    "Fishing Boats", "Speed Cruisers", "Canoes", "Houseboats",
    "Cabin Cruisers", "Rafts", "Floating Villas"
];

const amenitiesList = [
    "Air Conditioning", "Beds", "TV", "Lighting", "Kitchen",
    "Bathroom", "Safety Equipment", "Dining Area", "WiFi", "Storage Space"
];

function ListBoat() {
    const [boatName, setBoatName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const imageURLs = files.map(file => URL.createObjectURL(file));
        setImages([...images, ...imageURLs]);
    };

    const toggleAmenity = (amenity) => {
        setSelectedAmenities(prev =>
            prev.includes(amenity) ? prev.filter(item => item !== amenity) : [...prev, amenity]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBoat = {
            name: boatName,
            location,
            price,
            category: selectedCategory,
            amenities: selectedAmenities,
            images
        };
        console.log("Boat Submitted: ", newBoat);
        alert("Boat Listed Successfully!");
    };

    return (
        <div className="list-boat-container" style={{ maxWidth: "700px", margin: "40px auto", padding: "260px", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>🚤 List Your Boat</h2>
            
            {/* Image Upload Section */}
            <div className="image-upload" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "40px" }}>
                <label htmlFor="image-upload" style={{ cursor: "pointer", padding: "20px 20px", background: "#0ca86f", color: "white", borderRadius: "14px" }}>
                    📸 Upload Images
                </label>
                <input id="image-upload" type="file" multiple accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
                <div className="image-preview" style={{ display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="Boat Preview" style={{ width: "70px", height: "70px", borderRadius: "5px", objectFit: "cover" }} />
                    ))}
                </div>
            </div>

            {/* Boat Details Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", fontSize: '18px' }}>
                <input type="text" placeholder="Boat Name" value={boatName} onChange={(e) => setBoatName(e.target.value)}
                    required style={{ padding: "15px", border: "1px solid #777", borderRadius: "5px" }} />

                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}
                    required style={{ padding: "15px", border: "1px solid #777", borderRadius: "5px" }} />

                <input type="number" placeholder="Hourly Rate ($)" value={price} onChange={(e) => setPrice(e.target.value)}
                    required style={{ padding: "15px", border: "1px solid #777", borderRadius: "5px" }} />

                {/* Category Dropdown */}
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
                    required style={{ padding: "15px", border: "1px solid #777", borderRadius: "5px" }}>
                    <option value="">Select Category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>

                {/* Amenities Selection */}
                <div className="amenities-section" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {amenitiesList.map((amenity, index) => (
                        <label key={index} style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer", fontSize: "1.0rem" }}>
                            <input type="checkbox" checked={selectedAmenities.includes(amenity)} onChange={() => toggleAmenity(amenity)} />
                            {amenity}
                        </label>
                    ))}
                </div>

                <button type="submit" style={{ padding: "12px", background: "#0ca86f", color: "white", border: "none", fontSize: "1rem", fontWeight: "bold", borderRadius: "5px", cursor: "pointer" }}>
                    🚀 List Boat
                </button>
            </form>
        </div>
    );
}

export default ListBoat;