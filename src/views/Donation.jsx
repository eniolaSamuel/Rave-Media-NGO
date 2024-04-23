import React, { useState } from 'react';
import "../styles/Donation.css"
import Lottie from 'lottie-react'
import DonationAnimation from "../assets/image/svg/donate-image.svg"

function DonationPage() {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Donation amount:', amount);
        console.log('Payment method:', paymentMethod);
    };

    return (
        <div className="donation-container">
            <div className="donation-sub-container">
                <div className="donation-image">
                    <img src={DonationAnimation} alt={DonationAnimation}/>
                </div>
                <div className="donation-form">
                    <h1>RAGE Donation Page</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="amount">Donation Amount:</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={amount}
                            onChange={handleAmountChange}
                            required
                            min="1"
                        /><br/><br/>

                        <h1>Choose Payment Method:</h1><br/>
                        <input
                            type="radio"
                            id="online"
                            name="payment-method"
                            value="online"
                            checked={paymentMethod === 'online'}
                            onChange={handlePaymentMethodChange}
                            required
                        />
                        <label htmlFor="online">Online Payment</label><br/>

                        <input
                            type="radio"
                            id="cash"
                            name="payment-method"
                            value="cash"
                            checked={paymentMethod === 'cash'}
                            onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="cash">Cash Donation</label><br/>

                        <input
                            type="radio"
                            id="bank-draft"
                            name="payment-method"
                            value="bank-draft"
                            checked={paymentMethod === 'bank-draft'}
                            onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="bank-draft">Bank Draft</label><br/>

                        <button type="submit">Donate</button>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default DonationPage;
