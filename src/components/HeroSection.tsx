import concatClassNames from "../utils/ConcatClasses";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img from '/src/assets/hero_section_graphic.webp';
import lazyImg from '/src/assets/hero_section_graphic_smaller.webp';

export default function HeroSection() {
    return (
        <div className={concatClassNames(
            'h-[100vh] w-full',
            'flex flex-row items-center justify-center',
            'relative'
        )}>

            <LazyLoadImage
                src={img}
                placeholderSrc={lazyImg}
                alt="hero section backgrond"
                style={{
                    zIndex: 2,
                    width: '40%',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            />

            <main className="max-w-[var(--max-content-width)] mx-auto z-20">
                <h1 className={concatClassNames(
                    'text-white text-[6vw] text-center font-["Limelight"] capitalize'
                )}
                >
                    revolutionize your portfolio game
                </h1>
            </main>

        </div>
    )
}
