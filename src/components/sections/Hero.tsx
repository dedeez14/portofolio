'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { personalInfo, socialLinks, experiences } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';
import Image from 'next/image';

export function Hero() {
    const handleDownloadCV = () => {
        if (personalInfo.resumeUrl) {
            window.open(personalInfo.resumeUrl, '_blank');
        }
    };

    const yearsOfExperience = new Date().getFullYear() - 2018;
    const totalExperience = experiences.length;

    return (
        <section id="hero" className="min-h-screen flex items-center relative pt-20 pb-12">
            {/* Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20" />
                <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

                    {/* Left Column - Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 flex flex-col items-center lg:items-start"
                    >
                        {/* Photo Card */}
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl" />
                            <div className="absolute -top-3 -left-3 w-24 h-24 border-4 border-blue-500/30 dark:border-blue-400/20 rounded-2xl" />
                            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl" />

                            <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                                <Image
                                    src="/profile.jpg"
                                    alt={personalInfo.name}
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>

                            {/* Status Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, type: 'spring' }}
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-6 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-2 whitespace-nowrap"
                            >
                                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Open to Work</span>
                            </motion.div>
                        </div>

                        {/* Quick Contact Info - Desktop */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="hidden lg:flex flex-col gap-3 mt-10 w-full"
                        >
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors flex-shrink-0">
                                    <Mail size={14} className="text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="truncate">{personalInfo.email}</span>
                            </a>
                            {personalInfo.phone && (
                                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                                    <div className="w-8 h-8 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors flex-shrink-0">
                                        <Phone size={14} className="text-green-600 dark:text-green-400" />
                                    </div>
                                    <span>{personalInfo.phone}</span>
                                </a>
                            )}
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <div className="w-8 h-8 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin size={14} className="text-purple-600 dark:text-purple-400" />
                                </div>
                                <span>{personalInfo.location}</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 text-center lg:text-left"
                    >
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50 mb-4"
                        >
                            <ExternalLink size={13} />
                            Portfolio CV
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 leading-tight"
                        >
                            {personalInfo.name}
                        </motion.h1>

                        {/* Title */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-5"
                        >
                            Full Stack Developer
                        </motion.p>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Passionate full-stack developer with {yearsOfExperience}+ years of experience building scalable web applications.
                            Specialized in <strong className="text-gray-800 dark:text-gray-100">Laravel</strong>, <strong className="text-gray-800 dark:text-gray-100">React</strong>, and <strong className="text-gray-800 dark:text-gray-100">Node.js</strong> —
                            turning ideas into reliable, user-friendly digital products.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0"
                        >
                            <div className="text-center lg:text-left p-4 bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm">
                                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">{yearsOfExperience}+</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Years Exp.</div>
                            </div>
                            <div className="text-center lg:text-left p-4 bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm">
                                <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">20+</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Projects</div>
                            </div>
                            <div className="text-center lg:text-left p-4 bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm">
                                <div className="text-2xl sm:text-3xl font-bold text-violet-600 dark:text-violet-400">{totalExperience}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Companies</div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
                        >
                            <Button
                                onClick={() => scrollToSection('projects')}
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 dark:shadow-none"
                            >
                                View Portfolio
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => scrollToSection('contact')}
                                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <Mail size={18} className="mr-2" />
                                Contact Me
                            </Button>
                            <Button
                                variant="secondary"
                                size="lg"
                                onClick={handleDownloadCV}
                                className="text-gray-700 dark:text-gray-200"
                            >
                                <Download size={18} className="mr-2" />
                                Download CV
                            </Button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-3 justify-center lg:justify-start"
                        >
                            <span className="text-sm text-gray-400 dark:text-gray-500">Find me on</span>
                            <div className="flex gap-2">
                                {socialLinks.github && (
                                    <a
                                        href={socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-white rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-gray-900 transition-all duration-200"
                                    >
                                        <Github size={18} />
                                    </a>
                                )}
                                {socialLinks.linkedin && (
                                    <a
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-200"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                )}
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="w-9 h-9 bg-gray-100 dark:bg-gray-800 hover:bg-red-500 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-200"
                                >
                                    <Mail size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex justify-center mt-16"
                >
                    <button
                        onClick={() => scrollToSection('skills')}
                        className="animate-bounce text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        aria-label="Scroll down"
                    >
                        <ArrowDown size={24} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
