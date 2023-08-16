import styled from "styled-components"
import { FAQType } from "../../types/faq";
import FAQCard from "./FAQCard";

export default function FAQSection() {

    const DUMMY_FAQ: FAQType[] = [
        { question: "Self-hosted or SAAS?", answer: "Choose what works for you – we offer both a SAAS platform or self-hosted options to suit your needs." },
        { question: "How customizable is it?", answer: "CMSY offers an extensive range of design options and features to truly make your portfolio your own." },
        { question: "Can I switch plans?", answer: "Absolutely! You can switch between our plans anytime, ensuring you always have the perfect fit." },
    ];

    return (
        <div className='min-h-full w-full py-4 relative'>
            <main className='max-w-[var(--max-content-width)] mx-auto z-20 relative text-center'>
                <h1 className='capitalize text-white text-6xl text-left font-["Limelight"] my-16'>questions?</h1>
                <FAQGridLayout>
                    {
                        DUMMY_FAQ.map((faq: FAQType) => {
                            return <FAQCard DATA={faq} />
                        })
                    }
                </FAQGridLayout>

            </main>
        </div >
    )
}

const FAQGridLayout = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;