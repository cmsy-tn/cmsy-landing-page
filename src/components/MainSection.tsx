import { LazyLoadImage } from 'react-lazy-load-image-component';
import img from '/src/assets/main_section_graphic.webp';
import lazyImg from '/src/assets/main_section_graphic_smaller.webp';

export default function MainSection() {
    return (
        <div className='mt-8 min-h-[500px] w-full py-4 relative'>
            <main className='max-w-[var(--max-content-width)] mx-auto z-20 relative'
            >
                <h3 className="uppercase text-lg mb-8 text-[var(--offset-text)]">Open source</h3>
                <h1 className='text-white text-6xl text-left font-["Limelight"] capitalize mb-8'>
                    watch CMSY being built live
                </h1>
                <iframe
                    width="100%"
                    height="470"
                    src="https://www.youtube-nocookie.com/embed/videoseries?list=PL0CvNBjIYw8V14E7sCcrkKjSyhl12JQsK"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </main>

            <LazyLoadImage
                src={img}
                placeholderSrc={lazyImg}
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
