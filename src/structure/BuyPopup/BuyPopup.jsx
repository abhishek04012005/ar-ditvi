import React, { useState } from 'react';
import './BuyPopup.css';
import { Close } from '@mui/icons-material';

const BuyPopup = ({ isOpen, onClose, book }) => {
    const [showEbookForm, setShowEbookForm] = useState(false);

    if (!isOpen) return null;

    const handleEbookClick = () => {
        setShowEbookForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        setShowEbookForm(false);
        onClose();
    };

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
                            <div className="book-options">
                                <div className="ebook-section">
                                    <h4>E-Book Version</h4>
                                    <p className="price">₹299</p>
                                    <button 
                                        className="buy-btn ebook-btn"
                                        onClick={handleEbookClick}
                                    >
                                        Buy E-Book
                                    </button>
                                </div>
                                <div className="paper-section">
                                    <h4>Paper Book</h4>
                                    <div className="marketplace-buttons">
                                        <a 
                                            href={book.amazonLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="marketplace-btn amazon"
                                        >
                                            Buy on Amazon
                                        </a>
                                        <a 
                                            href={book.flipkartLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="marketplace-btn flipkart"
                                        >
                                            Buy on Flipkart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {showEbookForm && (
                        <form className="popup-form" onSubmit={handleSubmit}>
                            <h4>Complete Your E-Book Purchase</h4>
                            <div className="form-group">
                                <input type="text" placeholder="Full Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email Address" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Phone Number" required />
                            </div>
                            <button type="submit" className="submit-btn">
                                Pay ₹299
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BuyPopup;