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
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? I&rsquo;d love to hear from you!
                        </p>
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
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                                        <a
                                                            href={`tel:${personalInfo.phone}`}
                                                            className="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                                        >
                                                            {personalInfo.phone}
                                                        </a>
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

                                        {/* Response Time */}
                                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                                <span className="font-medium">Quick Response:</span> I typically respond to emails within 24 hours during weekdays.
                                            </p>
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
