import React from 'react';
import { Button } from '../common/Button';
import { Reveal } from '../common/Reveal';
import { FadeIn } from '../common/FadeIn';
import { ArrowRight } from 'lucide-react';

export const Projects = ({ data }) => {
    const { projects } = data;

    return (
        <section id="projects" className="section">
            <FadeIn>
                <h2 className="section__title text-center text-3xl md:text-5xl font-second font-semibold mb-12 text-title-color">
                    My Recent <span className="text-first-color">Projects</span>
                </h2>
            </FadeIn>

            <div className="container grid gap-12">
                {projects.map((project, index) => (
                    <article key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''}`}>
                        {/* Project Image */}
                        <Reveal width="100%">
                            <div className={`relative overflow-hidden rounded-2xl border border-white/5 group ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    {/* Could add a link icon here */}
                                </div>
                            </div>
                        </Reveal>

                        {/* Project Info */}
                        <FadeIn delay={0.2} className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                            <span className="text-first-color font-medium block mb-2">{project.category}</span>
                            <h3 className="text-3xl font-second font-semibold text-title-color mb-4">{project.title}</h3>
                            <p className="text-text-color mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-container-color border border-white/10 rounded-full text-xs text-text-color">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <Button href="#" variant="outline" className="text-sm">
                                View Case Study <ArrowRight className="ml-2" size={16} />
                            </Button>
                        </FadeIn>
                    </article>
                ))}
            </div>
        </section>
    );
};
