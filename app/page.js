import Navbar from './components/Navbar';
import TutorBanner from './components/TutorBanner';
import FeaturedProfiles from './components/FeaturedProfiles';
import Experience from './components/Experience';
import CourseCategories from './components/CourseCategories';
import Premium from './components/Premium';
import StudentComponent from './components/StudentComponent';
import FeaturedSection from './components/FeaturedSection';
import StoreBanner from './components/StoreBanner';
import Contact from './components/Contact';
import CourseAd from './components/Course_ad';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import TestimonialCard from './components/TestimonialCard';
import LearningBanner from './components/LearningBanner';


export default function HomePage() {
  return (
    
    <div className="font-gilroy overflow-hidden m-0 p-0">
      <div className="flex flex-col">
        <Navbar />
        <TutorBanner />
        <LearningBanner />
        <FeaturedProfiles />
        <Experience />
        <CourseCategories />
        <CourseAd />
        <Premium />
        {/* <StudentComponent />
        <FeaturedSection />
        <StoreBanner />
        <Testimonials />
        <TestimonialCard />
        <Contact />
        <Footer /> */}
      </div>
    </div>
    
  );
}
