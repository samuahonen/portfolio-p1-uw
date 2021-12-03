import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import Contact from "./components/contact-us";
import './styles/app.css';
import './custom.scss';

function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
