import { useRouter } from "next/router";
import Link from "next/link";
import Head
 from "next/head";
export default function NavBarLink({ text, link, customstyle }) {
    const router = useRouter();
    const isActive = (router.pathname === link);

      return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Link href={link}>
            <div className={`w-16 sm:w-24
                pt-4 pb-4 sm:p-4  
                text-center rounded-full drop-shadow-md 
                ${isActive ? 'bg-light-mid text-dark' : 'bg-dark text-light-mid hover:bg-mid hover:text-light'} ${customstyle}`
                }>
                <p className="text-base text-xs sm:text-sm"> {text} </p>
            </div>
            </Link>
        </>
      );
  }
  