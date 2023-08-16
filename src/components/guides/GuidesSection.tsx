import { GuideCardType } from "../../types/guideCard"
import GuideCard from "./GuideCard";

export default function GuidesSection() {

    const DUMMY_GUIDES: GuideCardType[] = [
        {
            title: 'Instant Setups',
            subtitle: 'Minutes to perfection',
            icon: 'aaaaaa',
        },
        {
            title: 'Dynamic Customization',
            subtitle: 'Unleash your creativity',
            icon: 'aaaaaa',
        },
        {
            title: 'Maximize Exposure',
            subtitle: 'Get noticed now',
            icon: 'aaaaaa',
        },
    ]


    return (
        <div className='min-h-full w-full py-4 relative'>
            <main className='max-w-[var(--max-content-width)] mx-auto z-20 relative'
            >

                {
                    DUMMY_GUIDES.map((guide: GuideCardType) => {
                        return <GuideCard DATA={guide} />;
                    })
                }

            </main>
        </div>
    )
}
