'use client';

export default function Newsletter(){
    return(

        <section className="py-5 bg-white border-top">
            <div className="container text-center">
                <h5 className="mb-3"> Our Newsletter</h5>
                <p className="mb-4">
                    Subscribe to get updates on new features, helpful tips, and fresh insughts. </p>
                    <form action="#" className="row justify-content-center">
                        <div className="col-md-6">
                            <input type="email" className="form-control" placeholder="Type your email here" required
                            />
                        </div>
                        <div className="col-md-2 mt-3 mt-md-0">
                            <button type="submit" className="btn btn-success w-100">Submit</button>
                        </div>
                    </form>
            </div>
        </section>
    );
}