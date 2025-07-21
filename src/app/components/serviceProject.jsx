'use client';

export default function ProjectCTA() {
    return (
        <section className="py-20 bg-white text-center px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-10 left-5 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute top-20 right-20 w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce"></div>

            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-6">
                Let's <span className="text-primary">Create</span>an <br />
                <span className="text-secondary">Amazing Project</span> Together
            </h2>

            <p className="mb-6 text-gray-600 max-w-xl mx-auto">
                Book a free Consultation to talk through your vision. No pressure, just big ideas.
            </p>

            <button className="bg-teal-700-hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full transistion duration-300">Book a Free Call</button>
        </section>
    );
}