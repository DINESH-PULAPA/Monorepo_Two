import React from 'react';
import {
    Header,
    Hero,
    About,
    Projects,
    Work,
    Services,
    Testimonials,
    Contact,
    Footer
} from '@utube/ui';
import profileData from '../data/profile.json';

const UtubeLayout = () => {
    return (
        <div className="layout relative bg-body-color min-h-screen">
            <Header data={profileData} />

            <main className="main">
                <Hero data={profileData} />
                <About data={profileData} />
                <Projects data={profileData} />
                <Work data={profileData} />
                <Services data={profileData} />
                <Testimonials data={profileData} />
                <Contact data={profileData} />
            </main>

            <Footer data={profileData} />
        </div>
    );
};

export default UtubeLayout;
