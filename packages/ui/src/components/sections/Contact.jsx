import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { Button } from '../common/Button';
import { Send, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

export const Contact = ({ data }) => {
    const { basics } = data;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Message sent! (Demo)");
    };

    return (
        <section id="contact" className="section pb-16">
            <div className="container grid md:grid-cols-2 gap-16 items-start">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-second font-semibold text-title-color mb-8">
                        Let's Talk About <br /> Your Project
                    </h2>
                    <p className="text-xl text-text-color mb-8 max-w-md">
                        Have a project in mind? Send me a message and let's discuss how I can help you.
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-container-color rounded-lg border border-white/10 text-first-color">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Email Me</h3>
                                <a href={`mailto:${basics.email}`} className="text-text-color hover:text-first-color transition-colors block">
                                    {basics.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-container-color rounded-lg border border-white/10 text-first-color">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Location</h3>
                                <p className="text-text-color">
                                    {basics.location.city}, {basics.location.country}
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2} className="bg-container-color p-8 rounded-2xl border border-white/5 md:pl-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <h3 className="text-2xl font-second font-semibold text-white mb-2">Send Message</h3>

                        <div className="grid gap-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder=" "
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-first-color transition-colors peer"
                                    required
                                />
                                <label className="absolute left-0 top-3 text-text-color pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-first-color peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-first-color">
                                    Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder=" "
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-first-color transition-colors peer"
                                    required
                                />
                                <label className="absolute left-0 top-3 text-text-color pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-first-color peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-first-color">
                                    Email
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    rows="4"
                                    placeholder=" "
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-first-color transition-colors peer resize-none"
                                    required
                                ></textarea>
                                <label className="absolute left-0 top-3 text-text-color pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-first-color peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-first-color">
                                    Message
                                </label>
                            </div>
                        </div>

                        <Button type="submit" className="w-full justify-center mt-4">
                            Send Message <ArrowRight size={20} className="ml-2" />
                        </Button>
                    </form>
                </FadeIn>
            </div>
        </section>
    );
};
