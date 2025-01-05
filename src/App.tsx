import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import Chat from './pages/Chat';
import About from './pages/About';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LearnMore from './pages/LearnMore';
import Generation from './pages/Generation';
import { LoadingProvider } from './context/LoadingContext';

export default function App() {
  return (
    <LoadingProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navigation />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="/generation" element={<Generation />} />
              <Route path="*" element={<Landing />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LoadingProvider>
  );
}
