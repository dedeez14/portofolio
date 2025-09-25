'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/portfolio';
import { Building, Calendar, MapPin } from 'lucide-react';
import { formatDate, calculateExperience } from '@/lib/utils';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

const typeColors = {
    'full-time': 'success',
    'part-time': 'warning',
    'freelance': 'primary',
    'contract': 'secondary',
    'internship': 'danger'
} as const;

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
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
                            Work Experience
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            My professional journey and the companies I&rsquo;ve had the pleasure to work with
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                        {/* Experience Items */}
                        <div className="space-y-12">
                            {experiences.map((experience, index) => (
                                <motion.div
                                    key={experience.id}
                                    variants={itemVariants}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white dark:border-gray-900 rounded-full shadow-lg z-10"></div>

                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                                        <Card hover>
                                            <CardContent className="p-6">
                                                {/* Header */}
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                            {experience.position}
                                                        </h3>
                                                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mt-1">
                                                            <Building size={16} className="mr-2" />
                                                            {experience.company}
                                                        </div>
                                                    </div>
                                                    <Badge variant={typeColors[experience.type]} className="mt-2 sm:mt-0">
                                                        {experience.type}
                                                    </Badge>
                                                </div>

                                                {/* Meta Information */}
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                    <div className="flex items-center">
                                                        <Calendar size={14} className="mr-1" />
                                                        {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                                                    </div>
                                                    <div className="flex items-center mt-1 sm:mt-0">
                                                        <span className="mr-1">•</span>
                                                        {calculateExperience(experience.startDate, experience.endDate)}
                                                    </div>
                                                    <div className="flex items-center mt-1 sm:mt-0">
                                                        <MapPin size={14} className="mr-1" />
                                                        {experience.location}
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <div className="mb-4">
                                                    <ul className="space-y-2">
                                                        {experience.description.map((item, idx) => (
                                                            <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                                                                <span className="w-2 h-2 bg-blue-600 dark:text-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Technologies */}
                                                <div>
                                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        Technologies:
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {experience.technologies.map((tech) => (
                                                            <Badge key={tech} variant="secondary" size="sm">
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Summary */}
                    <motion.div variants={itemVariants} className="mt-16">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Professional Summary
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                            {calculateExperience('2018-01-01').split(' ')[0]}+
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Years of Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                            {experiences.length}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Companies Worked With</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                            {experiences.filter(exp => exp.type === 'full-time').length}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Full-time Positions</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
