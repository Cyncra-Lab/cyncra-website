'use client';

import {Facebook, instagram, LinkedinInIcon} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#042F2E] text-white py-12 px-6 md:px-20"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                <div>
                    <h4 className="text-lg font-bold mb-4">Contact Us </h4>
                        <div className="flex space-x-4 mb-2">
                            <a href="https://facebook.com" target='_blank' rel="noopener noreferrer" className="hover:text-teal-400"><Facebook size={20}/></a>
                            <a href="https://twitter.com" target='_blank' rel="noopener noreferrer" className="hover:text-teal-400"><Twitter size={20}/></a>
                            <a href="https://instagram.com" target='_blank' rel="noopener noreferrer" className="hover:text-teal-400"><Instagram size={20}/></a>
                            <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer" className="hover:text-teal-400"><LinkedinIn size={20}/></a>
                        </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4">About</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" >Our Story</a></li>
                        <li><a href="#" >Mission and Vision</a></li>
                        <li><a href="#" >Our Core Values</a></li>
                        <li><a href="#" >Meet the Team</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" >Product Strategy</a></li>
                            <li><a href="#" >UI/UX Design</a></li>
                            <li><a href="#" >Web Development</a></li>
                            <li><a href="#" >Moblie Development</a></li>
                        </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" >Help Center</a></li>
                        <li><a href="#" >Contact Us</a></li>
                        <li><a href="#" >Complaints</a></li>
                    </ul>
                </div>
            </div>

                <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
                    &copy; Cyncra - 2024. All Rights Reserved
                </div>
        </footer>
    )
}