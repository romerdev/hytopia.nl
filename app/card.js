export default function Card({children, type}) {
    let padding = 'px-8 md:px-16 py-8'
    
    if (type === 'small') {
        padding = 'px-4 md:px-8 py-4';
    }

    return (
        <section className={`z-10 bg-white rounded-lg border border-gray-200 shadow text-center flex flex-col justify-center items-center mx-3 w-fit max-w-lg ${padding}`}>
            {children}
        </section>
    );
};