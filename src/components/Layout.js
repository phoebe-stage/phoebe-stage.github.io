import NavBar from "./NavBar"
import Head from "next/head"
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
    <div className="min-h-screen w-full flex-col bg-dark items-center justify-center">
      <div className="p-10">
        <main className="flex-grow">{children}</main>
      </div>
        <div className="footer flex items-center justify-center absolute bottom-10 w-full">
            <NavBar  />
        </div>
    </div>
    </>
  )
}