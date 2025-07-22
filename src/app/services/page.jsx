import ServiceHero from '../components/ServiceHero';
import ServiceGrid from '../components/ServiceGrid';
import HowItWorks from '../components/ServiceHowItWorks';
import ProjectCTA from '../components/serviceProject';
import ContactInfoForm from '../components/SeerviceInfoForm';
import Head from 'next/head';

export default function ServicePage(){
    return (
        <>
                <Head> 
                    <title>
                        Cyncra Technologies -- Custom Web, App & Digital Solutions for Buisness Growth
                    </title>
                    <meta name="description" content="Explore our expert services-from website and mobile app development to UI/UX design, eCommerce, and digital strategy Cyncra builds scalable digital products that deliver results." />
                </Head>
            <ServiceHero/>
            <ServiceGrid/>
            <HowItWorks/>
            <ProjectCTA/>
            <ContactInfoForm/>
        </>
    );
}