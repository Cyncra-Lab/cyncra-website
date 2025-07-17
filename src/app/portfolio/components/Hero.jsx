import Image from 'next/image';

export default function Hero() {
    return (
        <section
            className="text-white h-[46.625rem] flex items-center justify-center"
            style={{
                background: 'linear-gradient(to bottom, #023b43, #0595a9)',
            }}
        >
            <div className="w-[80.625rem] mx-auto">
                <div className="flex flex-col items-center gap-[72px]">
                    <div className="w-full h-[236px] flex flex-col justify-center">
                        
                        <h2 className="font-bold text-4xl mb-6">Our Work Speaks for itself</h2>

                        <p className="font-regular text-[#AEAEAE] text-2xl leading-relaxed">At Cyncra, we turn ideas into digital excellence. Discover <br />our top achievements, crafted with precision and purpose
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}