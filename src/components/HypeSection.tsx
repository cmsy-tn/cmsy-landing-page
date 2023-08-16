import concatClassNames from '../utils/ConcatClasses'

export default function HypeSection() {
    return (
        <div className='min-h-full w-full py-4 relative'>
            <main className='max-w-[var(--max-content-width)] mx-auto z-20 relative text-center'>

                <h1 className='capitalize  text-[4.5rem] text-[var(--secondary-color)] font-["Limelight"] font-bold'>Ready, Set</h1>
                <p className='font-["Space_Grotesk"] text-[var(--secondary-color)] text-base max-w-[500px] mx-auto my-8'>It's time to flaunt your work like never before. Take charge of your portfolio, and let CMSY do the hard work.</p>
                <button className={concatClassNames(
                    'p-4 bg-[var(--offset-text)] rounded-lg',
                    'text-[var(--offset-color)] text-sm font-["Space_Grotesk"]'
                )}>get started</button>

            </main>
        </div>
    )
}



// font-["Space_Grotesk"] font-bold text-xl text-[var(--secondary-color)]