import Main from "./views/Main";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/index.css'
import Eventos from "./views/Eventos";
import Sobre from "./views/Sobre";
import Depoimentos from "./views/Depoimentos";
import Contato from "./views/Contato";
import Footer from "./layout/Footer";
function App() {
  return (
    <>
      <Main />
      <Eventos />
      <Sobre />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
