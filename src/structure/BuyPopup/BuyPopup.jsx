import React from 'react';
import './BuyPopup.css';
import { Close } from '@mui/icons-material';

const BuyPopup = ({ isOpen, onClose, book }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close" onClick={onClose}>
                    <Close />
                </button>
                <div className="popup-header">
                    <h2>Buy {book.title}</h2>
                </div>
                <div className="popup-body">
                    <div className="popup-book-details">
                        <img src={book.image} alt={book.title} />
                        <div className="popup-book-info">
                            <h3>{book.title}</h3>
                            <p className="price">₹499</p>
                            <p className="description">{book.recommendedDescription}</p>
                        </div>
                    </div>
                    <form className="popup-form">
                        <div className="form-group">
                            <input type="text" placeholder="Full Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Phone Number" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Shipping Address" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Proceed to Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyPopup;