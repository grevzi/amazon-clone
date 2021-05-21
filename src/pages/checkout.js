import Header from "../components/Header";
import Image from "next/image";
import {useSelector} from "react-redux";
import {selectGroupedItems, selectItemsCount, selectItemsTotal} from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import React from "react";
import {useSession} from "next-auth/client";

const Checkout = () => {
    const itemsGroped = useSelector(selectGroupedItems)
    const itemsCount = useSelector(selectItemsCount)
    const itemsTotal = useSelector(selectItemsTotal)
    const [session] = useSession()

    return (
        <div className="bg-gray-100">
            <Header/>
            <main className="lg:flex max-w-screen-2xl mx-auto">

                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />

                    <section className="flex flex-col p-5 space-y-2 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {!itemsCount ? 'Your basket is empty' : 'Your Shopping Basket'}
                        </h1>

                        {
                            Object.keys(itemsGroped).map((group, index) => (
                                <div key={index} className="flex flex-col p-5 space-y-4">
                                    <p className="mb-2 py-2 text-lg">{group.toUpperCase()}</p>

                                    {itemsGroped[group].map((item, i) => (<CheckoutProduct key={i}  {...item} />))}
                                </div>
                            ))
                        }
                    </section>
                </div>

                <div className="flex flex-col bg-white p-10 shadow-md">
                    {itemsCount > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">
                                Sub Total ({itemsCount}) items
                                <span className="font-bold">
                                    <Currency quantity={itemsTotal} currency="GBP"/>
                                </span>
                            </h2>

                            <button
                                disabled={!session}
                                type="button"
                                className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session ? 'Sign In  to Checkout' : 'Proceed to Checkout'}
                            </button>
                        </>
                    )}
                </div>

            </main>
        </div>
    )
}

export default Checkout