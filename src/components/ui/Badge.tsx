interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md';
    className?: string;
}

export function Badge({
    children,
    variant = 'primary',
    size = 'md',
    className = ''
}: BadgeProps) {
    const baseClasses = 'inline-flex items-center font-medium rounded-full';

    const variants = {
        primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
        secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
        success: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
        warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
        danger: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    };

    const sizes = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm'
    };

    return (
        <span className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}>
            {children}
        </span>
    );
}
