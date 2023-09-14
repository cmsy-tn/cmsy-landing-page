import concatClassNames from "../utils/ConcatClasses";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img from '/src/assets/footer_graphic.webp';
import lazyImg from '/src/assets/footer_graphic_smaller.webp';

export default function Footer() {
    return (
        <footer className={concatClassNames(
            'w-full min-h-[300px] mt-16',
            'flex flex-row items-center justify-center',
            'text-center text-white'
        )}>
            <main>
                <LazyLoadImage src={img} placeholderSrc={lazyImg} width={200} alt="footer grphic" />
                <p className="mt-4">&copy; 2023 <strong>CMSY</strong> LLC</p>
            </main>
        </footer>
    )
}
