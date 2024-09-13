import { HeaderTitle, StackHeader } from "@/src/components/StackHeader/style";
import BackButton from "../BackButton";

type StackHeaderProps = {
    title?: string
}

export default function ({title}: StackHeaderProps) {

        if(title){
           return (
                <StackHeader>
                    <BackButton/>
                    <HeaderTitle>{title}</HeaderTitle>
                </StackHeader>
           )
        } else {
            return (
                    <BackButton/>
               
            )
        }
    
}