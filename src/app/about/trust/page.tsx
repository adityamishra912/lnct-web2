import Navbar from "@/app/component/Navbar/Navbar"

export default function trust() {
    return (
        <div>
            <Navbar />
            <section className="h-screen w-full overflow-hidden">
                <img
                    className="object-cover h-full w-full inset-0"
                    alt="Banner"
                    src="/media/bg4.jpg"
                />
            </section>

            <section className="flex flex-col items-center mb-4">
                <h1 className="text-3xl font-bold m-4">H.K. Kalruchi Education Trust</h1>

                <h1 className="text-2xl font-bold m-4">Managing Trustee</h1>
                <table className="border-1 border-solid border-black border-collapse mx-4 w-[80%]">
                    <thead>
                        <tr className="h-12">
                            <th className="border-1 border-solid border-black">Designation</th>
                            <th className="border-1 border-solid border-black">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Chairman and Managing Trustee of LNCT Group</td>
                            <td className="border-1 border-solid border-black">Shri Jai Narayan Chouksey</td>
                        </tr>
                    </tbody>
                </table>

                <h1 className="text-2xl font-bold m-4">Trustees</h1>
                <table className="border-1 border-solid border-black border-collapse mx-4 w-[80%]">
                    <thead>
                        <tr className="h-12">
                            <th className="border-1 border-solid border-black">Designation</th>
                            <th className="border-1 border-solid border-black">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Vice-Chairperson, LNCT Group, Bhopal</td>
                            <td className="border-1 border-solid border-black">Smt. Poonam Chouksey</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Secretary LNCT Group, Bhopal</td>
                            <td className="border-1 border-solid border-black">Dr. Anupam Chouksey</td>
                        </tr>
                        
                    </tbody>
                </table>

            </section>


        </div>
    )
}