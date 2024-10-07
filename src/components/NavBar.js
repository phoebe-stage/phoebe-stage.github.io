import NavBarLink from "./NavBarLink";
export default function NavBar() {
    return (
      <>
        <div className="w-full bg-dark flex  justify-end">

            <NavBarLink text = "about" link = "" />
            <NavBarLink text = "projects" link = "" />
        </div>
      </>
    );
  }
  