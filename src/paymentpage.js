import React from 'react';
import "./login_page.css";

export default function PaymentForm() {
  return (
    <>
      <div className="wrapper">
        <h2>Payment Form</h2>
        <form action="" method="post">
          <h4>Account</h4>
          <div className="input_group">
            <div className="input_box">
              <input type="text" placeholder="Full Name" required className="name" />
              <i className="fa fa-user icon"></i>
            </div>
            <div className="input_box">
              <input type="text" placeholder="Name on Card" required className="name" />
              <i className="fa fa-user icon"></i>
            </div>
          </div>
          {/* Other form fields */}
          <div className="input_group">
            <div className="input_box">
              <button type="submit">PAY NOW</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
