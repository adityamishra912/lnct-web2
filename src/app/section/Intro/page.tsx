export default function Intro({ title }: { title: string }) {
    return (
        <section className="h-screen w-full overflow-hidden">
            <img className="object-cover h-full w-full inset-0" alt="Banner" src="/media/logoImage.png"/>
            {/* <video className="h-[100%] w-[100%] object-cover" autoPlay loop><source src="/media/homeVideo.mp4"></source></video> */}

            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"><h1 className="underline decoration-2 underline-offset-8 text-white text-6xl lg:text-9xl font-bold lg:font-normal font-sans text-shadow-[0_0_5px_black]">{ title }</h1></div>
        </section>
    )
}