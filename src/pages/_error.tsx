"use client"

import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Error404() {
    const router = useRouter()
    const { origin } = router.query as { origin?: string }

    const [currentDomain, setCurrentDomain] = useState<string | null>(null)

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentDomain(window.location.hostname)
        }
    }, [])

    const displayHost = origin || currentDomain

    return (
        <>
            <Head>
                <title>404 Page not found</title>
                <meta name="description" content="Page not found." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex min-h-svh w-full items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8 text-slate-100 overflow-hidden">
                <div className="relative w-full max-w-xl">

                    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-slate-200">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                            Error 404 · Page not found
                        </div>

                        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                                    404
                                </p>
                                <h1 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                                    We lost this page.
                                </h1>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                                    The page you&apos;re looking for might have been moved, deleted,
                                    or never existed in the first place.
                                </p>

                                {displayHost && (
                                    <p className="mt-3 text-xs text-slate-400 sm:text-sm">
                                        Requested from{" "}
                                        <span className="font-mono text-slate-100">
                                            {displayHost}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-5 space-y-2 text-sm text-slate-300 sm:text-base">
                            <p>The page may have been:</p>
                            <ul className="list-disc space-y-1 pl-6">
                                <li>moved to a different URL</li>
                                <li>deleted or is temporarily unavailable</li>
                                <li>never created in the first place</li>
                            </ul>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-slate-100 backdrop-blur transition hover:bg-white/20"
                            >
                                Go back
                            </button>

                            <a
                                href="https://kiznick.me/"
                                className="inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-400"
                            >
                                Go to homepage
                            </a>
                        </div>

                        <div className="mt-7 flex items-center justify-center gap-4">
                            <a
                                href="https://github.com/kiznick"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur transition hover:bg-white/15"
                            >
                                <Image
                                    src="/icon/github-mark-white.svg"
                                    alt="GitHub Logo"
                                    width={28}
                                    height={28}
                                    priority
                                    className="h-6 w-6"
                                />
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
