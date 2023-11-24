import Navbar from "./components/navbar";
import CardHeader from "./components/cardHeader";
// import ModalContact from "./components/modalContact/modalContact";


import "./styles/app.sass";

function App() {
  return (
    <>
      <div id="portifolio">
        <Navbar />
        <CardHeader />
        {/* <ModalContact/> */}
      </div>
    </>
  );
}

export default App;
