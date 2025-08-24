const handleClick = () => {
    const section = document.getElementById('contato');
    if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    }
};

export const openLink = (link: string) => {
    switch (link) {
        case 'linkedin':
            return window.open("https://www.linkedin.com/in/atila-souza-de-araujo-4845a3187/", "_blank");
        case 'github':
            return window.open("https://github.com/Atylla", "_blank");
        case 'email':
            return handleClick();
        case 'instagram':
            return window.open("https://www.instagram.com/atila.raujo?igsh=a2k5bmpwMzBnY2gy", "_blank");
        default:
            break;
    }
}