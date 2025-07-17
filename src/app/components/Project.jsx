'use client';

import Image from "next/image";

export default function ProjectCTA(){
    return (
        <section className="py-5" style={{background: 'linear-gradient(#e6f9f2, #fff)'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Image src="/images/img2.jpeg" alt="team" width={400} height={300} className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="fw-bold">Got a project in mind?</h4>
                        <p>From Product Design to Development and beyond. We are always happy to support your vision.</p>
                        <ul>
                            <li>Transparent pricing with the best value</li>
                            <li>Fast and flexible project delivery</li>
                            <li>Custom Solutions tailored to your business goals</li>
                            <li>Ongoing support and long-term partnerships</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}