export default function eminentfaculty() {
    return (
        <div>
            <section className="h-screen w-full overflow-hidden">
                <img
                    className="object-cover h-full w-full inset-0"
                    alt="Banner"
                    src="/media/bg3.jpg"
                />
            </section>
            <section className="flex flex-col items-center mb-4">
                <h1 className="text-2xl font-bold m-4">Eminent Faculty</h1>

                <table className="border-1 border-solid border-black border-collapse mx-4 w-[80%]">
                    <thead>
                        <tr className="h-12">
                            <th className="border-1 border-solid border-black">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Dr. ASHOK KUMAR RAI</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Prof. &#40;Dr.&#41; ARVIND SINGH</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Dr. LISHA KURUP</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Dr. SACHIN TIWARI</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Dr. VIRENDRA KUMAR TIWARI</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Dr. YOGESH DEWANG</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Dr. ABHILASHA SINGH</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Dr. SANTOSH SOLANKI</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Dr. SANJEET KUMAR</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border-1 border-solid border-black">Dr. VARSHA PARMAR</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}