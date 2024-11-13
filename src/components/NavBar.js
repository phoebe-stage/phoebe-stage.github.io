import ChangePageButton from "./ChangePageButton";
import Head from "next/head";
export default function NavBar() {
    return (
      <div className="relative p-2 bg-mid flex justify-center rounded-full drop-shadow-lg z-50">
        <div className="flex space-x-2">
          <ChangePageButton text = "home" link = "/"  size="small_button"/>
          <ChangePageButton text = "colours" link = "/colours" size="small_button"/>
          <ChangePageButton text = "about" link = "/about" size="small_button"/>
          <ChangePageButton text = "projects" link = "/projects"  size="small_button"/>
        </div>
      </div>
  );
  }
  