'use client';

export default function ContactInfoForm(){
    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="row">
                    {/*left row */}
                    <div className="col-md-6 md-4">
                        <h5 className="fw-bold">We are here to help</h5>
                        <p>Whether you have a question, need support, or just want to learn more about our platform, we'd love to hear from you.</p>

                        <ul className="list-unstyled">
                            <li><strong>Phone: </strong>+2348123456789</li>
                            <li><strong>Email: </strong>cyncratech@gmail.com</li>
                            <li><strong>Website: </strong>www.cyncra.com</li>
                            <li><strong>Office: </strong>Yaba, Lagos, Nigeria</li>
                        </ul>
                    </div>

                    {/*Right row*/}
                    <div className="col-md-6">
                        <form action="#" className="p-4 rounded" style={{backgroundColor: '#e7f9fb'}}>
                            <div className="mb-3">
                                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" placeholder="Your Question/Suggestion" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-success w-100">Submit Here</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}