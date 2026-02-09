import React from 'react';
import { FadeIn } from '../common/FadeIn';

export const Services = ({ data }) => {
    const { services } = data;

    return (
        <section id="skills" className="section">
            <div className="container">
                <FadeIn>
                    <h2 className="section__title text-center text-3xl md:text-5xl font-second font-semibold mb-12 text-title-color">
                        My <span className="text-first-color">Skills</span>
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={index * 0.1} className="h-full">
                            <div className="bg-container-color p-8 rounded-3xl border border-white/5 hover:border-first-color/50 transition-colors h-full flex flex-col">
                                <h3 className="text-2xl font-second font-semibold text-title-color mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-text-color mb-8 leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                <div>
                                    <ul className="flex flex-wrap gap-2">
                                        {service.skills.map((skill) => (
                                            <li key={skill} className="bg-body-color border border-white/10 px-4 py-2 rounded-lg text-sm text-text-color hover:text-first-color transition-colors">
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
