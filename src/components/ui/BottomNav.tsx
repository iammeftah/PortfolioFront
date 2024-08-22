import React from 'react';

interface NavItem {
    href: string;
    icon: React.ReactNode;
    label: string;
}

interface BottomNavProps {
    navItems: NavItem[];
}

export const BottomNav: React.FC<BottomNavProps> = ({ navItems }) => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-purple-100 bg-opacity-20 backdrop-blur-md shadow-lg py-4 px-6 rounded-t-3xl flex justify-around items-center md:hidden">
            {navItems.map((item) => (
<a
                key={item.href}
                href={item.href}
                className="flex flex-col items-center text-lavender-100 opacity-50 hover:opacity-100 hover:text-purple-100 transition-colors duration-300"
                >
            {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
</a>
))}

</nav>
);
};