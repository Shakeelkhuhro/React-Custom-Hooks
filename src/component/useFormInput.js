import { useState, useEffect } from 'react';

const useFormInput = (initialValue, validate) => {
  const [value, setValue] = useState(initialValue || '');
  const [error, setError] = useState('');

  useEffect(() => {
    setValue(initialValue || '');
  }, [initialValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    const validationError = validate(value);
    setError(validationError);
  };

  return {
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    error
  };
};

export default useFormInput;
