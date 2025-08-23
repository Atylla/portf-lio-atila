'use client'
import { useEffect, useState } from "react";

export function ToggleButtonMode() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else if (storedTheme === "light") {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDark(prefersDark);
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark", !isDark);
        localStorage.setItem("theme", !isDark ? "dark" : "light");
    }

    return (
        <button
            onClick={toggleTheme}
            className={`bg-amber-500 h-5 w-10 rounded-full relative transition-all duration-200 flex items-center px-1 hover:brightness-90 transition-filter `}
        >
            <div
                className={`bg-white h-4 w-4 rounded-full transition-transform duration-300 ${isDark ? "translate-x-4" : "translate-x-0"
                    }`}
            ></div>
        </button>
    );
}
