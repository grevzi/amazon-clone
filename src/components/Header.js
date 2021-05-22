import React from "react";
import Image from "next/image"
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import {signIn, signOut, useSession} from 'next-auth/client'
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectGroupedItems, selectItemsCount} from "../slices/basketSlice";

const Header = props => {
    const [session] = useSession()
    const rooter = useRouter()
    const itemsCount = useSelector(selectItemsCount)
    const itemsGroped = useSelector(selectGroupedItems)
    console.log(itemsCount, itemsGroped);

    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <button type="button" onClick={() => rooter.push('/')} className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </button>

                <div
                    className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input type="text"
                           className="p-2 w-6 flex-grow rounded-l-md focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-opacity-50"/>
                    <SearchIcon className="h-12 p-4"/>
                </div>

                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div  onClick={session ? signOut : signIn} className="link">
                        <p>
                            {session ? `Hello, ${session.user.name}` : 'Login'}
                        </p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div onClick={() => session && rooter.push('/orders')} className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <button type="button" onClick={() => rooter.push('/checkout')} className="relative link flex items-center">
                        <span
                            className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{itemsCount}</span>

                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
                    </button>
                </div>
            </div>

            <ul className="list-none p-2 pl-6 m-0 flex items-center space-x-3 bg-amazon_blue-light text-white text-sm">
                <li className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </li>
                <li className="link">
                    Prime Video
                </li>
                <li className="link">
                    Amazon Business
                </li>
                <li className="link">
                    Today's Deals
                </li>
                <li className="link hidden lg:inline-flex">
                    Electronics
                </li>
                <li className="link hidden lg:inline-flex">
                    Food & Grocery
                </li>
                <li className="link hidden lg:inline-flex">
                    Prime
                </li>
                <li className="link hidden lg:inline-flex">
                    Buy Again
                </li>
                <li className="link hidden lg:inline-flex">
                    Health & Personal Care
                </li>
            </ul>

        </header>
    )
}

export default Header