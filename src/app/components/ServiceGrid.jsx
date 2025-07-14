'use client';

const services = [
    {title: 'Website Development', image: '/images/img2.jpeg'},
    {title: 'Mobile App Development', image: '/images/img2.jpeg'},
    {title: 'UI/UX Design', image: '/images/img2.jpeg'},
    {title: 'Ecommerce Solution', image: '/images/img2.jpeg'},
    {title: 'Maintenance & Support', image: '/images/img2.jpeg'},
    {title: 'Digital Strategy & Consultation', image: '/images/img2.jpeg'},
];

export default function ServiceGrid(){
    return (
        <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
                Our Services Includes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={ndex} className="rounded-lg shadow-md overflow-hidden bg-white">
                        <img src={service.image} alt={service.title} className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">
                                {service.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}