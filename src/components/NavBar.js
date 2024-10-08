import NavBarLink from "./NavBarLink";
import Head from "next/head";
export default function NavBar() {
    return (
      <div className="p-2 bg-mid flex justify-center rounded-full drop-shadow-lg bg-opacity-50">
        <div className="flex space-x-2">
          <NavBarLink text = "home" link = "/"/>
          <NavBarLink text = "colours" link = "/colours"/>
          <NavBarLink text = "about" link = "/about"/>
          <NavBarLink text = "projects" link = "/projects" />
        </div>
      </div>
  );
  }
  