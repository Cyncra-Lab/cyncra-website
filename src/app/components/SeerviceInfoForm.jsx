'use client';
import { Phone, Mail, MapPin, Globe} from 'lucide-react';

export default function ContactInfoForm() {
    return (
        <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto bg-white text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <div>
                    <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Togrther</h2>
                    <p className="mb-6 text-gray-600">
                        Have an idea or project in mind? Let's talk about how we can bring it to life with smart, scalable digital solutions tailored to your goals.
                    </p>

                    <ul className= "space-y-4 text-sm text-gray-700">
                        <li className="flex items-center gap-3"><Phone className="text-teal-600" size={18}/> <span className="font-medium">+2348123456789</span></li>
                        <li className= "space-y-4 text-sm text-gray-700"><Mail className="text-teal-600" size={18}/> <span className="font-medium">cyncratech@gmail.com</span></li>
                        <li className= "space-y-4 text-sm text-gray-700"><MapPin className="text-teal-600" size={18}/> <span className="font-medium">Yaba, Lagos, Nigeria</span></li>
                        <li className= "space-y-4 text-sm text-gray-700"><Globe className="text-teal-600" size={18}/> <span className="font-medium">www.cyncra.com</span></li>
                    </ul>
                </div>

                <div className="bg-[#f0fbfb] p-8 rounded-xl shadow-md">
                    <form action="#" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Full Name" className="w-full p-3 rounded-md border-gray-300" />
                            <input type="email" placeholder="Email" className="w-full p-3 rounded-md border-gray-300" />
                            <input type="Text" placeholder="Phone Number" className="w-full p-3 rounded-md border-gray-300" />
                            <input type="text" placeholder="Project type" className="w-full p-3 rounded-md border-gray-300" />
                        </div>
                        <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-md border border-gray-300"></textarea>
                        <button type="submit" className="w-full bg-teal-700 hover:bg-teal-600 text-white font-semibold py-3 rounded-md transition">Submit Here</button>
                    </form>
                </div>
            </div>
        </section>
    );
}