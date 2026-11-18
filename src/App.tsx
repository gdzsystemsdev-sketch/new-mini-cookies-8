import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EarningsCalculator from './components/EarningsCalculator';
import Testimonials from './components/Testimonials';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section4 from './components/Section4';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import ApplicationForm from './components/ApplicationForm';
import ReferModel from './components/ReferModel';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Careers from './components/Careers';
import Referrals from './components/Referrals';
import Leaderboard from './components/Leaderboard';
import CaseStudy1 from './components/CaseStudy1';

function App() {
  if (window.location.pathname === '/privacy') {
    return <PrivacyPolicy />;
  }

  if (window.location.pathname === '/about') {
    return <AboutUs />;
  }

  if (window.location.pathname === '/how-it-works') {
    return <HowItWorks />;
  }

  if (window.location.pathname === '/careers') {
    return <Careers />;
  }

  if (window.location.pathname === '/referrals') {
    return <Referrals />;
  }

  if (window.location.pathname === '/leaderboard') {
    return <Leaderboard />;
  }

  if (window.location.pathname === '/case-study/sara') {
    return <CaseStudy1 />;
  }

  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <Hero />
      <EarningsCalculator />
      <Testimonials />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <ApplicationForm />
      <ReferModel />
      <Footer />
    </div>
  );
}

export default App;
