import NavBar from "./NavBar"
 
export default function Layout({ children }) {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-dark items-center pt-10 pr-10 pl-10">
        <main className="flex-grow">{children}</main>
        <div className="footer flex items-center justify-center absolute bottom-10 w-full">
            <NavBar  />
        </div>
    </div>
    </>
  )
}