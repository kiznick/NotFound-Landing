"use client"

import Head from 'next/head'
import Image from 'next/image'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Error404(props: AppProps) {
    const router = useRouter()
    const { origin } = router.query

    const [currentDomain, setCurrentDomain] = useState<string | null>()

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentDomain(window.location.hostname);
        }
    }, [])

    return (
        <>
            <Head>
                <title>404 Page not found.</title>
                <meta name="description" content="Page not found." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`flex h-screen`}>
                <div className={`m-auto p-8 pt-0`}>
                    <h1 className={`text-9xl text-red-500`}>404</h1>
                    <h2 className={`text-6xl mb-3`}>Page not found</h2>
                    <h1
                        className={`text-5xl font-bold text-pink-400 mb-3`}
                    >
                        {origin || currentDomain}
                    </h1>
                    {/* <h3 className={`text-4xl mb-3`}>{origin}</h3> */}
                    <p className={`text-xl`}>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
                    <p className={`text-xl`}>The page may have been:</p>
                    <ul className={`list-disc pl-8 text-xl`}>
                        <li className={`text-xl`}>moved to a different URL</li>
                        <li className={`text-xl`}>deleted</li>
                        <li className={`text-xl`}>never existed</li>
                    </ul>
                    <p className={`text-xl`}>Please check the URL in the address bar and try again.</p>

                    <div className={`mt-3 flex justify-center`}>
                        <a href="https://www.facebook.com/kiznick" target="_blank" rel="noopener noreferrer" className={`mx-2 w-[64px] h-[64px]`}>
                            <Image
                                src="/icon/f_logo_RGB-Blue_512.png"
                                alt="Facebook Logo"
                                width={64}
                                height={64}
                                priority
                            />
                        </a>
                        <a href="https://github.com/kiznick" target="_blank" rel="noopener noreferrer" className={`mx-2 w-[64px] h-[64px]`}>
                            <Image
                                src="/icon/github-mark-white.svg"
                                alt="Github Logo"
                                width={64}
                                height={64}
                                priority
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}