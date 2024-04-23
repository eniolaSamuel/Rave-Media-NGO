import "../styles/DonationProcess.css"
import OnlinePayment from "../assets/icons/svg/make-payment.svg"
import CashPayment from "../assets/icons/svg/cash-payment.svg"
import BankDraft from "../assets/icons/svg/bank-draft.svg"

export const DonationProcess = () => {
    return(
        <div className="donation-frame">
            <div className="donation-sub-frame">
                <h1 className="donation-text">3 easy ways you can donate to support our cause </h1>
                <div className="online-payment">
                    <img src={OnlinePayment} alt={OnlinePayment}/>
                    <p> online payment</p>
                </div>
                <div className="cash-payment">
                    <img src={CashPayment} alt={CashPayment}/>
                    <p> cash donation</p>
                </div>
                <div className="bank-draft">
                    <img src={BankDraft} alt={BankDraft}/>
                    <p> bank draft/cheque</p>
                </div>
            </div>

        </div>
    )
}