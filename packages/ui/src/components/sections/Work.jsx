import React, { useState } from 'react';
import { FadeIn } from '../common/FadeIn';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Work = ({ data }) => {
    const { work } = data;
    const [activeTab, setActiveTab] = useState('experience');

    return (
        <section className="section" id="experience">
            <div className="container">
                <FadeIn>
                    <div className="flex justify-center gap-8 mb-12">
                        <button
                            onClick={() => setActiveTab('experience')}
                            className={`flex items-center gap-2 text-xl font-medium transition-colors ${activeTab === 'experience' ? 'text-first-color' : 'text-text-color hover:text-white'}`}
                        >
                            <Briefcase size={20} /> Experience
                        </button>
                        <button
                            onClick={() => setActiveTab('education')}
                            className={`flex items-center gap-2 text-xl font-medium transition-colors ${activeTab === 'education' ? 'text-first-color' : 'text-text-color hover:text-white'}`}
                        >
                            <GraduationCap size={20} /> Education
                        </button>
                    </div>
                </FadeIn>

                <div className="max-w-3xl mx-auto">
                    {activeTab === 'experience' && (
                        <div className="scroll-mt-24">
                            <div className="flex flex-col gap-8 border-l border-white/10 pl-8 relative">
                                {work.experience.map((exp, index) => (
                                    <FadeIn key={index} delay={index * 0.1}>
                                        <div className="relative">
                                            <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-body-color border-2 border-first-color"></span>
                                            <h4 className="text-xl font-medium text-white">{exp.title}</h4>
                                            <span className="text-first-color text-sm block mb-2">{exp.company} | {exp.period}</span>
                                            <p className="text-text-color text-sm">
                                                {exp.summary}
                                            </p>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'education' && (
                        <div id="education" className="scroll-mt-24">
                            <div className="flex flex-col gap-8 border-l border-white/10 pl-8 relative">
                                {work.education.map((edu, index) => (
                                    <FadeIn key={index} delay={index * 0.1}>
                                        <div className="relative">
                                            <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-body-color border-2 border-first-color"></span>
                                            <h4 className="text-xl font-medium text-white">{edu.title}</h4>
                                            <span className="text-first-color text-sm block mb-2">{edu.institution} | {edu.period}</span>
                                            <p className="text-text-color text-sm">
                                                {edu.summary}
                                            </p>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
