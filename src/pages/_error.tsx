import Head from 'next/head'
import Image from 'next/image'

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 Page not found.</title>
        <meta name="description" content="Page not found." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex h-screen`}>
        <div className={`m-auto p-8`}>
          <h1 className={`text-9xl text-red-500`}>404</h1>
          <h2 className={`text-6xl mb-3`}>Page not found.</h2>
          <p className={`text-xl`}>The page you are looking for does not exist.</p>
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