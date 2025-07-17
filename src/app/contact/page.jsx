import Hero from '../components/Hero';
import ContactInfoForm from '../components/ContactInfoForm';
import ProjectCTA from '../components/Project';
import MapSection from '../components/MapSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'

export default function ContactPage() {
    return(
        <>
        <Hero/>
        <ContactInfoForm/>
        <ProjectCTA/>
        <MapSection/>
        <Newsletter/>
        <Footer/>
        </>
    );
}