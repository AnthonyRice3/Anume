import Image from "next/image"

export default function Cta() {

    const stats = [
        {
            data: "35K",
            title: "Customers"
        },
        {
            data: "10K+",
            title: "Downloads"
        },
        {
            data: "40+",
            title: "Countries"
        },
        {
            data: "30M+",
            title: "Total revenue"
        },
    ]

    return (
        <section className="py-14 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-400 gap-x-12 items-start justify-between lg:flex md:px-8">
                
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                    <div className="max-w-2xl">
                        <h3 className="text-gray-200 text-3xl font-semibold sm:text-4xl">
                            We Do Our Best To Make Our Customers Happy
                        </h3>
                        <p className="mt-3 max-w-xl">
                            We pride ourselves on our customer service and our ability to provide the best products at the best prices. Our customers are our top priority, and we will do everything we can to make sure they are happy. The numbers represent our success in achieving this goal.
                        </p>
                    </div>
                    <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                        <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                            {
                                stats.map((item, idx) => (
                                    <li key={idx} className="">
                                        <h4 className="text-4xl text-slate-200 font-semibold">{item.data}</h4>
                                        <p className="mt-3 font-medium text-red-400">{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="sm:hidden lg:block lg:max-w-xl">
                    <Image src="/water3.png" className="rounded-lg pt-4" alt="" width={350} height={350}/>
                </div>
            </div>
        </section>
    )
}