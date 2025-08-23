'use client'
import { ButtonNavBar } from "./ButtonNavBar/ButtonNavBar";
import { ToggleButtonMode } from "./ToggleButtonMode/ToggleButtonMode";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Header() {
    const sectionIds = ["home", "sobre", "skills", "projetos", "contato"];
    const activeSection = useActiveSection(sectionIds);

    return (
        <header className="fixed top-0 w-full h-[5rem] z-50 bg-amber-50 dark:bg-stone-900 shadow-sm flex justify-center items-center transition-colors duration-500">
            <div className="w-2/3 h-full flex justify-between items-center px-6">
                <ToggleButtonMode />
                <nav className="flex gap-7 items-center">
                    <ButtonNavBar label="Home" rota="home" active={activeSection}/>
                    <ButtonNavBar label="Sobre" rota="sobre" active={activeSection}/>
                    <ButtonNavBar label="Skills" rota="skills" active={activeSection}/>
                    <ButtonNavBar label="Projetos" rota="projetos" active={activeSection}/>
                    <ButtonNavBar label="Contato" rota="contato" active={activeSection}/>
                </nav>
            </div>
        </header>
    )
}