'use client';

import Link from 'next/link';

interface TagProps {
    tag: string;
    href?: string;
    variant?: 'default' | 'chip' | 'outline';
    size?: 'sm' | 'md';
    prefix?: string;
    highlighted?: boolean;
    onClick?: (tag: string) => void;
    className?: string;
}

export default function Tag({
    tag,
    href,
    variant = 'default',
    size = 'sm',
    prefix = '#',
    highlighted = false,
    onClick,
    className = ''
}: TagProps) {
    const baseClasses = 'inline-block font-medium transition-colors duration-200 cursor-pointer';

    // Size classes
    const sizeClasses = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm'
    };

    // Variant classes
    const variantClasses = {
        default: highlighted
            ? 'bg-green-900 text-black rounded'
            : 'bg-gray-800 text-gray-400 hover:text-cyan-400 rounded',
        chip: highlighted
            ? 'bg-cyan-400 text-black rounded-full border border-cyan-400'
            : 'bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400',
        outline: highlighted
            ? 'bg-cyan-400 text-black border border-cyan-400 rounded'
            : 'bg-transparent text-gray-400 border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 rounded'
    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.stopPropagation();
            onClick(tag);
        }
    };

    const content = `${prefix}${tag}`;

    if (href) {
        return (
            <Link
                href={href}
                className={classes}
                onClick={handleClick}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className={classes}
            onClick={handleClick}
        >
            {content}
        </button>
    );
}
