/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FAQCard({ DATA }: any) {
    return (
        <div className="w-full text-left text-white">
            <h3 className="text-lg font-bold">{DATA.question}</h3>
            <p className="text-base mt-4">{DATA.answer}</p>
        </div>
    )
}
