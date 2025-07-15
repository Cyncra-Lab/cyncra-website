import ServiceHero from '../components/ServiceHero';
import ServiceGrid from '../components/ServiceGrid';
import HowItWorks from '../components/ServiceHowItWorks';
import ProjectCTA from '../components/serviceProject';
import ContactInfoForm from '../components/SeerviceInfoForm';
import Footer  from '../components/Footer';

export default function ServicePage(){
    return (
        <main>
            <ServiceHero/>
            <ServiceGrid/>
            <HowItWorks/>
            <ProjectCTA/>
            <ContactInfoForm/>
            <Footer/>
        </main>
    );
}