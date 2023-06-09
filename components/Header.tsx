import Image from "next/image"

export default function Header() {
    return (
        <header>



            <ul>
                <li>
                    <div className="relative h-10 w-10">
                        <Image src={"/apple-logo.png"} fill={true} alt="Apple Logo" />
                    </div>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>



        </header>
    )
}