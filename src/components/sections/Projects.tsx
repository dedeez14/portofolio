'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/portfolio';
import { ExternalLink, Github, Calendar, Filter } from 'lucide-react';
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

const categoryColors = {
    web: 'primary',
    mobile: 'success',
    desktop: 'warning',
    api: 'secondary',
    other: 'danger'
} as const;

const statusColors = {
    completed: 'success',
    'in-progress': 'warning',
    planned: 'secondary'
} as const;

export function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

    const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

    const filteredProjects = projects.filter(project => {
        const categoryFilter = selectedCategory === 'all' || project.category === selectedCategory;
        const featuredFilter = !showFeaturedOnly || project.featured;
        return categoryFilter && featuredFilter;
    });

    return (
        <section id="projects" className="py-20">
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
                            My Projects
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            A collection of projects I've worked on, showcasing different technologies and solutions
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                                    {/* Category Filter */}
                                    <div className="flex items-center space-x-2">
                                        <Filter size={20} className="text-gray-500 dark:text-gray-400" />
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Category:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {categories.map((category) => (
                                                <Button
                                                    key={category}
                                                    variant={selectedCategory === category ? 'primary' : 'ghost'}
                                                    size="sm"
                                                    onClick={() => setSelectedCategory(category)}
                                                    className="capitalize"
                                                >
                                                    {category}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Featured Toggle */}
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id="featured"
                                            checked={showFeaturedOnly}
                                            onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <label htmlFor="featured" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Featured only
                                        </label>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div key={project.id} variants={itemVariants}>
                                <Card hover className="h-full flex flex-col">
                                    {/* Project Image */}
                                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-t-xl overflow-hidden">
                                        {project.imageUrl ? (
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <span className="text-4xl font-bold text-gray-400 dark:text-gray-600">
                                                    {project.title.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                        {project.featured && (
                                            <div className="absolute top-4 right-4">
                                                <Badge variant="warning" size="sm">
                                                    Featured
                                                </Badge>
                                            </div>
                                        )}
                                    </div>

                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                {project.title}
                                            </h3>
                                            <div className="flex space-x-1">
                                                <Badge variant={categoryColors[project.category]} size="sm">
                                                    {project.category}
                                                </Badge>
                                                <Badge variant={statusColors[project.status]} size="sm">
                                                    {project.status}
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex-1">
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            {project.description}
                                        </p>

                                        {/* Timeline */}
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                                            <Calendar size={14} className="mr-1" />
                                            {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : 'Ongoing'}
                                        </div>

                                        {/* Technologies */}
                                        <div className="mb-4">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Technologies:
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {project.technologies.map((tech) => (
                                                    <Badge key={tech} variant="secondary" size="sm">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter>
                                        <div className="flex space-x-2 w-full">
                                            {project.githubUrl && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => window.open(project.githubUrl, '_blank')}
                                                    className="flex-1"
                                                >
                                                    <Github size={16} className="mr-2" />
                                                    Code
                                                </Button>
                                            )}
                                            {project.liveUrl && (
                                                <Button
                                                    size="sm"
                                                    onClick={() => window.open(project.liveUrl, '_blank')}
                                                    className="flex-1"
                                                >
                                                    <ExternalLink size={16} className="mr-2" />
                                                    Live Demo
                                                </Button>
                                            )}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* No Projects Message */}
                    {filteredProjects.length === 0 && (
                        <motion.div variants={itemVariants} className="text-center py-12">
                            <p className="text-gray-500 dark:text-gray-400">
                                No projects found with the selected filters.
                            </p>
                        </motion.div>
                    )}

                    {/* Project Stats */}
                    <motion.div variants={itemVariants} className="mt-16">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                                    Project Statistics
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                            {projects.length}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Total Projects</div>
                                    </div>
                                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                            {projects.filter(p => p.status === 'completed').length}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Completed</div>
                                    </div>
                                    <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                        <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                                            {projects.filter(p => p.status === 'in-progress').length}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">In Progress</div>
                                    </div>
                                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                            {projects.filter(p => p.featured).length}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Featured</div>
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
