import { useState, createContext } from "react";
import useHttp from "../hooks/useHttp";

const config = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const UseDataContext = createContext({
  handleSelectType: () => {},
  handleSelectBrand: () => {},
  handleSelectModel: () => {},
  handleSelectYear: () => {},
  handleBtnClick: () => {},
  warning: "",
  order: "",
  error: "",
  type: "",
  types: "",
  brands: "",
  models: "",
  years: "",
  result: "",
  modal: "",
});

export function UseDataContextProvider({ children }) {
  const [order, setOrder] = useState(1);
  const [url, setUrl] = useState();
  const [error, setError] = useState("");
  const [modal, setModal] = useState();
  const urlDatas = useHttp(url);

  const [type, setType] = useState();
  const [brand, setBrand] = useState();
  const [brands, setBrands] = useState();
  const [model, setModel] = useState();
  const [models, setModels] = useState();
  const [year, setYear] = useState();
  const [years, setYears] = useState();
  const [result, setResult] = useState();

  const types = [
    { code: "motorcycles", name: "Motos" },
    { code: "cars", name: "Carros" },
    { code: "trucks", name: "Caminhões" },
  ];

  const warning = [
    [{ code: "00", name: `Erro (${error && error.message})` }],
    [{ code: "01", name: "Carregando" }],
    [{ code: "02", name: `Selecione o ${order}º campo`, disabled: true }],
  ];


  async function handleSelectType(value) {
    const type = value.code;
    const url = `https://fipe.parallelum.com.br/api/v2/${type}/brands`;
    const dataBrand = await urlDatas.sendRequest(url, config);
    dataBrand.error && (setModal(true),setError(dataBrand.error));
    setBrands(dataBrand.resData);
    setType(type);
    setUrl(url);
    setOrder(2);
  }

  async function handleSelectBrand(value) {
    const brand = value.code;
    const url = `https://fipe.parallelum.com.br/api/v2/${type}/brands/${brand}/models`;
    const dataModel = await urlDatas.sendRequest(url, config);
    dataModel.error && (setModal(true), setError(dataModel.error));
    setModels(dataModel.resData);
    setBrand(brand);
    setUrl(url);
    setOrder(3);
  }

  async function handleSelectModel(value) {
    const model = value.code;
    const url = `https://fipe.parallelum.com.br/api/v2/${type}/brands/${brand}/models/${model}/years`;
    const dataYear = await urlDatas.sendRequest(url, config);
    dataYear.error && (setModal(true), setError(dataYear.error));
    setYears(dataYear.resData);
    setModel(model);
    setUrl(url);
    setOrder(4);
  }

  async function handleSelectYear(value) {
    const year = value.code;
    const url = `https://fipe.parallelum.com.br/api/v2/${type}/brands/${brand}/models/${model}/years/${year}`;
    const dataResult = await urlDatas.sendRequest(url, config);
    dataResult.error && (setModal(true), setError(dataResult.error));
    setResult(dataResult.resData);
    setYear(year);
    setUrl(url);
    setOrder(5);
  }

  function handleBtnClick() {
    if (order < 5) {
      setModal(!modal);
    }
    if (order == 5) {
      setModal(true);
      setOrder(6);
    }
    if (order == 6 || error) {
      setModal(false);
      window.location.reload();
    }
  }

  const useDataCtx = {
    handleSelectType,
    handleSelectBrand,
    handleSelectModel,
    handleSelectYear,
    handleBtnClick,
    warning,
    error,
    order,
    type,
    types,
    brands,
    models,
    years,
    result,
    modal,
  };
  return (
    <UseDataContext.Provider value={useDataCtx}>
      {children}
    </UseDataContext.Provider>
  );
}
export default UseDataContext;
