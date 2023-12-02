import React from "react";
import { FaStar, FaShoePrints } from "react-icons/fa";
import "../pages/Holla.css";
import { IoMdBed, IoMdCar, IoIosWifi } from 'react-icons/io'; 
const Holla= () => {
  return (
    <div className="product-card">
      <div className="left-column">
        {/* Sliding Images */}
        <div className="image-slider">
        <img className="odf" src="https://images.oyoroomscdn.com/uploads/hotel_image/16133/medium/eysoqtldbnnp.jpg" alt="Shoe 1" />
          <img className="odf"src="https://images.oyoroomscdn.com/uploads/hotel_image/36526/medium/8f90101318a12f80.jpg" alt="Shoe 2" />
          <img className="odf" src="https://images.oyoroomscdn.com/uploads/hotel_image/36526/medium/ce7a372abb3b4c53.jpg" alt="Shoe 1" />
          <img className="odf"src="https://images.oyoroomscdn.com/uploads/hotel_image/16133/medium/lmndwawnxkfm.jpg" alt="Shoe 2" />
        <img className="odf" src="https://images.oyoroomscdn.com/uploads/hotel_image/16133/medium/hpurmvtcltvy.jpg" alt="Shoe 1" />
          
        </div>

        {/* Product Suggestions */}
        <div className="suggestions">
          <h3>explore vertually </h3>
          <img src="https://images.oyoroomscdn.com/uploads/hotel_image/112096/medium/282ba426f45a9acd.jpg" alt="Suggestion 1" />
          <img src="https://images.oyoroomscdn.com/uploads/hotel_image/112096/medium/8637e41ffefdf1a6.jpg" alt="Suggestion 2" />
          <img src="https://images.oyoroomscdn.com/uploads/hotel_image/112096/medium/a65c923b80e626b3.jpg" alt="Suggestion 1" />
          <img src="https://images.oyoroomscdn.com/uploads/hotel_image/205478/medium/nuclenhivkxn.jpg" alt="Suggestion 2" />
          <img src="https://images.oyoroomscdn.com/uploads/hotel_image/56157/medium/db487749c320dd31.jpg" alt="Suggestion 1" />
          <img src="https://images.oyoroomscdn.com/uploads/hotel_image/56157/medium/e00aa5b948110bdb.jpg" alt="Suggestion 2" />
          <img src="https://images.oyoroomscdn.com/uploads/hotel_image/76729/medium/7b2757d8cce84c1b.jpg" alt="Suggestion 1" />
          <img src="https://images.oyoroomscdn.com/uploads/hotel_image/76729/medium/f4ee9dc978b5c4a3.jpg" alt="Suggestion 2" />
        </div>
      </div>

      <div className="right-column">
        {/* Product Details */}
        <div className="product-details">
          <h1>Super OYO Capital O Manyata Royal Mac</h1>
          <p>
Behind Manyata Tech Park, Rechanahalli, Bangalore</p>
        </div>

        {/* Features */}
        <div className="features">
          <h2>Features</h2>
          <ul>
          <li><IoMdBed /> Hair Dryer</li>
      <li><IoMdCar /> Parking facility</li>
      <li><IoIosWifi /> Free Wi-Fi</li>
          </ul>
        </div>

        {/* Ratings and Icons */}
        <div className="ratings">
          <div className="rating">
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>

          {/* Additional Icons */}
          <div className="additional-icons">
            <FaShoePrints className="feature-icon" />
            {/* Add more icons as needed */}
          </div>
        </div>

        {/* Prices and Booking Button */}
        <div className="prices">
          <p>Price: $100</p>
          <p>Discount: $10 off</p>
          <button className="book-button">View Details</button>
          <button className="book-button2">book now</button>
        </div>
      </div>
    </div>
  );
};

export default Holla;
