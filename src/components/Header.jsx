// import img from "../../public/bitcoin-Currency.png";

import logo from "../assets/images/logoFipeApp.png";

export default function Header({children}) {
    
    return (
    <header id="header">
    <img id="header img" src={logo} alt="logo FipeApp"/>
    <h1>FipeApp</h1>
    {children}
    </header>
    )
}