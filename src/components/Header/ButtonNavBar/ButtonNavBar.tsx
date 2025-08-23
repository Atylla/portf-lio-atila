'use client'

interface ButtonNavBarProps {
    label: string;
    rota: string;
}

export function ButtonNavBar({ label, rota }: ButtonNavBarProps) {

    const handleClick = () => {
        const section = document.getElementById(rota);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button
            onClick={handleClick}
            className="text-stone-700 dark:text-white hover:text-amber-500">
            {label}
        </button>
    )
}