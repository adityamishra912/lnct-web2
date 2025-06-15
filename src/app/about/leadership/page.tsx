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

                <h1 className="text-2xl font-bold m-4">Principal/Director/Dean</h1>

                <table className="border-1 border-solid border-black border-collapse mx-4 w-[80%]">
                    <thead>
                        <tr className="h-12">
                            <th className="border-1 border-solid border-black">Designation</th>
                            <th className="border-1 border-solid border-black">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Principal &#40;LNCT&#41;</td>
                            <td className="border-1 border-solid border-black">Dr. VINAY KUMAR SAHU</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Principal &#40;LNCTS&#41;</td>
                            <td className="border-1 border-solid border-black">Dr. VISHVENDRA NATH BARTARIA</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Principal &#40;LNCTE&#41;</td>
                            <td className="border-1 border-solid border-black">Dr. ANIL K. SAXENA</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Principal &#40;LNCP&#41;</td>
                            <td className="border-1 border-solid border-black">Dr. Mehta Parulben D.</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Director Administration</td>
                            <td className="border-1 border-solid border-black">Dr. ASHOK KUMAR RAI</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Group Director &#40;T&P&#41;</td>
                            <td className="border-1 border-solid border-black">Dr. ANUJ GARG</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Group Director &#40;R&D&#41;</td>
                            <td className="border-1 border-solid border-black">Dr. ABHINEET A GOYAL</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Director &#40;MBA&#41;</td>
                            <td className="border-1 border-solid border-black">Prof. &#40;Dr.&#41; ARVIND SINGH</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Director &#40;MCA&#41;</td>
                            <td className="border-1 border-solid border-black">Dr. SANJAY BAJPAI</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Dean &#40;Student Welfare&#41;</td>
                            <td className="border-1 border-solid border-black">Dr. AMIT SHRIVASTAVA</td>
                        </tr>
                    </tbody>
                </table>

            </section>

        </div>
    )
}