import { useState } from "react";

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({ ...values, [name]: value }));
    if (validate) setErrors(validate({ ...values, [name]: value }));
  };
  const resetForm = () => setValues(initialValues);

  return { values, errors, handleChange, resetForm };
};

export default useForm;
