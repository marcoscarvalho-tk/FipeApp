import Inputs from "./components/Inputs.jsx";
import { UseDataContextProvider } from "./store/DataContext.jsx";

function App() {
  return (
    <UseDataContextProvider>
      <Inputs />
    </UseDataContextProvider>
  );
}

export default App;
