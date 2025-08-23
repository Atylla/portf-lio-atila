export const openLink = (link: string) => {
    switch (link) {
        case 'linkedin':
            return window.open("https://linkedin.com", "_blank");
        case 'github':
            return window.open("https://github.com/Atylla", "_blank");
        case 'email':
            return window.open("https://gmail.com", "_blank");
        default:
            break;
    }
}