import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Capabilities from './components/Capabilities.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Capabilities />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
