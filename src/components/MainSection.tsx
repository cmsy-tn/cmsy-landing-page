export default function MainSection() {
    return (
        <div className='mt-8 min-h-[500px] w-full py-4 relative'>
            <main className='max-w-[var(--max-content-width)] mx-auto z-20 relative'
            >
                <h3 className="uppercase text-lg mb-8 text-[var(--offset-text)]">Unleash</h3>
                <h1 className='text-white text-6xl text-left font-["Limelight"] capitalize'>
                    Create extraordinary portfolios with CMSY in minutes.
                </h1>
            </main>

            <img
                src="/src/assets/main_section_graphic.webp"
                alt="hero section backgrond"
                style={{
                    display: 'block',
                    width: '600px',
                    position: "absolute",
                    right: '0',
                    top: "0",
                    zIndex: 1,
                }}
            />
        </div>
    )
}
