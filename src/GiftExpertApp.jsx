import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategory] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onAdd = () => {
    setCategory([...categories, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <h1>GifExpert</h1>

      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
        <button onClick = { () => onAdd() }> Agregar </button>
      <ol>
        {categories.map((category, key) => {
          return <li key={key}>{category}</li>;
        })}
      </ol>
    </>
  );
};