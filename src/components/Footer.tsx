import concatClassNames from "../utils/ConcatClasses";
import FootrImage from '/src/assets/footer_graphic.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Footer() {
    return (
        <footer className={concatClassNames(
            'w-full min-h-[300px] mt-16',
            'flex flex-row items-center justify-center',
            'text-center text-white'
        )}>
            <main>
                <LazyLoadImage src={FootrImage} width={200} alt="footer grphic" />
                <p className="mt-4">&copy; 2023 <strong>CMSY</strong> LLC</p>
            </main>
        </footer>
    )
}
