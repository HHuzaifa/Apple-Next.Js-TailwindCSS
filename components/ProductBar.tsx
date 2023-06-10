import Image from "next/image"
import Wrapper from "./Wrapper"

export default function ProductBar() {
    return (
        <Wrapper>
        <div className="flex flex-col items-center">




            <ul className="grid grid-cols-3 gap-8">
                <li className="relative w-16 h-16">
                    <Image src={"/product-bar-images/pbar1.png"} fill={true} alt="product category image" />
                </li>
                <li className="relative w-16 h-16">
                    <Image src={"/product-bar-images/pbar2.png"} fill={true} alt="product category image" />
                </li>
                <li className="relative w-16 h-16">
                    <Image src={"/product-bar-images/pbar3.png"} fill={true} alt="product category image" />
                </li>
                <li className="relative w-16 h-16">
                    <Image src={"/product-bar-images/pbar4.png"} fill={true} alt="product category image" />
                </li>
                <li className="relative w-14 h-16">
                    <Image src={"/product-bar-images/pbar5.png"} fill={true} alt="product category image" />
                </li>
                <li className="relative w-16 h-16">
                    <Image src={"/product-bar-images/pbar6.png"} fill={true} alt="product category image" />
                </li>
            </ul>




        </div>
        </Wrapper>
    )
}