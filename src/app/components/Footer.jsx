'use client';

import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-5"> 
        <div className="container">
            <div className="row gy-4 pb-4 border-bottom border-secondary">

                <div className="col-md-3">
                    <h5 className="fw-bold mb-3">Contact Us </h5>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white"><FaFacebookF/></a>
                            <a href="#" className="text-white"><FaInstagram/></a>
                            <a href="#" className="text-white"><FaTwitter/></a>
                            <a href="#" className="text-white"><FaLinkedinIn/></a>
                        </div>
                </div>

                <div className="col-md-3">
                    <h5 className="fw-bold mb-3">About</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white text-decoration-none">Our Story</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Mission and Vision</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Our Core Values</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Meet the Team</a></li>
                    </ul>
                </div>

                <div className="col-md-3">
                    <h5 className="fw-bold mb-3">Services</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Product Strategy</a></li>
                            <li><a href="#" className="text-white text-decoration-none">UI/UX Design</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Web Development</a></li>
                        </ul>
                </div>

                <div className="col-md-3">
                    <h5 className="fw-bold mb-3">Support</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Complaints</a></li>
                    </ul>
                </div>
            </div>

            <div className="row justify-content-between align-items-center py-4">
                <div className="col-md-6">
                    <form action="/" className="d-flex">
                    <input type="email" placeholder='Type Your Email Here' className="form-control me-2"/>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
                <div className="col-md-6 text-md-end mt-3 mt-md-0">
                    <p className="mb-0">&copy; Cyncra - 2024. All Rights Reserved</p>
                </div>
            </div>
        </div>
        </footer>
    )
}