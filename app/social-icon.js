export default function SocialIcon({children, url, name}) {
    return (
        <a href={url} target="_blank" aria-label={`Follow Hytopia on ${name}`} className="p-2 bg-emerald-700 transition-colors hover:bg-emerald-800 rounded-full block">
            {children}
        </a>
    );
};