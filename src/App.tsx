import GlobalStyle from "./global";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle />
      <RoutesMain />
    </>
  );
};

export default App;
