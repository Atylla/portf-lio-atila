'use client'
import { useState } from "react";
import { ButtonNavBar } from "./ButtonNavBar/ButtonNavBar";
import { ToggleButtonMode } from "./ToggleButtonMode/ToggleButtonMode";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Header() {
    const sectionIds = ["home", "sobre", "skills", "projetos", "contato"];
    const activeSection = useActiveSection(sectionIds);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full h-[5rem] z-40 bg-amber-50 dark:bg-stone-900 shadow-sm flex justify-center items-center transition-colors duration-500">
            <div className="w-11/12 md:w-2/3 h-full flex justify-between items-center px-4 md:px-6">
                {/* Toggle de modo */}
                <ToggleButtonMode />

                {/* Menu desktop */}
                <nav className="hidden md:flex gap-7 items-center">
                    {sectionIds.map((id) => (
                        <ButtonNavBar key={id} label={id.charAt(0).toUpperCase() + id.slice(1)} rota={id} active={activeSection}/>
                    ))}
                </nav>

                {/* Botão menu mobile */}
                <button
                    className="md:hidden text-2xl text-black dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Menu mobile */}
            {isOpen && (
                <div className="absolute top-[5rem] left-0 w-full bg-amber-50 dark:bg-stone-900 flex flex-col items-center py-4 md:hidden shadow-md">
                    {sectionIds.map((id) => (
                        <ButtonNavBar
                            key={id}
                            label={id.charAt(0).toUpperCase() + id.slice(1)}
                            rota={id}
                            active={activeSection}
                            className="py-2"
                        />
                    ))}
                </div>
            )}
        </header>
    )
}
