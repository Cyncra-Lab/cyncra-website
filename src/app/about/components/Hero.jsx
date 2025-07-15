import Image from 'next/image';

export default function Hero() {
    return (
        <section
            className="text-white h-[46.625rem] flex items-center justify-center"
            style={{
                background: 'linear-gradient(to bottom, #023b43, #0595a9)',
            }}
        >
            <div className="text-center w-[80.625rem] mx-auto">
                <div className="flex flex-col items-center gap-[72px]">
                    {/* Text Section */}
                    <div className="w-full h-[236px] flex flex-col justify-center">
                        <h3 className="mb-4 text-lg tracking-wide">
                            ABOUT US
                        </h3>
                        <h2 className="font-bold text-4xl mb-6">Where Innovation Meets Execution</h2>

                        <p className="font-normal text-[#AEAEAE] text-2xl leading-relaxed mx-auto">
                            At Cyncra, we blend creativity, strategy, and technology to help brands and businesses unlock their full potential. We don’t just build products, we build experiences that drive impact and fuel growth. Our team of thinkers, doers, and builders is united by one goal: delivering real solutions that move businesses forward
                        </p>
                    </div>

                    {/* Image Gallery Section */}
                    <div className="w-full h-[350px] flex items-center justify-center">
                        <div className="w-full">
                            {/* Responsive Image Gallery */}
                            <div className="grid grid-cols-2 md:grid-cols-4 mx-auto" style={{ gap: '29px' }}>
                                <div className="col-span-1 flex justify-center">
                                    <Image
                                        src="/aboutImages/Frame 2147226857.webp"
                                        alt="Innovation and creativity workspace"
                                        width={300}
                                        height={350}
                                        className="w-full h-[350px] object-cover rounded-3xl  hover:shadow-xl transition-shadow duration-300"
                                    />
                                </div>

                                <div className="col-span-1 flex justify-center items-center h-[350px]">
                                    <Image
                                        src="/aboutImages/Frame 2147226858.webp"
                                        alt="Team collaboration and strategy"
                                        width={300}
                                        height={250}
                                        className="w-full h-[250px] object-cover rounded-3xl  hover:shadow-xl transition-shadow duration-300"
                                    />
                                </div>

                                <div className="col-span-1 flex justify-center">
                                    <Image
                                        src="/aboutImages/Frame 2147226859.webp"
                                        alt="Technology and digital solutions"
                                        width={300}
                                        height={350}
                                        className="w-full h-[350px] object-cover rounded-3xl  hover:shadow-xl transition-shadow duration-300"
                                    />
                                </div>

                                <div className="col-span-1 flex justify-center items-center h-[350px]">
                                    <Image
                                        src="/aboutImages/Frame 2147226860.webp"
                                        alt="Business growth and execution"
                                        width={300}
                                        height={250}
                                        className="w-full h-[250px] object-cover rounded-3xl  hover:shadow-xl transition-shadow duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}