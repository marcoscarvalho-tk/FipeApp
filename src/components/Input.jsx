import { useContext, useState } from "react";
import UseDataContext from "../store/DataContext";
// import classNames from 'classnames';
import Select from "react-select";

export default function Input({ datas, label, article, onChange }) {
  return (
    <>
      <label>{label}</label>
      <Select
        styles={{
          input: (styles) => ({
            ...styles,
            color: "#ffdd00",
          }),
          placeholder: (styles) => ({ ...styles, color: "#ffdd00" }),
          singleValue: (styles, { data }) => ({ ...styles, color: "#ffdd00" }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "transparent",
            borderColor: "yellow",
            border: state.isFocused ? "2px solid #2684FF" : "2px solid",
            width: "220px",
          }),
          option: (base) => ({
            ...base,
            height: "100%",
            color: "black",
          }),
        }}
        options={datas}
        onChange={(value) => onChange(value)}
        placeholder={`Selecione ${article} ${label}`}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.code}
        isOptionDisabled={(option) => option.disabled}
      />
    </>
  );
}
