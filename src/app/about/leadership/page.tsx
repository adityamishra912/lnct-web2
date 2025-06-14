import Navbar from "@/app/component/Navbar/Navbar";

export default function leadership() {
    return (
        <div>
            <Navbar />
            <section className="h-screen w-full overflow-hidden">
                <img
                    className="object-cover h-full w-full inset-0"
                    alt="Banner"
                    src="/media/bg2.jpg"
                />
            </section>

            <section className="flex flex-col items-center mb-4">
                <h1 className="text-2xl font-bold m-4">Chancellor</h1>

                <table className="border-1 border-solid border-black border-collapse mx-4 w-[80%]">
                    <thead>
                        <tr className="h-12">
                            <th className="border-1 border-solid border-black">Designation</th>
                            <th className="border-1 border-solid border-black">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Chancellor &#40;LNCT University&#41;</td>
                            <td className="border-1 border-solid border-black">Shri Jay Narayan Chouksey</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Chancellor &#40;LNCT Vidyapeeth University&#41;</td>
                            <td className="border-1 border-solid border-black">Smt. Poonam Chouksey</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Chancellor &#40;JNCT Professional University&#41;</td>
                            <td className="border-1 border-solid border-black">Dr Anupam Chouksey</td>
                        </tr>
                    </tbody>
                </table>

                <h1 className="text-2xl font-bold m-4">Ofiicer on Special Duty &#40;OSD&#41;</h1>

                <table className="border-1 border-solid border-black border-collapse mx-4 w-[80%]">
                    <thead>
                        <tr className="h-12">
                            <th className="border-1 border-solid border-black">Designation</th>
                            <th className="border-1 border-solid border-black">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Group OSD</td>
                            <td className="border-1 border-solid border-black">Dr. SUNIL KUMAR SINGH</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">OSD &#40;LNCTS&#41;</td>
                            <td className="border-1 border-solid border-black">Dr. AMITBODH UPADHYAYA</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">OSD &#40;LNCTE&#41;</td>
                            <td className="border-1 border-solid border-black">Ms. Usha Singh</td>
                        </tr>
                    </tbody>
                </table>

                <h1 className="text-2xl font-bold m-4">Principal</h1>

                <table className="border-1 border-solid border-black border-collapse mx-4 w-[80%]">
                    <thead>
                        <tr className="h-12">
                            <th className="border-1 border-solid border-black">Designation</th>
                            <th className="border-1 border-solid border-black">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">OSD &#40;LNCTS&#41;</td>
                            <td className="border-1 border-solid border-black">Dr. SUNIL KUMAR SINGH</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">OSD &#40;LNCTS&#41;</td>
                            <td className="border-1 border-solid border-black">Dr. AMITBODH UPADHYAYA</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">OSD &#40;LNCTE&#41;</td>
                            <td className="border-1 border-solid border-black">Ms. Usha Singh</td>
                        </tr>
                    </tbody>
                </table>

            </section>

        </div>
    )
}