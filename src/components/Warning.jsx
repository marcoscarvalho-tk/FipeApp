import { useContext } from "react";
import img from "../assets/images/warning.png";
import Buttons from "./Buttons";
import UseDataContext from "../store/DataContext";

export default function Warning() {
    const dataCtx = useContext(UseDataContext);
    return(
        <div className="modal-dialog">
        <img src={img} alt="warning icon" />
        <h1>Ops!</h1>
        <p>Selecione todos os campos.</p>
        <Buttons value="Voltar" onClick={dataCtx.handleBtnClick} />
      </div>
    )
}