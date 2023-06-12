import Wrapper from "./Wrapper"

export default function ProductBar() {
    return (
        <Wrapper>
        <div className="flex flex-col items-center mt-28 lg:mt-0">




            <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-x-5 gap-y-5 md:gap-9 md:gap-x-10">
                <img className="w-20 h-20" src="/pbImages/pbar1.png" alt="Product Image"></img>
                <img className="w-20 h-20" src="/pbImages/pbar2.png" alt="Product Image"></img>
                <img className="w-20 h-20" src="/pbImages/pbar3.png" alt="Product Image"></img>
                <img className="w-20 h-20" src="/pbImages/pbar4.png" alt="Product Image"></img>
                <img className="w-20 h-20" src="/pbImages/pbar5.png" alt="Product Image"></img>
                <img className="w-16 h-20" src="/pbImages/pbar6.png" alt="Product Image"></img>
            </ul>




        </div>
        </Wrapper>
    )
}