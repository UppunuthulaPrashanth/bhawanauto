import React, { useState } from "react";
import {  
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate } from "./Payment_utils";
  import 'react-credit-cards/es/styles-compiled.css'
  import Cards from 'react-credit-cards'



  export default class Payment_getway extends React.Component {

    state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    };
    handleInputFocus = (e) => {
      this.setState({ focus: e.target.name });
    }
    
    handleInputChange = (e) => {
      const { name, value } = e.target;
      
      this.setState({ [name]: value });
    }


    render() {
      return (
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            ...
          </form>
        </div>
      );
    }
  }
  