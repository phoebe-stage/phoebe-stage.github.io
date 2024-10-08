import NavBar from "./NavBar"
import Head from "next/head"
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="min-h-screen w-full flex flex-col bg-dark overflow-hidden">
        <div className="flex-grow p-10 overflow-y-auto">
          {children}
        </div>
        <div className="footer flex items-center justify-center mb-10 w-full">
          <NavBar />
        </div>
      </div>
    </>
  )
}