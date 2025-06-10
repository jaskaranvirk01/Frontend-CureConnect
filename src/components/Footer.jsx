import { assets } from "../assets/assets_frontend/assets"

const Footer = () => {
    return (
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                {/* --------Left side----------- */}
                <div>
                    <img className="mb-5 w-50" src={assets.logo} alt="Logo" />
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">Your health, your convenience. Our app simplifies scheduling doctor appointments, ensuring seamless access to medical care when you need it. With secure booking, instant confirmations, and timely reminders, we prioritize your well-being. Connect with trusted healthcare professionals and manage appointments effortlessly—all in one place. Experience hassle-free healthcare at your fingertips.
                    </p>
                </div>
                {/* --------Center----------- */}
                <div >
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/* --------Right side----------- */}
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+1-212-456-7890</li>
                        <li>jaskaranvirk0100@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/* COPYRIGHT */}
            <div>
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2025 @JaskaranVirk - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
