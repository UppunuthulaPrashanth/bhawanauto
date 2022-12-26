import React, { useState } from "react";
import {  
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate } from "./Payment_utils";
  import 'react-credit-cards/es/styles-compiled.css'
  import Card from 'react-credit-cards'


  export default class Payment_getway extends React.Component {



    state = {
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      issuer: '',
      focused: '',
      formData: null
    }

   handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer })
    }
  }
  

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    })
  }

   handleInputChange = ({ target }) => {
    
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
    }
    if(target.value){
      this.setState({ ...this.state, [target.name]: target.value })
    }
  }

   handleSubmit = e => {
    e.preventDefault()
    alert('You have finished payment!')
  }

  render() {
  const { name, number, expiry, cvc, focused, issuer } = this.state


  return (
    <div key='Payment' className="row mt-5 mb-5 payment_card">
        <div className='App-payment col-md-8 mx-auto row'>
          <div className="col-md-6 mt-5 mb-5">
            <h5 className="text-center mb-2">Total Payable Amount : <span style={{fontWeight:"500"}}>OMR 34342</span></h5>
            <Card
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
            />
          </div>

          <div className="col-md-5 mt-5 mb-5">
            <form  onSubmit={this.handleSubmit} className="row">
              <div className='form-group col-12'>
                <small>Name on card:</small>

                <input
                  type='text'
                  name='name'
                  className='form-control'
                  placeholder='Name'
                  pattern='[a-z A-Z-]+'
                  maxLength="29"
                  required
                  onChange={this.handleInputChange}
                />
              </div>
              <div className='form-group col-12'>
                <small>Card Number:</small>

                <input
                  type='tel'
                  name='number'
                  className='form-control'
                  placeholder='Card Number'
                  pattern='[\d| ]{16,22}'
                  maxLength='19'
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}

                />
              </div>

              <div className='form-group col-6'>
                <small>Expiration Date:</small>

                <input
                  type='tel'
                  name='expiry'
                  className='form-control'
                  placeholder='Valid Thru'
                  pattern='\d\d/\d\d'
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}

                />
              </div>
              <div className='form-group col-6'>
                <small>CVC:</small>

                <input
                  type='tel'
                  name='cvc'
                  className='form-control'
                  placeholder='CVC'
                  pattern='\d{3}'
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}

                />
              </div>
              <input type='hidden' name='issuer' value={issuer} />
              <div className='mx-auto mt-3'>
                <button className="btn btn-primary text-center">Make Payment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
  }
}
