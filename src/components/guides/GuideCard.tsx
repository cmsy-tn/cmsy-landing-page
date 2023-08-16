/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdArrowForwardIos } from "react-icons/md";
import concatClassNames from "../../utils/ConcatClasses";

export default function GuideCard({ DATA }: any) {
    return (
        <div className={concatClassNames(
            'w-full h-[110px] pl-2 pr-8 my-4 rounded-[6rem] bg-[var(--offset-color)]',
            'flex flex-row items-center justify-between'
        )}>
            <div className="content flex flex-row items-center">
                <div className="icon w-[100px] h-[100px] rounded-[50%] bg-yellow-400">
                    {/* @TODO set the icon as a abackground image for this div */}
                    {/* <img src={DATA.icon} alt="guide_icon" /> */}
                </div>
                <div className="text ml-8">
                    <h1 className='font-["Space_Grotesk"] font-bold text-xl text-[var(--secondary-color)]'>{DATA.title}</h1>
                    <h3 className='font-["Space_Grotesk"] text-sm text-[var(--secondary-color)]'>{DATA.subtitle}</h3>
                </div>
            </div>
            <div className="arrow text-[var(--secondary-color)]"> <MdArrowForwardIos /> </div>
        </div>
    )
}
