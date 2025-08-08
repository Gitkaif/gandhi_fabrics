// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './components/CategoryPage';
import AppBackground from './components/layout/AppBackground';
import Footer from './components/Footer';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppBackground>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </AppBackground>
    </Router>
  );
}

export default App;