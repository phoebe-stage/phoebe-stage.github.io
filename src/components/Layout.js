import NavBar from "./NavBar"
import Head from "next/head"
import * as Constant from "../constants"
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="min-h-screen w-full h-svh flex flex-col bg-dark overflow-hidden">
        <div className={`flex-grow p-${Constant.MINPAGEMARGINSIZE} sm:p-${Constant.SMALLPAGEMARGINSIZE} overflow-y-auto`}>
          {children}
        </div>
        <div className="footer fixed bottom-0 flex items-center justify-center mb-5 w-full">
          <NavBar />
        </div>
      </div>
    </>
  )
}