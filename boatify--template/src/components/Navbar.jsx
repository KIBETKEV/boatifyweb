import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUser, FaWallet, FaShieldAlt, FaGlobe, FaBell, FaSignOutAlt } from "react-icons/fa";



function Navbar() {
    const navigate = useNavigate();

    const [showDropdown, setShowDropdown] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = window.scrollY;

    // Scroll Event Listener for Hiding/Showing Navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false); // Hide navbar when scrolling down
            } else {
                setIsVisible(true); // Show navbar when scrolling up
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navbar"
            style={{
                display: isVisible ? "flex" : "none",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 20px",
                backgroundColor: "#0ca86f",
                color: "white",
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
                transition: "top 0.3s ease-in-out"
            }}>
            
            {/* Left: Site Name and Logo */}
            <div className="navbar-left" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: "20px" }}>
    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
        <img src="/logo4.png" alt="Boatify Logo" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Boatify</h1>
    </Link>
</div>

            {/* Center: List Your Boat Button */}
            <div className="navbar-center" style={{ flex: 1, textAlign: 'center' }}>
                <button style={{ padding: '8px 16px', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#0ca86f', color: '#ffff', border: '2px solid #7ed0d9', borderRadius: '20px', cursor: 'pointer', transition: 'background-color 0.3s' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#7ed0d9'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#0ca86f'}
                    onClick={() => navigate("/list-boat")}
                    >
                    List Your Boat
                </button>
            </div>

            {/* Right: Avatar with Dropdown (Now Matched to Logo Distance) */}
            <div className="navbar-right" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginRight: "20px" }}>
                <img src="/avatar2.jpg" alt="User Avatar"
                    style={{ height: '40px', width: '40px', borderRadius: '50%', cursor: 'pointer' }}
                    onClick={() => setShowDropdown(!showDropdown)} />

                {showDropdown && (
                    <div className="dropdown-menu" onMouseLeave={() => setShowDropdown(false)}
                        style={{
                            position: 'absolute',
                            top: '50px',
                            right: '0px',
                            backgroundColor: 'white',
                            color: '#f3f4f6',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            padding: '10px',
                            width: '220px',
                            zIndex: 1000
                        }}>
                        <Link to="/profile" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', padding: '12px', textDecoration: 'none', color: '#333' }}>
                            <FaUser style={{ marginRight: '10px' }} /> Personal Info
                        </Link>
                        <Link to="/payments" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', padding: '12px', textDecoration: 'none', color: '#333' }}>
                            <FaWallet style={{ marginRight: '10px' }} /> Payments
                        </Link>
                        <Link to="/security" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', padding: '12px', textDecoration: 'none', color: '#333' }}>
                            <FaShieldAlt style={{ marginRight: '10px' }} /> Security
                        </Link>
                        <Link to="/translation" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', padding: '12px', textDecoration: 'none', color: '#333' }}>
                            <FaGlobe style={{ marginRight: '10px' }} /> Translation
                        </Link>
                        <Link to="/notifications" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', padding: '12px', textDecoration: 'none', color: '#333' }}>
                            <FaBell style={{ marginRight: '10px' }} /> Notifications
                        </Link>
                        <hr style={{ margin: '8px 0' }} />
                        <Link to="/logout" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', padding: '12px', textDecoration: 'none', color: '#d9534f', fontWeight: 'bold' }}>
                            <FaSignOutAlt style={{ marginRight: '10px' }} /> Sign Out
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;