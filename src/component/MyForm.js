import React, { useState } from 'react';
import useFormInput from './useFormInput';

const MyForm = () => {
  const validateEmail = (value) => {
    if (!value) {
      return 'Email is required.';
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      return 'Email is invalid.';
    }
    return '';
  };

  const email = useFormInput('', validateEmail);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.error) {
      setSubmitted(true);
      email.onChange(''); // Clear the email value after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted ? (
        <div className="success-message">Your email is collected. Thank you!</div>
      ) : (
        <>
          <input type="email" {...email} />
          {email.error && <div className="error">{email.error}</div>}
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default MyForm;
