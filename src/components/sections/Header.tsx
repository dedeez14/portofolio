'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { scrollToSection } from '@/lib/utils';

const navigation = [
    { name: 'Home', id: 'hero' },
    // { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navigation.map(nav => document.getElementById(nav.id));
            const scrollY = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollY) {
                    setActiveSection(navigation[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Dedeproject<span className="text-blue-600">.</span>dev
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                                        : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Theme Toggle & Mobile Menu Button */}
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />

                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                            {navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left ${activeSection === item.id
                                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                                        : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
