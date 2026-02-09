import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { Quote, Star } from 'lucide-react';

export const Testimonials = ({ data }) => {
    const { testimonials } = data;

    return (
        <section id="testimonials" className="section">
            <div className="container">
                <FadeIn>
                    <h2 className="section__title text-center text-3xl md:text-5xl font-second font-semibold mb-16 text-title-color leading-tight">
                        <span className="text-first-color block mb-2">What They Say</span>
                        About Me
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((item, index) => (
                        <FadeIn key={index} delay={index * 0.1} className="h-full">
                            <div className="bg-container-color p-8 rounded-2xl border border-white/5 relative h-full flex flex-col">
                                <Quote className="text-first-color mb-4" size={40} />
                                <p className="text-text-color mb-6 italic flex-grow">
                                    "{item.comment}"
                                </p>
                                <div className="flex items-center gap-4">
                                    {/* The div with w-12 h-12 was removed as per the instruction's snippet */}
                                    <div>
                                        <h3 className="text-white font-medium">{item.name}</h3>
                                        <div className="flex gap-1 text-first-color text-sm">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
