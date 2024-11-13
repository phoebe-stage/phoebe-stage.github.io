import NavBar from "./NavBar"
import Head from "next/head"
import Layout from "./Layout"
import ProjectSideBar from "./ProjectSideBar"
export default function ProjectPage({ children }) {
  return (
    <Layout>
    <div >
      <title>Phoebe Stage - About</title>
      <ProjectSideBar></ProjectSideBar>
      <div className="flex-grow p-4 sm:p-10 overflow-y-auto">
          {children}
        </div>
    </div>
  </Layout>
  )
}