import React, {useState} from 'react';
import {Label} from "../../UI/Label/Label";
import styles from "../Footer/footer.module.scss";
import {Input} from "../../UI/Input/Input";
import {Button} from "../../UI/Button/Button";
import arrowImage from "../../assets/decor/arrows/arrow-right-white.svg";

type Props = {
    htmlFor: string,
};
export const EmailSender = (props: Props) => {
    const [value, setValue] = useState('');
    return (
        <Label htmlFor={props.htmlFor} class={styles.label}>
            <Input type={'text'} onInput={(e) => setValue(e.target.value)}
                   placeholder={'Введите ваш E-mail'}
                   value={value}
                   id={props.htmlFor}/>
            <Button isRounded={true}
                    imageClass={styles['button-image']}
                    class={styles.button}
                    type={"button"}
                    urlImage={arrowImage}/>
        </Label>
    );
};