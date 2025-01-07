
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Allroutes from './routes/Allroutes';
// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div>
      <Header/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
