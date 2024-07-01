import { useContext, useState } from "react";
import UseDataContext from "../store/DataContext";
// import classNames from 'classnames';
import Select from "react-select";

export default function Input({ datas, label, article, onChange }) {
  // const [value, setValue] = useState();
  // console.log(value);
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
            // border: `5px solid`,
            width: "220px",
          }),
          option: (base) => ({
            ...base,
            // border: `3px dotted black`,
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
// getOptionValue={(option) => `${option['codigo']}}
// export default function Input({ datas, label, article, onChange }) {
//   const dataCtx = useContext(UseDataContext);

//   console.log(datas);
//   return (
//     <p>
//       <label>{label}</label>
//       <select onChange={onChange} defaultValue="">
//         <option hidden value="">
//           Selecione {article} {label}
//         </option>
//         {datas.map((obj) => (
//           <option key={obj.codigo} value={obj.codigo} disabled={obj.disabled}>
//             {obj.nome
//               ? obj.nome
//               : dataCtx.order < 2
//               ? "--Selecione o tipo--"
//               : dataCtx.order < 3
//               ? "--Selecione a marca--"
//               : "--Selecione o modelo--"}
//           </option>
//         ))}
//       </select>
//     </p>
//   );
// }
