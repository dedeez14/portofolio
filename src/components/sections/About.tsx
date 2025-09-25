'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { personalInfo, education, certificates } from '@/data/portfolio';
import { Calendar, Award, GraduationCap } from 'lucide-react';
import { formatDate } from '@/lib/utils';

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

export function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
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
                            About Me
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Get to know more about my background, education, and achievements
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Personal Story */}
                        <motion.div variants={itemVariants}>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                        My Journey
                                    </h3>
                                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                        <p>
                                            Hi! I&rsquo;m {personalInfo.name}, a passionate full-stack developer based in {personalInfo.location}.
                                            My journey into programming started during my computer science studies, where I discovered
                                            my love for creating digital solutions that make a real impact.
                                        </p>
                                        <p>
                                            Over the years, I&rsquo;ve had the opportunity to work with various technologies and contribute
                                            to projects ranging from small business websites to large-scale enterprise applications.
                                            I&rsquo;m particularly passionate about clean code, user experience, and staying up-to-date
                                            with the latest industry trends.
                                        </p>
                                        <p>
                                            When I&rsquo;m not coding, you can find me exploring new technologies, contributing to open-source
                                            projects, or sharing knowledge with the developer community through articles and mentoring.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div variants={itemVariants}>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                        Quick Stats
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                                        </div>
                                        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">50+</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                                        </div>
                                        <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">25+</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
                                        </div>
                                        <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Education */}
                    <motion.div variants={itemVariants} className="mt-16">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                            Education
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {education.map((edu) => (
                                <Card key={edu.id} hover>
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                    {edu.degree}
                                                </h4>
                                                {edu.field && (
                                                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                                                        {edu.field}
                                                    </p>
                                                )}
                                                <p className="text-gray-600 dark:text-gray-300 font-medium">
                                                    {edu.institution}
                                                </p>
                                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                                                    <Calendar size={14} className="mr-1" />
                                                    {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                                                </div>
                                                {edu.gpa && (
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                                        GPA: {edu.gpa}
                                                    </p>
                                                )}
                                                {edu.achievements && edu.achievements.length > 0 && (
                                                    <div className="mt-3">
                                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                            Achievements:
                                                        </p>
                                                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                                            {edu.achievements.map((achievement, index) => (
                                                                <li key={index} className="flex items-start">
                                                                    <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                                    {achievement}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certificates */}
                    <motion.div variants={itemVariants} className="mt-16">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                            Certifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {certificates.map((cert) => (
                                <Card key={cert.id} hover>
                                    <CardContent className="p-6 text-center">
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                            <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            {cert.name}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                                            {cert.issuer}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {formatDate(cert.date)}
                                        </p>
                                        {cert.url && (
                                            <a
                                                href={cert.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                            >
                                                View Certificate →
                                            </a>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
