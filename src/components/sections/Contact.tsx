'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { ContactForm } from '@/types';
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Send,
    CheckCircle
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function Contact() {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<ContactForm>>({});

    const validateForm = (): boolean => {
        const newErrors: Partial<ContactForm> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            // In a real app, you would send the data to your backend
            console.log('Form submitted:', formData);

            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof ContactForm, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const socialIcons = {
        github: Github,
        linkedin: Linkedin,
        twitter: Twitter,
        instagram: Instagram
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {/* SEO Optimized Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Hubungi DedeProjectDev - Jasa Pembuatan Website
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                            Siap membantu mewujudkan website impian Anda! <strong>Konsultasi GRATIS</strong> via WhatsApp untuk diskusi kebutuhan website company profile, e-commerce, atau aplikasi web custom.
                        </p>

                        {/* WhatsApp CTA Button */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mb-8"
                        >
                            <Button
                                onClick={() => window.open('https://wa.me/6283898911244?text=Halo%20DedeProjectDev%2C%20saya%20ingin%20konsultasi%20tentang%20jasa%20pembuatan%20website.%20Bisa%20bantu%3F', '_blank')}
                                size="lg"
                                className="bg-green-600 hover:bg-green-700 text-white animate-pulse"
                            >
                                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z" />
                                </svg>
                                💬 Chat WhatsApp Sekarang - Konsultasi GRATIS!
                            </Button>
                        </motion.div>

                        {/* Service Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                                <div className="font-semibold text-blue-800 dark:text-blue-300">⚡ Respon Cepat</div>
                                <div className="text-blue-600 dark:text-blue-400">Balas dalam 1 jam</div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                                <div className="font-semibold text-green-800 dark:text-green-300">✅ Garansi Revisi</div>
                                <div className="text-green-600 dark:text-green-400">revisi</div>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                                <div className="font-semibold text-purple-800 dark:text-purple-300">🏆 Harga Terbaik</div>
                                <div className="text-purple-600 dark:text-purple-400">Mulai Rp 1.5 juta</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants}>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                        Let&rsquo;s Connect
                                    </h3>

                                    <div className="space-y-6">
                                        {/* Contact Details */}
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                                    <a
                                                        href={`mailto:${personalInfo.email}`}
                                                        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                    >
                                                        {personalInfo.email}
                                                    </a>
                                                </div>
                                            </div>

                                            {personalInfo.phone && (
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                                                        <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone / WhatsApp</p>
                                                        <div className="flex flex-col space-y-1">
                                                            <a
                                                                href={`tel:${personalInfo.phone}`}
                                                                className="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                                            >
                                                                {personalInfo.phone}
                                                            </a>
                                                            <a
                                                                href={`https://wa.me/6283898911244?text=Halo%20DedeProjectDev%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-green-600 dark:text-green-400 hover:text-green-700 transition-colors text-sm font-medium"
                                                            >
                                                                💬 Chat WhatsApp
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                                                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                                    <p className="text-gray-900 dark:text-white">{personalInfo.location}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Follow me on</p>
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
                                                            className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 transition-colors"
                                                        >
                                                            <IconComponent size={20} />
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Business Hours & Response */}
                                        <div className="space-y-3">
                                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                                <p className="text-sm text-green-800 dark:text-green-200">
                                                    <span className="font-medium">⚡ WhatsApp Response:</span> Biasanya membalas dalam 1 jam (09:00-18:00 WIB)
                                                </p>
                                            </div>
                                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                                <p className="text-sm text-blue-800 dark:text-blue-200">
                                                    <span className="font-medium">📧 Email Response:</span> Maksimal 24 jam pada hari kerja
                                                </p>
                                            </div>
                                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                                <p className="text-sm text-purple-800 dark:text-purple-200">
                                                    <span className="font-medium">🕒 Jam Kerja:</span> Senin-Jumat 09:00-18:00, Sabtu 09:00-15:00 WIB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <Card>
                                <CardContent className="p-6">
                                    {isSubmitted ? (
                                        <div className="text-center py-8">
                                            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                                Message Sent!
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                                Thank you for reaching out. I&rsquo;ll get back to you as soon as possible.
                                            </p>
                                            <Button
                                                variant="outline"
                                                onClick={() => setIsSubmitted(false)}
                                            >
                                                Send Another Message
                                            </Button>
                                        </div>
                                    ) : (
                                        <>
                                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                                Send Message
                                            </h3>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <Input
                                                        label="Name"
                                                        placeholder="Your name"
                                                        value={formData.name}
                                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                                        error={errors.name}
                                                    />
                                                    <Input
                                                        label="Email"
                                                        type="email"
                                                        placeholder="your.email@example.com"
                                                        value={formData.email}
                                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                                        error={errors.email}
                                                    />
                                                </div>

                                                <Input
                                                    label="Subject"
                                                    placeholder="What's this about?"
                                                    value={formData.subject}
                                                    onChange={(e) => handleInputChange('subject', e.target.value)}
                                                    error={errors.subject}
                                                />

                                                <Textarea
                                                    label="Message"
                                                    placeholder="Tell me about your project or idea..."
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                                    error={errors.message}
                                                />

                                                <Button
                                                    type="submit"
                                                    loading={isSubmitting}
                                                    className="w-full"
                                                    size="lg"
                                                >
                                                    <Send size={20} className="mr-2" />
                                                    Send Message
                                                </Button>
                                            </form>
                                        </>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
