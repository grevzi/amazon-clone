import React from "react";
import Image from "next/image";

const Footer = props => {
    return (
        <div className="bg-amazon_blue-light w-full">

            <div className="py-12 max-w-screen-xl mx-auto text-gray-200 px-4 grid md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <p className="font-bold text-lg text-white">Get to Know Us</p>
                    <ul className="list-none p-0 m-0">
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Careers
                            </a>
                        </li>
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Blog
                            </a>
                        </li>
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Investor Relations
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold text-lg text-white">Make Money with Us</p>
                    <ul className="list-none p-0 m-0">
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Sell products on Amazon
                            </a>
                        </li>
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Sell on Amazon Business
                            </a>
                        </li>
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Sell apps on Amazon
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold text-lg text-white">Amazon Payment Products</p>
                    <ul className="list-none p-0 m-0">
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Amazon Business Card
                            </a>
                        </li>
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Shop with Points
                            </a>
                        </li>
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Reload Your Balance
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold text-lg text-white">Let Us Help You</p>
                    <ul className="list-none p-0 m-0">
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Your Account
                            </a>
                        </li>
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Your Orders
                            </a>
                        </li>
                        <li className="link py-1">
                            <a className="focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-origin-90" href="/">
                                Shipping Rates & Policies
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-solid border-gray-600 p-10 flex items-center">
                <div className="max-w-screen-md mx-auto">
                    <Image
                        src="https://links.papareact.com/f90"
                        width={120}
                        height={30}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
            </div>

        </div>
    )
}

export default Footer