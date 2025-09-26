'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/portfolio';
import { ExternalLink, Github, Calendar, Filter } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';

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
                    {/* SEO Optimized Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Portfolio Jasa Pembuatan Website
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Koleksi website dan aplikasi web yang telah kami kembangkan untuk berbagai klien.
                            Dari <strong>company profile</strong>, <strong>e-commerce</strong>, hingga <strong>aplikasi web custom</strong> dengan teknologi terkini.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-2">
                            {['Company Profile', 'E-commerce', 'Web App', 'Landing Page', 'CMS'].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
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
                                            <Image
                                                width={400}
                                                height={200}
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
                                                    View
                                                </Button>
                                            )}
                                            {project.liveUrlNew && (
                                                <Button
                                                    size="sm"
                                                    onClick={() => window.open(project.liveUrlNew, '_blank')}
                                                    className="flex-1"
                                                >
                                                    <ExternalLink size={16} className="mr-2" />
                                                    View V2
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
                                            50+
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Website Selesai</div>
                                    </div>
                                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                            100%
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Kepuasan Klien</div>
                                    </div>
                                    <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                        <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                                            3+
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Tahun Pengalaman</div>
                                    </div>
                                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                            24/7
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Support WhatsApp</div>
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <div className="mt-8 text-center">
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                        Tertarik dengan hasil kerja kami? Konsultasi gratis sekarang!
                                    </p>
                                    <Button
                                        onClick={() => window.open('https://wa.me/6283898911244?text=Halo%20DedeProjectDev%2C%20saya%20melihat%20portfolio%20Anda%20dan%20tertarik%20untuk%20membuat%20website.%20Bisa%20diskusi%3F', '_blank')}
                                        size="lg"
                                        className="bg-green-600 hover:bg-green-700 text-white"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z" />
                                        </svg>
                                        Chat WhatsApp untuk Order
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
