import { ButtonEvent, ButtonEventText } from '../..';

type ButtonProps = {
    title: string;
    color?: string;
};

const ButtonEventComponent = ({ title, color }: ButtonProps) => {
    return (
        <ButtonEvent color={color}>
            <ButtonEventText>{title}</ButtonEventText>
        </ButtonEvent>
    );
};

export default ButtonEventComponent;

