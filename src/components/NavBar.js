import NavBarLink from "./NavBarLink";
export default function NavBar() {
    return (
        <div className="w-full pb-4  bg-dark flex justify-between ">
          <div>
            <NavBarLink text = "home" link = ".."/>
          </div>
          <div className="flex">
            <NavBarLink text = "about" link = "/about"/>
            <NavBarLink text = "projects" link = "/projects" />
          </div>
        </div>
    );
  }
  