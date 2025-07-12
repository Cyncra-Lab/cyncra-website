'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <section className="bg-dark text-white py-5">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="fw-bold mb-2">Contact Us</h2>
                        <p className="mb-4">We want to hear from you</p>
                        <Image src="/images/img1.jpeg" alt="Contact" width={350} height={250} className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </section>
    )
}