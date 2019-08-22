import { useState } from "react";

const useProductInput = initialValue  => {
  const [values, setValues] = useState(initialValue);

  return [
    values,
    event => {
      setValues(
        {
          ...values,
          [event.target.name]: event.target.value
        }
      );
    }
  ];
};

export default useProductInput;