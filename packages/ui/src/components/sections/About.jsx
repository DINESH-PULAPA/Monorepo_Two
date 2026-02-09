import React from 'react';
import { Button } from '../common/Button';
import { FadeIn } from '../common/FadeIn';
import { Download } from 'lucide-react';

export const About = ({ data }) => {
    const { basics } = data;

    return (
        <section id="about" className="section">
            <div className="container grid md:grid-cols-2 gap-16 items-start">

                {/* Title Area */}
                <FadeIn>
                    <h2 className="text-[2.5rem] md:text-[3.5rem] font-second font-semibold leading-tight text-title-color">
                        <span className="text-first-color">Creativity</span> <br />
                        Is My Passion
                    </h2>
                </FadeIn>

                {/* Description Area */}
                <FadeIn delay={0.2} className="flex flex-col gap-8">
                    <p className="text-lg text-text-color leading-relaxed">
                        {basics.summary}
                    </p>

                    <div>
                        <Button href="#" variant="primary" className="gap-3">
                            Resume <Download size={20} />
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
