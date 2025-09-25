'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';
import Image from 'next/image';

export function Hero() {
    const handleDownloadCV = () => {
        // In a real app, this would download the actual CV file
        if (personalInfo.resumeUrl) {
            window.open(personalInfo.resumeUrl, '_blank');
        }
    };

    const handleScrollToAbout = () => {
        scrollToSection('about');
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        {/* Avatar */}
                        <div className="mb-8 flex justify-center">
                            <div className="relative">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
                                >
                                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        <Image
                                            src="/unnamed.jpg"
                                            alt={personalInfo.name}
                                            width={256}
                                            height={256}
                                            className="w-64 h-64 rounded-full object-cover"
                                        />
                                        {/* <img
                                            src="/unnamed.jpg"
                                            alt={personalInfo.name}
                                            className="w-64 h-64 rounded-full object-cover"
                                        /> */}
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.5 }}
                                    className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900"
                                ></motion.div>
                            </div>
                        </div>

                        {/* Name and Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            {personalInfo.name}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mb-2"
                        >
                            {personalInfo.title}
                        </motion.p>

                        {personalInfo.subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                            >
                                {personalInfo.subtitle}
                            </motion.p>
                        )}

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8"
                        >
                            <MapPin size={16} className="mr-2" />
                            <span>{personalInfo.location}</span>
                        </motion.div>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
                        >
                            {personalInfo.bio}
                        </motion.p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <Button
                            onClick={handleDownloadCV}
                            size="lg"
                            className="w-full sm:w-auto"
                        >
                            <Download size={20} className="mr-2" />
                            Download CV
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => scrollToSection('contact')}
                            className="w-full sm:w-auto"
                        >
                            <Mail size={20} className="mr-2" />
                            Get In Touch
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="flex justify-center space-x-6 mb-12"
                    >
                        {socialLinks.github && (
                            <a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            >
                                <Github size={24} />
                            </a>
                        )}
                        {socialLinks.linkedin && (
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>
                        )}
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <Mail size={24} />
                        </a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        onClick={handleScrollToAbout}
                        className="animate-bounce text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                        <ArrowDown size={24} />
                    </motion.button>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            </div>
        </section>
    );
}
