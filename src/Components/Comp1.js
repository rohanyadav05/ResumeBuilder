import React, { useState, useRef } from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

function Comp1() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const phoneRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    // handle submission data here
  };

  return (
    <div className="container-fluid personal-info">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <h2 className="mb-4">Personal Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" ref={nameRef} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" ref={emailRef} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" className="form-control" id="address" ref={addressRef} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" className="form-control" id="phone" ref={phoneRef} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8">
          <Education />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8">
          <Experience />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default Comp1;
