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

                        {/* SEO Optimized Service Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6"
                        >
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                                <MapPin size={16} className="mr-2" />
                                🚀 Jasa Pembuatan Website Professional Jakarta
                            </div>
                        </motion.div>

                        {/* Name and Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            {personalInfo.name}
                            <span className="block text-2xl sm:text-3xl lg:text-4xl text-blue-600 dark:text-blue-400 mt-2">
                                DedeProjectDev
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mb-2"
                        >
                            Full Stack Developer & Jasa Website Professional
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-lg text-gray-600 dark:text-gray-300 mb-6 space-y-2"
                        >
                            <p className="font-medium">✅ Website Company Profile ✅ E-commerce ✅ Aplikasi Web Custom</p>
                            <p className="text-green-600 dark:text-green-400 font-semibold">
                                💬 Konsultasi GRATIS via WhatsApp: +62-838-9891-1244
                            </p>
                        </motion.div>

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

                        {/* SEO Bio */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 space-y-4"
                        >
                            <p className="leading-relaxed">
                                🏆 <strong>Jasa pembuatan website terpercaya</strong> dengan pengalaman lebih dari 3 tahun melayani klien di Jakarta dan seluruh Indonesia.
                                Spesialis dalam pengembangan <strong>website company profile</strong>, <strong>e-commerce</strong>, dan <strong>aplikasi web custom</strong> menggunakan teknologi terkini seperti React, Next.js, dan Node.js.
                            </p>
                            <p className="leading-relaxed">
                                💼 <strong>Kenapa pilih DedeProjectDev?</strong> Kami memberikan solusi website professional dengan harga terjangkau,
                                garansi revisi unlimited, dan layanan konsultasi gratis. Setiap website yang kami buat responsive, SEO-friendly, dan loading cepat.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-center">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Website Selesai</div>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Kepuasan Klien</div>
                                </div>
                                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Support WhatsApp</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <Button
                            onClick={() => window.open('https://wa.me/6283898911244?text=Halo%20DedeProjectDev%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website.%20Bisa%20konsultasi%20gratis%3F', '_blank')}
                            size="lg"
                            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white animate-pulse"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z" />
                            </svg>
                            Konsultasi GRATIS WhatsApp
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => scrollToSection('projects')}
                            className="w-full sm:w-auto border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            Lihat Portfolio
                        </Button>

                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={handleDownloadCV}
                            className="w-full sm:w-auto"
                        >
                            <Download size={20} className="mr-2" />
                            Download CV
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
