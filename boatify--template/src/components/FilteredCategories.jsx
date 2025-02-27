import React from "react";
import BoatCard from "./BoatCard"; // Import BoatCard component
import { boatListings } from "../pages/Boats"; // Import full boat listings

function FilteredCategories({ selectedCategory }) {
    // If no category is selected, show all boats
    const filteredBoats = selectedCategory
        ? boatListings.filter((boat) => boat.category === selectedCategory)
        : boatListings; 

    return (
        <div className="filtered-categories-container" style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center", color: "#0ca86f" }}>
                {selectedCategory ? `Showing: ${selectedCategory}` : "All Boats"}
            </h2>

            <div className="boats-grid">
                {filteredBoats.length > 0 ? (
                    filteredBoats.map((boat) => <BoatCard key={boat.id} boat={boat} />)
                ) : (
                    <p style={{ textAlign: "center", color: "#999" }}>No boats available in this category.</p>
                )}
            </div>
        </div>
    );
}

export default FilteredCategories;