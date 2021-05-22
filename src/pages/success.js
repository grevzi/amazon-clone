import React from "react";
import Header from "../components/Header";
import {CheckCircleIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import {getSession} from "next-auth/client";
import Head from "next/head";

const success = ({session}) => {
    const router = useRouter()

    return (
        <div className="bg-gray-100 h-screen">
            <Head>
                <title>Success | Amazon 2.0</title>
            </Head>
            <Header/>
            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center space-x-2 mb-5">
                        <CheckCircleIcon className="text-green-500 h-10"/>
                        <h1 className="text-3xl ">Thank you, your order has been confirmed!</h1>
                    </div>

                    <p>
                        Thank you for shipping with us. We'll send a confirmation once your item has shipped, if you
                        would like to check the status of your order(s) please press the link below.
                    </p>

                    <button
                        type="button"
                        onClick={() => router.push("/orders")}
                        className="button mt-8">
                        Go to my orders
                    </button>
                </div>
            </main>
        </div>
    )
}

export default success


export async function getServerSideProps(context) {
    const session = await getSession(context)

    return {
        props: {
            session
        }
    }
}