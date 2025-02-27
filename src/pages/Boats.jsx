
import React from "react";
import BoatCard from "../components/BoatCard";  
import "../index.css";

export const boatListings = [
  {
    id: 1,
    name: "Luxury Yacht",
    images: [
      "https://images.unsplash.com/photo-1562281302-809108fd533c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1634242210756-6759f2d2ff03?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    price: 500,
    location: "Miami, FL",
    rating: 4.5,
    category: "Luxury Boats'",
    amenities: ["🛏 Bed", "🛁 Bathroom", "❄ AC", "📺 TV", "🍽 Dining Area", "🔆 Lighting", "🏊 Swimming Area", "📶 WiFi", "🚪 Storage Space", "🦺 Safety Equipment"]
  },
  {
    id: 2,
    name: "Speed Boat",
    images: [
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=500",
      "https://images.unsplash.com/photo-1614350391736-ed8619d63c06?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    price: 300,
    location: "Los Angeles, CA",
    rating: 5,
    category: "Speed Boats",
    amenities: ["🚀 High Speed", "🦺 Safety Equipment", "🔆 Lighting", "🎶 Sound System"]
  },
  {
    id: 3,
    name: "Sailing Boat",
    images: ["https://images.unsplash.com/photo-1621277224630-81d9af65e40c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
             'https://images.unsplash.com/photo-1614350391736-ed8619d63c06?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    price: 200,
    location: "San Diego, CA",
    rating: 5,
    category: "Sailboat",
    amenities: ["⛵ Sails", "🦺 Safety Equipment", "🔆 Lighting", "🚪 Storage Space"]
  },
  {
    id: 4,
    name: "Fishing Boat",
    images: ["https://plus.unsplash.com/premium_photo-1680831748191-d726a2f7b201?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      'https://images.unsplash.com/photo-1598597285544-73cde918c78d?q=80&w=2656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],   
    price: 150,
    location: "Tampa, FL",
    rating: 4.7,
    category: "Fishing",
    amenities: ["🎣 Fishing Gear", "🦺 Safety Equipment", "🚪 Storage Space", "🔆 Lighting", "🐟 Live Well"]
  },
  {
    id: 5,
    name: "Party Boat",
    images: ["https://plus.unsplash.com/premium_photo-1680831748248-47616728ee9f?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
             "https://images.unsplash.com/photo-1575328514791-2e51500c5779?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: 400,
    location: "Miami Beach, FL",
    rating: 4.8,
    category: "party",
    amenities: ["🎶 Sound System", "🍾 Mini Bar", "💡 Party Lights", "🦺 Safety Equipment", "🍽 Dining Area"]
  },
  {
    id: 6,
    name: "Classic Yacht",
    images: ["https://plus.unsplash.com/premium_photo-1680831748238-1fe52ad0e3af?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661889213741-64b118b28c5f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: 450,
    location: "Palm Beach, FL",
    rating: 4.9,
    category: "Luxuryboat",
    amenities: ["🛏 Bed", "🛁 Bathroom", "❄ AC", "📺 TV", "🍽 Dining Area", "🔆 Lighting", "📶 WiFi", "🦺 Safety Equipment", "🚪 Storage Space", "🍳 Kitchen"]
  },
  {
    id: 7,
    name: "Houseboat",
    images: ["https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: 600,
    location: "Seattle, WA",
    rating: 4.6,
    category: "Houseboat",
    amenities: ["🛏 Bed", "🛁 Bathroom", "❄ AC", "📺 TV", "🍽 Dining Area", "🔆 Lighting", "📶 WiFi", "🦺 Safety Equipment", "🚪 Storage Space", "🍳 Kitchen"]
  },
  {
    id: 8,
    name: "Raft",
    images: "https://images.unsplash.com/photo-1585544313985-f84aac5abf7b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50,
    location: "Colorado River, CO",
    rating: 4.3,
    category: "Rafts",
    amenities: ["🏕 Camping Friendly", "🦺 Safety Equipment", "🚪 Storage Space"]
  },
   {
      id: 9,
      name: "Sailing Boat",
      images: [
        "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?q=80&w=2670&auto=format&fit=crop"
      ],
      price: 200,
      location: "San Diego, CA",
      rating: 5,
      amenities: ["WiFi", "Bathroom", "AC", "Safety Equipment"]
    },
    {
      id: 10,
      name: "Fishing Boat",
      images: [
        "https://plus.unsplash.com/premium_photo-1680831748191-d726a2f7b201?q=80&w=2664&auto=format&fit=crop"
      ],
      price: 150,
      location: "Tampa, FL",
      rating: 4.7,
      amenities: ["Safety Equipment", "Storage Space"]
    },
    {
      id: 11,
      name: "Party Boat",
      images: [
        "https://plus.unsplash.com/premium_photo-1680831748248-47616728ee9f?q=80&w=2664&auto=format&fit=crop"
      ],
      price: 400,
      location: "Miami Beach, FL",
      rating: 4.8,
      amenities: ["WiFi", "AC", "Lighting", "Dining Area", "Bathroom", "Storage Space"]
    },
    {
      id: 12,
      name: "Classic Yacht",
      images: [
        "https://plus.unsplash.com/premium_photo-1680831748238-1fe52ad0e3af?q=80&w=2727&auto=format&fit=crop"
      ],
      price: 450,
      location: "Palm Beach, FL",
      rating: 4.9,
      amenities: ["WiFi", "AC", "Kitchen", "Dining Area", "Bathroom", "Safety Equipment"]
    },
    {
      id: 13,
      name: "Luxury Yacht",
      images: [
        "https://images.unsplash.com/photo-1562281302-809108fd533c?q=80&w=2670&auto=format&fit=crop"
      ],
      price: 500,
      location: "Miami, FL",
      rating: 4.5,
      amenities: ["WiFi", "AC", "Kitchen", "Dining Area", "Bathroom", "Safety Equipment"]
    },
    {
      id: 14,
      name: "Speed Boat",
      images: [
        "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=500"
      ],
      price: 300,
      location: "Los Angeles, CA",
      rating: 5,
      category: "Speed boat",
      amenities: ["Safety Equipment", "Storage Space"]
    },
    {
      id: 15,
      name: "Sailing Boat",
      images: [
        "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?q=80&w=2670&auto=format&fit=crop"
      ],
      price: 200,
      location: "San Diego, CA",
      rating: 5,
      category: "Sailboats",
      amenities: ["WiFi", "Bathroom", "AC", "Safety Equipment"]
    },
    {
      id: 16,
      name: "Fishing Boat",
      images: [
        "https://plus.unsplash.com/premium_photo-1680831748191-d726a2f7b201?q=80&w=2664&auto=format&fit=crop"
      ],
      price: 150,
      location: "Tampa, FL",
      rating: 4.7,
      category: "Fishing Boats",
      amenities: ["Safety Equipment", "Storage Space"]
    },
      {
        id: 17,
        name: "Party Boat",
        images: [
          "https://plus.unsplash.com/premium_photo-1680831748248-47616728ee9f?q=80&w=2664&auto=format&fit=crop"
        ],
        price: 400,
        location: "Miami Beach, FL",
        rating: 4.8,
        amenities: ["WiFi", "AC", "Lighting", "Dining Area", "Bathroom", "Storage Space"]
      },
      {
        id: 18,
        name: "Classic Yacht",
        images: [
          "https://plus.unsplash.com/premium_photo-1680831748238-1fe52ad0e3af?q=80&w=2727&auto=format&fit=crop"
        ],
        price: 450,
        location: "Palm Beach, FL",
        rating: 4.9,
        amenities: ["WiFi", "AC", "Kitchen", "Dining Area", "Bathroom", "Safety Equipment"]
      },
      {
        id: 19,
        name: "Luxury Yacht",
        images: [
          "https://images.unsplash.com/photo-1562281302-809108fd533c?q=80&w=2670&auto=format&fit=crop"
        ],
        price: 500,
        location: "Miami, FL",
        rating: 4.5,
        amenities: ["WiFi", "AC", "Kitchen", "Dining Area", "Bathroom", "Safety Equipment"]
      },
      {
        id: 20,
        name: "Speed Boat",
        images: [
          "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=500"
        ],
        price: 300,
        location: "Los Angeles, CA",
        rating: 5,
        amenities: ["Safety Equipment", "Storage Space"]
      },
      {
        id: 21,
        name: "Sailing Boat",
        images: [
          "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?q=80&w=2670&auto=format&fit=crop"
        ],
        price: 200,
        location: "San Diego, CA",
        rating: 5,
        amenities: ["WiFi", "Bathroom", "AC", "Safety Equipment"]
      },
      {
        id: 22,
        name: "Fishing Boat",
        images: [
          "https://plus.unsplash.com/premium_photo-1680831748191-d726a2f7b201?q=80&w=2664&auto=format&fit=crop"
        ],
        price: 150,
        location: "Tampa, FL",
        rating: 4.7,
        amenities: ["Safety Equipment", "Storage Space"]
      },
      {
        id: 23,
        name: "Houseboat",
        images: [
          "https://images.unsplash.com/photo-1566376154293-4f5615b0dd41?q=80&w=2664&auto=format&fit=crop"
        ],
        price: 600,
        location: "Seattle, WA",
        rating: 4.9,
        amenities: ["WiFi", "AC", "Kitchen", "Dining Area", "Bathroom", "Beds", "Lighting", "Storage Space"]
      },
      {
        id: 24,
        name: "Cabin Cruiser",
        images: [
          "https://images.unsplash.com/photo-1565704034409-71fc142e02d5?q=80&w=2664&auto=format&fit=crop"
        ],
        price: 700,
        location: "Key West, FL",
        rating: 5,
        amenities: ["WiFi", "AC", "Kitchen", "Dining Area", "Bathroom", "Beds", "Storage Space"]
      },
      {
        id: 25,
        name: "Raft",
        images: [
          "https://images.unsplash.com/photo-1597871013080-16a43925e6a6?q=80&w=2664&auto=format&fit=crop"
        ],
        price: 50,
        location: "Grand Canyon, AZ",
        rating: 4.2,
        amenities: ["Storage Space", "Safety Equipment"]
      },
      {
        id: 26,
        name: "Floating Villa",
        images: [
          "https://images.unsplash.com/photo-1611162611831-8b315457fa52?q=80&w=2664&auto=format&fit=crop"
        ],
        price: 1200,
        location: "Bora Bora",
        rating: 5,
        amenities: ["WiFi", "AC", "Kitchen", "Dining Area", "Bathroom", "Beds", "Lighting", "Storage Space"]
      },
        {
          id: 27,
          name: "Fishing Boat",
          images: [
            "https://plus.unsplash.com/premium_photo-1680831748191-d726a2f7b201?q=80&w=2664&auto=format&fit=crop"
          ],
          price: 150,
          location: "Tampa, FL",
          rating: 4.7,
          amenities: ["Safety Equipment", "Storage Space"]
        },
        {
          id: 28,
          name: "Party Boat",
          images: [
            "https://plus.unsplash.com/premium_photo-1680831748248-47616728ee9f?q=80&w=2664&auto=format&fit=crop"
          ],
          price: 400,
          location: "Miami Beach, FL",
          rating: 4.8,
          category: "Party Boats",

          amenities: ["WiFi", "AC", "Lighting", "Dining Area", "Bathroom", "Storage Space"]
        },
        {
          id: 29,
          name: "Classic Yacht",
          images: [
            "https://plus.unsplash.com/premium_photo-1680831748238-1fe52ad0e3af?q=80&w=2727&auto=format&fit=crop"
          ],
          price: 450,
          location: "Palm Beach, FL",
          rating: 4.9,
          category: "Luxury Boats",
          amenities: ["WiFi", "AC", "Kitchen", "Dining Area", "Bathroom", "Safety Equipment"]
        },
        {
          id: 30,
          name: "Luxury Yacht",
          images: [
            "https://images.unsplash.com/photo-1562281302-809108fd533c?q=80&w=2670&auto=format&fit=crop"
          ],
          price: 500,
          location: "Miami, FL",
          rating: 4.5,
          category: "Luxury Boats",
          amenities: ["WiFi", "AC", "Kitchen", "Dining Area", "Bathroom", "Safety Equipment"]
        },
        {
          id: 31,
          name: "Speed Boat",
          images: [
            "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=500"
          ],
          price: 300,
          location: "Los Angeles, CA",
          rating: 5,
          category: "Speed Boats",

          amenities: ["Safety Equipment", "Storage Space"]
        },
        {
          id: 32,
          name: "Sailing Boat",
          images: [
            "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?q=80&w=2670&auto=format&fit=crop"
          ],
          price: 200,
          location: "San Diego, CA",
          rating: 5,
          amenities: ["WiFi", "Bathroom", "AC", "Safety Equipment"]
        },
        {
          id: 33,
          name: "Raft",
          images: [
            "https://images.unsplash.com/photo-1597871013080-16a43925e6a6?q=80&w=2664&auto=format&fit=crop"
          ],
          price: 50,
          location: "Grand Canyon, AZ",
          rating: 4.2,
          amenities: ["Storage Space", "Safety Equipment"]
        },
        {
          id: 34,
          name: "Cabin Cruiser",
          images: [
            "https://images.unsplash.com/photo-1565704034409-71fc142e02d5?q=80&w=2664&auto=format&fit=crop"
          ],
          price: 700,
          location: "Key West, FL",
          rating: 5,
          amenities: ["WiFi", "AC", "Kitchen", "Dining Area", "Bathroom", "Beds", "Storage Space"]
        },
        {
          id: 35,
          name: "Floating Villa",
          images: [
            "https://images.unsplash.com/photo-1611162611831-8b315457fa52?q=80&w=2664&auto=format&fit=crop"
          ],
          price: 1200,
          location: "Bora Bora",
          rating: 5,
          amenities: ["WiFi", "AC", "Kitchen", "Dining Area", "Bathroom", "Beds", "Lighting", "Storage Space"]
        }
      ];
  





function Boats() {
  return (
    <div className="container mx-auto py-10">
      <div className="boats-grid">
        {boatListings.map((boat) => (
          <BoatCard 
            key={boat.id} 
            boat={{ 
              ...boat, 
              rating: boat.rating
            }} 
          />
        ))}
      </div>
    </div>
  );
}


export default Boats;
