import { ButtonNavBar } from "./ButtonNavBar/ButtonNavBar";
import { ToggleButtonMode } from "./ToggleButtonMode/ToggleButtonMode";

export function Header() {
    return (
        <header className="fixed top-0 w-full h-[5rem] z-50 bg-amber-50 dark:bg-stone-900 shadow-sm flex justify-center items-center transition-colors duration-500">
            <div className="w-2/3 h-full flex justify-between items-center px-6">
                <ToggleButtonMode />
                <nav className="flex gap-7 items-center">
                    <ButtonNavBar label="Home" rota="home" />
                    <ButtonNavBar label="Sobre" rota="sobre" />
                    <ButtonNavBar label="Skills" rota="skills" />
                    <ButtonNavBar label="Projetos" rota="projetos" />
                    <ButtonNavBar label="Contato" rota="contato" />
                </nav>
            </div>
        </header>
    )
}