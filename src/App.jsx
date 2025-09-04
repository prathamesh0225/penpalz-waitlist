// src/App.jsx
import Header from './components/Header'; // Import the new Header
import Hero from './components/Hero';
import Perks from './components/Perks';
import HowItWorks from './components/HowItWorks';
import Timeline from './components/Timeline';
import TextVelocity from './components/TextVelocity';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

function App() {
  return (
    // We apply the text color here to serve as a default for all child components
    <div className="min-h-screen text-gray-200">
      <Header />
      <main>
        <Hero />
        <Perks />
        <TextVelocity />
        <HowItWorks />
        <Timeline />
        <WaitlistForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;