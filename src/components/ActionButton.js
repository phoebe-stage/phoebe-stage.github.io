import { useRouter } from "next/router";
import Link from "next/link";
import BaseButton from './BaseButton';



export default function ActionButton({ text, action, size}) {
    return (
        <>
            <BaseButton text={text} link={""} action={action} 
                defaultColour="bg-mid bg-opacity-80" defaultText="text-light text-opacity-80" 
                hoverColour="bg-accent" hoverText="text-dark" 
                selectedColour="bg-light-mid" selectedText="text-dark" 
                size={size} >
            </BaseButton>
        </>
    );
}