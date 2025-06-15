import Navbar from "@/app/component/Navbar/Navbar";

export default function hostels() {
    return (
        <div>
            <Navbar />
            <section className="h-screen w-full overflow-hidden">
                <img
                    className="object-cover h-full w-full inset-0"
                    alt="Banner"
                    src="/hostel/hostel5.jpg"
                />
            </section>

            <h1 className="text-6xl m-4 underline underline-offset-6 decoration-3 text-center">Hostels</h1>

            <p className="m-6">College has one Boys and one Girls hostel. All required facilities for comfortable stay is available in hostel for students. Both are situated in the College campus. There are various facilities in hostels like &#45; canteen, public phone, cold drinking water, hot water for bath, etc. For entertainment the T.V. sets are available in recreation halls. However, viewing time is pre-defined. In Campus Dispensary Facility is available for Hostelers. A Doctor visits the hostel, twice a week to conduct medical check&#45;up. Hostel accommodation is allotted to students strictly on merit basis during the first year.</p>

            <section className="grid grid-cols-1 grid-rows-5">

                <article>
                    <div className="bg-black lg:h-[280px] w-[80vw] overflow-visible relative py-4 rounded-[0_16px_16px_0] my-6">
                        <h1 className="text-white font-bold text-2xl text-center my-6">Ratanpur Boys&#39; Hostel</h1>
                        <div className="w-[200px] h-[200px] justify-self-center lg:absolute lg:right-0 lg:top-[50%] lg:translate-x-[50%] lg:-translate-y-[50%] rounded-xl"><img src="/hostel/hostel1.jpg" className="h-full w-full object-cover rounded-xl" /></div>
                        <div className="mx-6 my-6 lg:my-0 lg:w-[calc(100%-180px)]"><p className="text-white">Ratanpur is one of the oldest and most well-known boys&#39; hostels at LNCT, located within the main campus. It offers double and triple-occupancy rooms with both AC and non-AC options. The rooms are furnished with study tables, wardrobes, beds, and attached or shared washrooms. Students benefit from 24x7 Wi-Fi, indoor games, laundry services, a common TV lounge, and access to open&#45;air theatres. It maintains strict discipline with set curfews, a vegetarian mess, and regular health checkups.</p></div>
                    </div>
                </article>

                <article>
                    <div className="bg-black lg:h-[280px] w-[80vw] overflow-visible relative py-4 rounded-[16px_0_0_16px] float-right my-6">
                        <h1 className="text-white font-bold text-2xl text-center my-6">Tripuri Boys&#39; Hostel</h1>
                        <div className="w-[200px] h-[200px] justify-self-center lg:absolute lg:left-0 lg:top-[50%] lg:-translate-x-[50%] lg:-translate-y-[50%] rounded-xl"><img src="/hostel/hostel2.jpg" className="h-full w-full object-cover rounded-xl" /></div>
                        <div className="mx-6 my-6 lg:my-0 lg:w-[calc(100%-180px)] float-right"><p className="text-white">Tripuri Hostel is another key boys&#39; residence on the LNCT campus, similar in facilities to Ratanpur but slightly newer in layout. It also offers well&#45;furnished double/triple sharing rooms with basic amenities and either attached or shared bathrooms. The hostel promotes a focused academic environment with regular study hours, campus security, gym access, and sports facilities. It shares the same dining and medical arrangements as the Ratanpur hostel, maintaining a curfew and strict rules on hostel conduct.</p></div>
                    </div>
                </article>

                <article>
                    <div className="bg-black lg:h-[280px] w-[80vw] overflow-visible relative py-4 rounded-[0_16px_16px_0] my-6">
                        <h1 className="text-white font-bold text-2xl text-center my-6">New Boys&#39; Hostel</h1>
                        <div className="w-[200px] h-[200px] justify-self-center lg:absolute lg:right-0 lg:top-[50%] lg:translate-x-[50%] lg:-translate-y-[50%] rounded-xl"><img src="/hostel/hostel3.jpg" className="h-full w-full object-cover rounded-xl" /></div>
                        <div className="mx-6 my-6 lg:my-0 lg:w-[calc(100%-180px)]"><p className="text-white">The New Boys&#39; Hostel caters to growing student intake and features upgraded infrastructure. It offers modern rooms with better ventilation, enhanced furniture, and the choice between AC and non&#45;AC living spaces. Located within close proximity to academic blocks, it provides access to high-speed internet, recreational areas, and sports grounds. Like other hostels, it follows LNCT&#39;s standard discipline policy with curfews, visitor restrictions, and in-house healthcare support. It&#39;s popular among first-year and merit&#45;based students.</p></div>
                    </div>
                </article>

                <article>
                    <div className="bg-black lg:h-[280px] w-[80vw] overflow-visible relative py-4 rounded-[16px_0_0_16px] float-right my-6">
                        <h1 className="text-white font-bold text-2xl text-center my-6">Mahishmati Girls&#39; Hostel</h1>
                        <div className="w-[200px] h-[200px] justify-self-center lg:absolute lg:left-0 lg:top-[50%] lg:-translate-x-[50%] lg:-translate-y-[50%] rounded-xl"><img src="/hostel/hostel4.jpg" className="h-full w-full object-cover rounded-xl" /></div>
                        <div className="mx-6 my-6 lg:my-0 lg:w-[calc(100%-180px)] float-right"><p className="text-white">Mahishmati is a flagship girls&#39; hostel at LNCT, known for its strong security, hygienic environment, and student&#45;focused support. It offers both double and triple&#45;occupancy rooms with attached bathrooms in most units. The hostel includes high&#45;speed Wi&#45;Fi, indoor activity zones, a TV lounge, and gym facilities. Curfews are strictly enforced &#40;typically earlier than boys’ hostels&#41;, and the mess serves vegetarian meals in a clean dining hall. It&#39;s favored for its peaceful environment and regular medical visits by female doctors.</p></div>
                    </div>
                </article>

                <article>
                    <div className="bg-black lg:h-[280px] w-[80vw] overflow-visible relative py-4 rounded-[0_16px_16px_0] my-6">
                        <h1 className="text-white font-bold text-2xl text-center my-6">Kalakunj Girls&#39; Hostel</h1>
                        <div className="w-[200px] h-[200px] justify-self-center lg:absolute lg:right-0 lg:top-[50%] lg:translate-x-[50%] lg:-translate-y-[50%] rounded-xl"><img src="/hostel/hostel5.jpg" className="h-full w-full object-cover rounded-xl" /></div>
                        <div className="mx-6 my-6 lg:my-0 lg:w-[calc(100%-180px)]"><p className="text-white">Kalakunj Hostel is another prominent residential option for female students, offering a well-maintained and secure living space. Rooms come with standard furnishings&#45;beds, study desks, storage&#45;available in both AC and non&#45;AC configurations. Shared and attached bathroom options exist depending on room type. Kalakunj promotes a safe and comfortable lifestyle with 24/7 security, clean surroundings, structured schedules, and access to recreation and fitness areas. The mess caters to healthy vegetarian diets, and rules are enforced through regular inspections and curfew protocols.</p></div>
                    </div>
                </article>

            </section>

        </div>
    )
}