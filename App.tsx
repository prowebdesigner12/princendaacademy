
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Mission from './components/Mission';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Director from './components/Director';
import MD from './components/MD';
import VisionMission from './components/VisionMission';
import WhyNDA from './components/WhyNDA';
import CadetLife from './components/CadetLife';
import OurTeam from './components/OurTeam';
import PreFoundation from './components/PreFoundation';
import EarlyStarter from './components/EarlyStarter';
import BullsEye from './components/BullsEye';
import Target from './components/Target';
import Capsule from './components/Capsule';
import Fees from './components/Fees';
import DocumentRequired from './components/DocumentRequired';
import OnlineAdmission from './components/OnlineAdmission';
import Activities from './components/Activities';
import GallerySelection from './components/GallerySelection';
import GalleryFunctions from './components/GalleryFunctions';
import GallerySports from './components/GallerySports';
import GalleryCampus from './components/GalleryCampus';
import GalleryLibrary from './components/GalleryLibrary';
import Contact from './components/Contact';
import SSBTeam from './components/SSBTeam';
import Toppers from './components/Toppers';
import GalleryAiArt from './components/GalleryAiArt';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string, sectionId?: string) => {
    if (page === 'home' && currentPage === 'home' && sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
        setCurrentPage(page);
        if (page === 'home' && sectionId) {
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        } else {
            window.scrollTo(0, 0);
        }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'director':
        return <Director />;
      case 'md':
        return <MD />;
      case 'vision-mission':
        return <VisionMission />;
      case 'why-nda':
        return <WhyNDA />;
      case 'cadet-life':
        return <CadetLife />;
      case 'our-team':
        return <OurTeam />;
      case 'pre-foundation':
        return <PreFoundation />;
      case 'early-starter':
        return <EarlyStarter />;
      case 'bulls-eye':
        return <BullsEye />;
      case 'target':
        return <Target />;
      case 'capsule':
        return <Capsule />;
      case 'fees':
        return <Fees />;
      case 'documents-required':
        return <DocumentRequired />;
      case 'online-admission':
        return <OnlineAdmission />;
      case 'activities':
        return <Activities />;
      case 'gallery-selection':
        return <GallerySelection />;
      case 'gallery-functions':
        return <GalleryFunctions />;
      case 'gallery-sports':
        return <GallerySports />;
      case 'gallery-campus':
        return <GalleryCampus />;
      case 'gallery-library':
        return <GalleryLibrary />;
      case 'gallery-ai-art':
        return <GalleryAiArt />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Mission />
            <Features />
            <Courses navigateTo={navigateTo} />
            <SSBTeam navigateTo={navigateTo} />
            <Toppers />
            <Testimonials />
            <FAQ />
            <CTA navigateTo={navigateTo} />
          </>
        );
    }
  };

  return (
    <div className="bg-white text-slate-800 selection:bg-red-500 selection:text-white">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      <main>
        <div key={currentPage} className="fade-in">
          {renderPage()}
        </div>
      </main>
      <Footer navigateTo={navigateTo}/>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
