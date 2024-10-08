import NavBarLink from "./NavBarLink";
export default function NavBar() {
    // return (
    //     <div className="w-full pb-4  bg-dark flex justify-between ">
    //       <div className="flex">
    //         <NavBarLink text = "home" link = "/"/>
    //         <NavBarLink text = "colours" link = "/colours" customstyle="rounded-b-lg outline outline-2 outline-white" />
    //       </div>
    //       <div className="flex">
    //         <NavBarLink text = "about" link = "/about"/>
    //         <NavBarLink text = "projects" link = "/projects" />
    //       </div>
    //     </div>
    // );
    return (
      <div className="pt-2 pb-2 bg-mid flex justify-center rounded-full drop-shadow-lg bg-opacity-50">
        {/* <div className="flex">
          <NavBarLink text = "home" link = "/"/>
          <NavBarLink text = "colours" link = "/colours" customstyle="rounded-b-lg outline outline-2 outline-white" />
        </div> */}
        <div className="flex">
          <NavBarLink text = "home" link = "/"/>
          <NavBarLink text = "colours" link = "/colours"/>
          <NavBarLink text = "about" link = "/about"/>
          <NavBarLink text = "projects" link = "/projects" />
        </div>
      </div>
  );
  }
  