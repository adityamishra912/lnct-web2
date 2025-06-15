import Link from "next/link"

export default function Footer() {
    return (
        <div className="bg-black">
            <div className="mx-6 py-6 flex gap-6">

                <div className="flex flex-col">
                    <img src="/media/logo4.png" className="w-[150px]"/>
                    <hr className="border-1 border-solid border-white my-4"/>
                    <p className="text-[#aeb6bf] text-[10px]">Copyright © 2025 H.K. KALCHURI EDUCATION TRUST</p>
                </div>

                <div>
                    <h1 className="text-[18px] text-white my-4">Campuses</h1>
                    <ul className="text-[16px] text-[#aeb6bf] mx-2">
                        <li><a href="https://lnctu.ac.in/">LNCT University Bhopal</a></li>
                        <li><a href="https://www.jnctbhopal.ac.in/">JNCT Bhopal</a></li>
                        <li><a href="https://cecbilaspur.ac.in/">CEC Bilaspur</a></li>
                        <li><a href="https://lnctuj.com/">LNCT Jabalpur</a></li>
                        <li><a href="https://www.lnctworldschools.com/">LNCT World School</a></li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-[18px] text-white my-4">Quick Links</h1>
                    <ul className="text-[16px] text-[#aeb6bf] mx-2">
                        <li><Link href="/about/leadership">Leadership</Link></li>
                        <li><Link href="/about/eminent-faculty">Eminent Faculty</Link></li>
                        <li><Link href="/about/trust">Trust</Link></li>
                        <li><Link href="about/credo">Credo</Link></li>
                        <li><Link href="/about/IJNCT">International Journal</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}