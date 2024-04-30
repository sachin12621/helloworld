import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import './assets/scss/style.scss';
import { HeroBanner } from './components/HeroBanner';

function App() {
  return (
    <Router>
      <>
        <Header />
        <HeroBanner />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </>
    </Router>

  );
}

export default App;
