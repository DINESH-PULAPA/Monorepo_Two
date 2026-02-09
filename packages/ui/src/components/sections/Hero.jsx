import React from 'react';
import { Button } from '../common/Button';
import { FadeIn } from '../common/FadeIn';
import { ArrowUpRight, Linkedin, Dribbble, Twitter, Github, Globe, Phone, Mail } from 'lucide-react';

const SocialIcon = ({ network }) => {
    switch (network?.toLowerCase()) {
        case 'linkedin': return <Linkedin size={20} />;
        case 'dribbble': return <Dribbble size={20} />;
        case 'twitter': return <Twitter size={20} />;
        case 'github': return <Github size={20} />;
        case 'phone': return <Phone size={20} />;
        case 'mail': return <Mail size={20} />;
        default: return <Globe size={20} />;
    }
};

export const Hero = ({ data }) => {
    const { basics } = data;

    return (
        <section id="home" className="section relative h-screen flex items-center pt-32">
            <div className="container grid md:grid-cols-2 gap-12 items-center">

                {/* Content Info */}
                <div className="flex flex-col gap-8 order-2 md:order-1">
                    <FadeIn delay={0.2}>
                        <span className="block text-xl font-medium text-first-color mb-2">
                            {basics.greeting}
                        </span>
                        <h1 className="text-[3.5rem] md:text-[5rem] font-second font-semibold leading-tight text-title-color">
                            {basics.name.split(' ')[0]} <br />
                            <span className="text-white relative z-10">
                                {basics.name.split(' ')[1]}
                                {/* Decorative circle could go here */}
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4} className="flex flex-col gap-4">
                        <span className="h-px w-20 bg-text-color opacity-40"></span>
                        <p className="text-lg text-text-color uppercase tracking-widest max-w-sm">
                            {basics.label.replace(' & ', ' \n & ')}
                        </p>
                    </FadeIn>

                    {/* Socials */}
                    <FadeIn delay={0.6} className="flex items-center gap-6">
                        {basics.profiles.map((profile) => (
                            <a
                                key={profile.network}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-color hover:text-first-color transition-colors"
                            >
                                <SocialIcon network={profile.network} />
                            </a>
                        ))}
                    </FadeIn>

                    <FadeIn delay={0.8} className="mt-4">
                        <Button href="#" variant="outline" className="rounded-none border border-text-color text-text-color hover:border-first-color">
                            RESUME <ArrowUpRight className="ml-2" size={20} />
                        </Button>
                    </FadeIn>
                </div>

                {/* Image Placeholder / Visual */}
                <FadeIn delay={1.0} className="order-1 md:order-2 flex justify-center relative">
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-container-color border border-white/5 relative z-10 flex items-center justify-center overflow-hidden">
                        <img src={basics.image} alt={basics.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Decorative Blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-first-color/20 blur-[100px] -z-0 rounded-full animate-blob"></div>
                </FadeIn>

            </div>
        </section>
    );
};
