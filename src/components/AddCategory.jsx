// import React from 'react'
import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories(categories => [inputValue, ...categories]);
    setInputValue("")
    onNewCategory(inputValue.trim());
  }

  return (

    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}

export default AddCategory