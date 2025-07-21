'use client';
import React from "react";
// import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe} from "react-icons/fa";

export default function ContactInfoForm(){
    return (
        <section className="py-16 px-4 bg-white text-[#042F2E]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/*left row */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">We are here to help</h2>
                        <p className="mb-6 text-gray-700">Whether you have a question, need support, or just want to learn more about our platform, we'd love to hear from you.</p>

                        <div className="space-y-4 text-sm"> 
                            <div className="flex items-center gap-3">
                              {/*  <FaPhoneAlt className="text-[#042F2E]" /> */}
                                <span> +2348152026763 </span>
                            </div>
                             <div className="flex items-center gap-3">
                               {/*  <FaPhoneAlt className="text-[#042F2E]" />  */}
                                <span>+2348152026763 </span>
                            </div>
                             <div className="flex items-center gap-3">
                                {/* <FaEnvelope className="text-[#042F2E]" />  */}
                                <span>cyncratech@gmail.com </span>
                            </div>
                             <div className="flex items-center gap-3">
                                {/* <FaMapMarkerAlt className="text-[#042F2E]" />  */}
                                <span>Yaba, Lagos, Nigeria</span>
                            </div>
                             <div className="flex items-center gap-3">
                                {/* <FaGlobe className="text-[#042F2E]" />  */}
                                <span>www.cyncra.com</span>
                            </div>
                       </div>
                    </div> 

                    {/*Right row*/}
                    <div className="bg-[E6F7F7] p-6 rounded-md shadow-sm">
                        <form action="#" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                                <input type="text" id="name" className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-[#042F2E]" placeholder="Your Name" required />
                           
                                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                                <input type="email" id="email" className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-[#042F2E]" placeholder="Your Email" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                                <textarea id="message"className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none outline-none focus:ring-2 focus:ring-[#042F2E]"  placeholder="Your Question/Suggestion" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="bg-[#042F2E] text-white px-6 py-2 rounded-full hover:bg-[#064B4A] transition all" >Submit Here</button>
                        </form>
                    </div>
            </div>
        </section>
    );
}