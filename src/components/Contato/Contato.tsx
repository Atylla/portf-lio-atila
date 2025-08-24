export function Contato() {
    return (
        <section
            id="contato"
            className="flex flex-col items-center md:min-h-[calc(100vh-5rem)] min-h-[calc(100vh-20rem)] px-6 md:px-16 py-12 bg-gradient-to-br from-stone-100 to-stone-400 dark:from-stone-800 dark:to-stone-950 transition-colors duration-500"
        >
            <h1 className="text-3xl md:text-5xl font-bold text-stone-900 dark:text-stone-50 mb-10 shinyText">
                Contato
            </h1>

            <form
                id="contact-form"
                action="https://formspree.io/f/xdkdjwjg"
                method="POST"
                className="w-full max-w-lg p-8 flex flex-col gap-6"
            >
                <div className="relative">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder=" "
                        required
                        className="peer w-full border-b border-l border-stone-700 bg-transparent px-3 pt-5 pb-2 text-stone-900 dark:text-stone-50 
                            focus:border-amber-500 focus:ring-0 outline-none transition
                            valid:border-amber-500"
                    />

                    <label
                        htmlFor="name"
                        className="absolute left-3 top-1 text-stone-500 dark:text-stone-400 text-sm transition-all 
             peer-placeholder-shown:top-4 peer-placeholder-shown:text-stone-400 peer-placeholder-shown:text-base 
             peer-focus:-top-1 peer-focus:text-sm peer-focus:text-amber-500
             peer-valid:-top-1 peer-valid:text-sm peer-valid:text-amber-500"
                    >
                        Nome
                    </label>
                </div>

                <div className="relative">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        required
                        className="peer w-full border-b border-l border-stone-700 bg-transparent px-3 pt-5 pb-2 text-stone-900 dark:text-stone-50 
                            focus:border-amber-500 focus:ring-0 outline-none transition
                            valid:border-amber-500"
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-3 top-1 text-stone-500 dark:text-stone-400 text-sm transition-all 
             peer-placeholder-shown:top-4 peer-placeholder-shown:text-stone-400 peer-placeholder-shown:text-base 
             peer-focus:-top-1 peer-focus:text-sm peer-focus:text-amber-500
             peer-valid:-top-1 peer-valid:text-sm peer-valid:text-amber-500"
                    >
                        E-mail
                    </label>
                </div>

                <div className="relative">
                    <textarea
                        id="message"
                        name="message"
                        placeholder=" "
                        rows={5}
                        required
                        className="peer w-full border-b border-l border-stone-700 bg-transparent px-3 pt-5 pb-2 text-stone-900 dark:text-stone-50 
                            focus:border-amber-500 focus:ring-0 outline-none transition
                            valid:border-amber-500"
                    />
                    <label
                        htmlFor="message"
                        className="absolute left-3 top-1 text-stone-500 dark:text-stone-400 text-sm transition-all 
             peer-placeholder-shown:top-4 peer-placeholder-shown:text-stone-400 peer-placeholder-shown:text-base 
             peer-focus:-top-1 peer-focus:text-sm peer-focus:text-amber-500
             peer-valid:-top-1 peer-valid:text-sm peer-valid:text-amber-500"
                    >
                        Mensagem
                    </label>
                </div>

                <button
                    type="submit"
                    className="self-center w-1/3 mt-4 py-3 px-6 font-semibold border-l border-r border-stone-700  hover:border-amber-500 hover:text-amber-500 text-black dark:text-white hover:shadow-lg transition transform hover:-translate-y-0.5"
                >
                    Enviar
                </button>
            </form>
        </section>
    )
}
