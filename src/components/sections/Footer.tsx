'use client';

import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { Github, Linkedin, Twitter, Instagram, Heart, ArrowUp } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram
};

export function Footer() {
    const handleScrollToTop = () => {
        scrollToSection('hero');
    };

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">
                            {personalInfo.name.split(' ')[0]}<span className="text-blue-400">.</span>
                        </h3>
                        <p className="text-gray-400 max-w-md">
                            {personalInfo.title} passionate about creating innovative digital solutions
                            and bringing ideas to life through code.
                        </p>
                        <div className="flex space-x-4">
                            {Object.entries(socialLinks).map(([platform, url]) => {
                                if (!url) return null;
                                const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                                if (!IconComponent) return null;

                                return (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                                    >
                                        <IconComponent size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <nav className="space-y-2">
                            {[
                                { name: 'Home', id: 'hero' },
                                { name: 'About', id: 'about' },
                                { name: 'Skills', id: 'skills' },
                                { name: 'Experience', id: 'experience' },
                                { name: 'Projects', id: 'projects' },
                                { name: 'Contact', id: 'contact' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Get In Touch</h4>
                        <div className="space-y-2 text-gray-400">
                            <p>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    {personalInfo.email}
                                </a>
                            </p>
                            {personalInfo.phone && (
                                <p>
                                    <a
                                        href={`tel:${personalInfo.phone}`}
                                        className="hover:text-white transition-colors duration-200"
                                    >
                                        {personalInfo.phone}
                                    </a>
                                </p>
                            )}
                            <p>{personalInfo.location}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                        <span>© {new Date().getFullYear()} {personalInfo.name}. Made with</span>
                        <Heart size={16} className="mx-1 text-red-500" />
                        <span>using Next.js & TypeScript</span>
                    </div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={handleScrollToTop}
                        className="mt-4 sm:mt-0 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                    >
                        <span className="text-sm">Back to top</span>
                        <ArrowUp size={16} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
