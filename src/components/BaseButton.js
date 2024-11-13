import { useRouter } from "next/router";
import Link from "next/link";


export default function BaseButton({ text, link, action, defaultColour, defaultText, hoverColour, hoverText, selectedColour, selectedText, size, customSize}) {
    const router = useRouter();
    const isActive = (router.pathname === link);
      return (
        <>
            {/* <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head> */}
            <Link href={link}>
            <div 
                className={`${size}
                flex items-center justify-center
                pt-4 pb-4 sm:p-4  
                text-center rounded-full drop-shadow-lg z-50  relative
                transition-transform transform
                ${isActive ? `${selectedColour} ${selectedText}`: `${defaultColour} ${defaultText} hover:${hoverColour} hover:${hoverText}`}`
                }

                onClick={action}
                >

                <p className={`w-auto text-base text-xs sm:text-sm `}> {text} </p>
            </div>
            </Link>
        </>
      );
  }
  