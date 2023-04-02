import React, {FormEvent, useState} from 'react';
import styles from './admin.module.scss'
import {Button} from "../../UI/Button/Button";
import {Label} from "../../UI/Label/Label";
import {Input} from "../../UI/Input/Input";
import {AdminActions} from "./AdminActions/AdminActions";

export const AdminComponent = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(true);
    const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userName === 'admin' && password === 'admin') {
            setIsAdmin(true);
        }
    };

    return (
        <div className={styles.admin}>
            {isAdmin ? <AdminActions/> : <form className={styles.form} onSubmit={(e) => submitFormHandler(e)}>
                <Label htmlFor={'user-name'} class={styles.label}>
                    <Input id={'user-name'} type={'text'}
                           placeholder={'Введите логин'}
                           value={userName}
                           onInput={(e) => setUserName(e.target.value)}/>
                </Label>
                <Label htmlFor={'password'} class={styles.label}>
                    <Input id={'password'} type={'password'}
                           placeholder={'Введите пароль'}
                           value={password}
                           autocomplete={'current-password'}
                           onInput={(e) => setPassword(e.target.value)}/>
                </Label>
                <Button isRounded={false} title={'Войти'} type={'submit'}/>
            </form>}

        </div>
    );
};