import NavBarLink from "./NavBarLink";
export default function NavBar() {
    return (
      <>
        <div className="w-full p-4 bg-dark flex  justify-end">

            <NavBarLink text = "about" link = "" />
            <NavBarLink text = "projects" link = "" />
        </div>
      </>
    );
  }
  