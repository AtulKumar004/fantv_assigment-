
import './App.css';
import MainSection from './components/mainSection/section';
import MidSection from './components/midSection/midSection';
import FooterSection from './components/footerSection/footerSection';

function App() {
  return (
    <div >
      <div className='MainSection_cont'>
        <div className="container">
          <MainSection />

        </div>

      </div>
      <div className='MidSection_cont'>
        <div className="container">
          <MidSection />

        </div>

      </div>
      <div className='FooterSection_cont'>
        <div className="container">
          <FooterSection />

        </div>

      </div>

      X


    </div>
  );
}

export default App;
