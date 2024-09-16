import { ButtonEvent, ButtonEventText } from '../../../pages/events';

type ButtonProps = {
    title: string;
    color?: string;
    width?: number
};

const ButtonEventComponent = ({ title, color, width }: ButtonProps) => {
    return (
        <ButtonEvent color={color} width={width}>
            <ButtonEventText>{title}</ButtonEventText>
        </ButtonEvent>
    );
};

export default ButtonEventComponent;

