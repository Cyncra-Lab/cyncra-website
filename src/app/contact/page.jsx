import ContactHero from '../components/ContactHero';
import ContactInfoForm from '../components/ContactInfoForm';
import ProjectCTA from '../components/Project';
import MapSection from '../components/MapSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'

export default function ContactPage() {
    return(
        <>
        <ContactHero/>
        <ContactInfoForm/>
        <ProjectCTA/>
        <MapSection/>
        <Newsletter/>
        <Footer/>
        </>
    );
}