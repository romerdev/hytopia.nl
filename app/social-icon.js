export default function SocialIcon({children, url, name}) {
    return (
        <a href={url} target="_blank" aria-label={`Follow Hytopia on ${name}`} className="p-2 bg-emerald-700 transition-transform hover:scale-105 rounded-full block">
            {children}
        </a>
    );
};