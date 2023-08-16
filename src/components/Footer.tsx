import concatClassNames from "../utils/ConcatClasses";

export default function Footer() {
    return (
        <footer className={concatClassNames(
            'w-full min-h-[300px] mt-16',
            'flex flex-row items-center justify-center',
            'text-center text-white'
        )}>
            <main>
                <img src="src/assets/footer_graphic.webp" width={200} alt="footer grphic" />
                <p className="mt-4">&copy; 2023 <strong>CMSY</strong> LLC</p>
            </main>
        </footer>
    )
}
