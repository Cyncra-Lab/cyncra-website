import ContactHero from '../components/ContactHero';
import ContactInfoForm from '../components/ContactInfoForm';
import ProjectCTA from '../components/Project';
import MapSection from '../components/MapSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'
import Head from 'next/head';

export default function ContactPage() {
    return(
        <>
        <Head> 
            <title>
                Cyncra Technologies -- Contact Us for Expert  Tech Support & Services
            </title>
            <meta name="description" content="Connect with Cyncra Technologies for product design, development, and digital strategy support. We're here to answer your questions and bring your ideas to life " />
        </Head>
        <ContactHero/>
        <ContactInfoForm/>
        <ProjectCTA/>
        <MapSection/>
        <Newsletter/>
        <Footer/>
        </>
    );
}
