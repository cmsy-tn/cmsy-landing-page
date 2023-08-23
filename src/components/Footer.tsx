import concatClassNames from "../utils/ConcatClasses";
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Footer() {
    const image = {
        src: '/src/assets/footer_graphic.webp',
        lowResSrc: '/src/assets/footer_graphic_smaller.webp'
    }
    return (
        <footer className={concatClassNames(
            'w-full min-h-[300px] mt-16',
            'flex flex-row items-center justify-center',
            'text-center text-white'
        )}>
            <main>
                <LazyLoadImage src={image.src} placeholderSrc={image.lowResSrc} width={200} alt="footer grphic" />
                <p className="mt-4">&copy; 2023 <strong>CMSY</strong> LLC</p>
            </main>
        </footer>
    )
}
