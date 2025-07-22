import Hero from './components/Hero';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Values from './components/Values';
import Faqs from './components/Faqs';

export const metadata = {
    title: 'Cyncra Technologies - Innovative Digital Solutions That Drive Real Impact',
    description: 'At Cyncra, we blend creativity, strategy, and technology to deliver meaningful digital experiences. We build products that solve real problems and empower business growth.'
}

export default function AboutPage() {
    return (
        <>
            <Hero />
            <Mission />
            <Vision />
            <Values />
            <Faqs />
        </>
    )
}