'use client'

interface ButtonNavBarProps {
    label: string;
    rota: string;
    active: string;
}

export function ButtonNavBar({ label, rota, active }: ButtonNavBarProps) {

    const handleClick = () => {
        const section = document.getElementById(rota);
        if (section) {
            const top = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`${active === rota
                ? "text-amber-500 font-bold"
                : "text-stone-700 dark:text-white"
                } hover:text-amber-500 transition-colors`}
        >
            {label}
        </button>
    )
}