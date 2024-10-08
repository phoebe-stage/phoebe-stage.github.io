import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBarLink({ text, link, customstyle }) {
    const router = useRouter();
    const isActive = (router.pathname === link);
    console.log(router.pathname);
    console.log(isActive);

    // return (
    //     <Link href={link}>
    //       <div className={`w-48 mb-5 p-4 text-center ${isActive ? 'bg-light-mid text-dark' : 'bg-dark text-light-mid hover:bg-mid hover:text-light'} ${customstyle}`}>
    //         <p> {text} </p>
    //       </div>
    //     </Link>
    //   );

      return (
        <Link href={link}>
          <div className={`w-24 p-4 mr-2 ml-2 text-center rounded-full drop-shadow-md ${isActive ? 'bg-light-mid text-dark' : 'bg-dark text-light-mid hover:bg-mid hover:text-light'} ${customstyle}`}>
            <p> {text} </p>
          </div>
        </Link>
      );
  }
  