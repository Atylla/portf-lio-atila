import { About } from "@/components/About/About";
import { Contato } from "@/components/Contato/Contato";
import { Header } from "@/components/Header/Header";
import { Homes } from "@/components/Homes/Homes";
import { Projetos } from "@/components/Projetos/Projetos";
import { Skills } from "@/components/Skills/Skills";


export default function Home() {
  return (
    <div className="m-0 bg-amber-50 dark:bg-stone-900">
      <Header />
      <div className="h-[5rem]"></div>
      <Homes />
      <About />
      <Skills />
      <Projetos />
      <Contato />
    </div>

  );
}
