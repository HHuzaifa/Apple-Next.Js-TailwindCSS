
export default function Footer() {
    return (
        <section className="w-full flex-col justify-center bg-black">
                <div className="w-full flex flex-col items-center lg:flex-row justify-around gap-x-96">
                    <div className="flex text-white text-xl lg:text-2xl space-x-5 pb-3 lg:pb-0">
                        <img className="w-8" src="appleLogoWhite.png" ></img>
                    </div>
                    <h6 className="text-white">© 2023 Apple. All rights reserved</h6>
                </div>
        </section>
    )
}