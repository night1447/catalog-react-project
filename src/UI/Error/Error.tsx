import {FC} from "react";
import errorGif from "../../assets/error.gif"
import {Link} from "react-router-dom";

interface ErrorProps {
    errorMessage?: string,
}

export const Error: FC = (props: ErrorProps) => {
    return (
        <div className={'error'}>
            <p>Произошла непредвиденная ошибка <Link to={'/'}>
                На главную</Link>
            </p>
            <img src={errorGif} alt="Картинка ошибки" className={'error__gif'}/>
        </div>
    );
};