import './App.css';
import Navigation from './components/navigation'; 
import HeroSection from './components/Hero';

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      {/* Other components can be added here */}
    </div>
  )
}

export default App;