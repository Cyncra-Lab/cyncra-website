'use client';
import { Brain, ClipboardList, PenTool, Code2, Rocket} from 'lucide-react';

export default function HowItWorks() {
    return (
        <section className="bg-whte py-16 px-6 md:px-12 max-w-6xl mx-auto">
            <h2 className="text-2xl md:text:4xl font-bold text-center mb-1">
                HOW IT WORKS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/*Left side-text*/}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Our Process, Your Sucess</h3>
                    <p className="mb-6 text-gray-600">
                        We follow a proven, collaborative process to brng your digital ideas to life - from strategy to launch and beyond.
                    </p>

                    <ul className="space-y-6 text-gray-700">
                        <li className="flex items-start gap-3">
                            <Brain className="text-teal-600 w-6 h-6 mt-1" />
                            <span className="font-semibold text-primary">
                                Discovery & Consultation: </span> Understanding your goals, audience & strategy.
                        </li>
                         <li className="flex items-start gap-3">
                            <ClipboardList className="text-teal-600 w-6 h-6 mt-1" />
                            <span className="font-semibold text-primary">
                                Strategy & Planning: </span>Wireframes, roadmaps, and buisness alignment.
                        </li>
                         <li className="flex items-start gap-3">
                            <PenTool className="text-teal-600 w-6 h-6 mt-1" />
                            <span className="font-semibold text-primary">
                                Design  & Prototyping: </span> Visual concepts tailored to your project.
                        </li>

                         <li className="flex items-start gap-3">
                            <Code2 className="text-teal-600 w-6 h-6 mt-1" />
                            <span className="font-semibold text-primary">
                                Development & Integration: </span> Building fast, secure, and scalable apps/sites.
                        </li>
                        
                        <li className="flex items-start gap-3">
                            <Rocket className="text-teal-600 w-6 h-6 mt-1" />
                            <span className="font-semibold text-primary">
                                Launch & Support: </span> Ongoing updates and growth insight.
                        </li>
                    </ul>
                </div>

                {/* Right side */}
                <div className="flex justify-center">
                    <img src="/images/img1.jpeg" alt="How it works" className="max-w-full h-auto rounded-lg shadow-md"/>
                </div>
            </div>
        </section>
    );
}