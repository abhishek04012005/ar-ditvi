import React, { useState } from 'react';
import './BuyPopup.css';
import { Close } from '@mui/icons-material';

const BuyPopup = ({ isOpen, onClose, book }) => {
    const [showEbookForm, setShowEbookForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    });

    if (!isOpen || !book) return null;

    const handleEbookClick = () => {
        setShowEbookForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: ''
        });
        setShowEbookForm(false);
        onClose();
    };

    const handleClose = () => {
        setShowEbookForm(false);
        setFormData({
            fullName: '',
            email: '',
            phone: ''
        });
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className={`popup-content ${showEbookForm ? 'show-form' : ''}`}>
                <button className="popup-close" onClick={handleClose}>
                    <Close />
                </button>
                
                {!showEbookForm ? (
                    <>
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
                        </div>
                    </>
                ) : (
                    <div className="ebook-form-container">
                        <div className="popup-header">
                            <h2>Complete Your Purchase</h2>
                        </div>
                        <form className="popup-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Full Name" 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email Address" 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number" 
                                    required 
                                />
                            </div>
                            <div className="form-footer">
                                <p className="price-summary">Total Amount: ₹299</p>
                                <button type="submit" className="submit-btn">
                                    Proceed to Payment
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BuyPopup;