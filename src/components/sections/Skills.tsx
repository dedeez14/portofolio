'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { skills } from '@/data/portfolio';
import { Code, Database, Wrench, Layers } from 'lucide-react';

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

const categoryIcons = {
    frontend: Code,
    backend: Database,
    database: Database,
    tools: Wrench,
    language: Layers,
    framework: Layers
};

const categoryColors = {
    frontend: 'primary',
    backend: 'success',
    database: 'warning',
    tools: 'secondary',
    language: 'danger',
    framework: 'primary'
} as const;

const proficiencyColors = {
    beginner: 'bg-red-200 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    intermediate: 'bg-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    advanced: 'bg-blue-200 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    expert: 'bg-green-200 text-green-800 dark:bg-green-900/20 dark:text-green-400'
};

export function Skills() {
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    const categoryTitles = {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        database: 'Databases',
        tools: 'Tools & Platforms',
        language: 'Programming Languages',
        framework: 'Frameworks & Libraries'
    };

    return (
        <section id="skills" className="py-20">
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
                            Skills & Technologies
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Here are the technologies and tools I work with to bring ideas to life
                        </p>
                    </motion.div>

                    {/* Skills Overview */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <Card>
                            <CardContent className="p-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                            {skills.filter(s => s.category === 'frontend').length}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Frontend</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                            {skills.filter(s => s.category === 'backend').length}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Backend</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                                            {skills.filter(s => s.category === 'database').length}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Databases</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                            {skills.filter(s => s.category === 'tools').length}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Tools</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Skills by Category */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {Object.entries(groupedSkills).map(([category, categorySkills]) => {
                            const IconComponent = categoryIcons[category as keyof typeof categoryIcons];

                            return (
                                <motion.div key={category} variants={itemVariants}>
                                    <Card hover>
                                        <CardContent className="p-6">
                                            <div className="flex items-center mb-6">
                                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                                                    <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                    {categoryTitles[category as keyof typeof categoryTitles]}
                                                </h3>
                                            </div>

                                            <div className="space-y-4">
                                                {categorySkills.map((skill) => (
                                                    <div key={skill.name} className="flex items-center justify-between">
                                                        <div className="flex-1">
                                                            <div className="flex items-center space-x-3">
                                                                <span className="font-medium text-gray-900 dark:text-white">
                                                                    {skill.name}
                                                                </span>
                                                                <Badge
                                                                    variant={categoryColors[skill.category]}
                                                                    size="sm"
                                                                >
                                                                    {skill.proficiency}
                                                                </Badge>
                                                                {skill.yearsOfExperience && (
                                                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                                                        {skill.yearsOfExperience}+ years
                                                                    </span>
                                                                )}
                                                            </div>

                                                            {/* Proficiency Bar */}
                                                            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                                <div
                                                                    className={`h-2 rounded-full transition-all duration-300 ${skill.proficiency === 'expert' ? 'w-full bg-green-500' :
                                                                            skill.proficiency === 'advanced' ? 'w-4/5 bg-blue-500' :
                                                                                skill.proficiency === 'intermediate' ? 'w-3/5 bg-yellow-500' :
                                                                                    'w-2/5 bg-red-500'
                                                                        }`}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Proficiency Legend */}
                    <motion.div variants={itemVariants} className="mt-12">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                                    Proficiency Levels
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {Object.entries(proficiencyColors).map(([level, colorClass]) => (
                                        <div key={level} className="flex items-center space-x-2">
                                            <div className={`w-4 h-4 rounded-full ${colorClass.split(' ')[0]}`}></div>
                                            <span className="text-sm capitalize text-gray-600 dark:text-gray-300">
                                                {level}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                                    Proficiency levels are based on years of experience and project complexity
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
