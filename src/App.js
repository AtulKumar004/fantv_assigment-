import logo from './logo.svg';
import './App.css';
import MainSection from './components/mainSection/section';
import MidSection from './components/midSection/midSection';
import FooterSection from './components/footerSection/footerSection';

function App() {
  return (
    <div className="container">
      <MainSection />
      <MidSection />
      <FooterSection/>
    </div>
  );
}

export default App;
