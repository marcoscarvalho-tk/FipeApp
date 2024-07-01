import Buttons from "./Buttons";
import img from "../assets/images/warning.png";
import UseDataContext from "../store/DataContext";
import { useContext } from "react";

export default function Error({error}) {
    const dataCtx = useContext(UseDataContext);
    return (
        <div className="modal-dialog">
            <img src={img} alt="warning icon" />
            <h1>Erro!</h1>
            <p>{error}</p>
            <Buttons value="Voltar" onClick={dataCtx.handleBtnClick} />
        </div>
    );
}