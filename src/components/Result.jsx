import { useContext } from "react";
import bike from "../assets/images/bikeIcon.png";
import car from "../assets/images/carIcon.png";
import truck from "../assets/images/truckIcon.png";
import Buttons from "./Buttons";
import UseDataContext from "../store/DataContext";

export default function Result({datas}) {
    const dataCtx = useContext(UseDataContext);
    return (
        <div className="modal-dialog">
        {dataCtx.type == "cars" && <img src={car} alt="car icon" />}
        {dataCtx.type == "motorcycles" && <img src={bike} alt="bike icon" />}
        {dataCtx.type == "trucks" && <img src={truck} alt="truck icon" />}
            <h1>{datas.brand}</h1>
            <p>{datas.model} ({datas.fuel})</p>
            <h2> {datas.modelYear}</h2>
            <h1>{datas.price}</h1>
            <Buttons value="Nova Pesquisa" onClick={dataCtx.handleBtnClick} />
            </div>
    )
}