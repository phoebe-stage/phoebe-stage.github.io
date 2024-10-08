import Link from "next/link";
export default function NavBarLink({ text, Icon, link }) {
    return (
        <Link href={link}>
          <div className=" w-48 mb-5 p-4 text-center text-light-mid hover:bg-light-mid hover:text-dark">
            <p> {text} </p>
          </div>
        </Link>
      );
  }
  