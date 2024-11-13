import { useRouter } from "next/router";
import Link from "next/link";
import BaseButton from './BaseButton';


function nothing() {

}
export default function ChangePageButton({ text, link, size}) {
    return (
        <>
            <BaseButton text={text} link={link} action={nothing} 
                defaultColour="bg-dark" defaultText="text-light-mid" 
                hoverColour="bg-mid" hoverText="text-light" 
                selectedColour="bg-light-mid" selectedText="text-dark" 
                size={size} >
            </BaseButton>
        </>
    );
}

