import Link from "next/link";
export default function NavBarLink({ text, Icon, link }) {
    return (
        <Link href={link}>
          <div className="flex m-5 text-light-mid">
            <p> {text} </p>
          </div>
        </Link>
      );
  }
  