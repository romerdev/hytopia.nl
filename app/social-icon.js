export default function SocialIcon({children, url}) {
    return (
        <a href={url} target="_blank" className="p-2 bg-emerald-500 transition-colors hover:bg-emerald-700 rounded-full block">
            {children}
        </a>
    );
};