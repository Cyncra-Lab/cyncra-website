'use client';

export default function ServiceHero() {
    return(
        <section className="relative h-[400px] bg-cover bg-center flex items-center text-white" style={{backgroundImage: "url('/images/img1.jpeg')"}}>

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Digital Solutions, Designed to Deliver
                </h1>
                <p className="text-base md:text-lg max-w-xl">
                    At Cyncra, we craft modern websites, mobile apps, and digital experiences that help buisnesses grow, scale, and stand out in a crowded market.
                </p>
            </div>
        </section>
    );
}