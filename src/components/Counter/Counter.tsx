import React, {ChangeEvent, useState} from 'react';
import {Label} from "../../UI/Label/Label";
import styles from './counter.module.scss'
import {Input} from "../../UI/Input/Input";

interface CounterProps {
    min: number,
    max: number,
    setMin: (value: number) => void,
    setMax: (value: number) => void,
}

export const Counter = ({min, max, setMin, setMax}: CounterProps) => {
        const [minValue, setMinValue] = useState(min);
        const [maxValue, setMaxValue] = useState(max);

        const checkValue = (setter: 'min' | 'max', value: number) => {
            const validateValue = (value: number): 1 | -1 | 0 => {
                if (value < min) {
                    return -1;
                }
                if (value > max) {
                    return 1;
                }
                return 0;
            };

            let settingValue: number = 0;
            if (validateValue(value) === 0) {
                settingValue = value;
            }
            if (validateValue(value) === -1) {
                settingValue = min;
                console.log(min);
            }
            if (validateValue(value) === 1) {
                settingValue = max;
            }
            if (setter === 'max') {
                setMax(settingValue);
                setMaxValue(settingValue);
            } else {
                setMin(settingValue);
                setMinValue(settingValue);
            }
        }
        const checkMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
            checkValue('min', +e.target.value);
        };

        const checkMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
            checkValue('max', +e.target.value);
        };
        return (
            <div className={styles.counter}>
                <Label
                    class={styles.label}
                    htmlFor={'filter-min-price'}>
                    <Input type={'number'}
                           id={'filter-min-price'}
                           value={minValue}
                           min={min}
                           onBlur={(e) => checkMinValueHandler(e)}
                           onInput={(e) => setMinValue(+e.target.value)}
                           placeholder={min.toString()}
                           class={styles.input}
                           max={max}/>
                </Label>
                <Label
                    class={styles.label}
                    htmlFor={'filter-max-price'}>
                    <Input type={'number'}
                           id={'filter-max-price'}
                           value={maxValue}
                           min={min}
                           onBlur={(e) => checkMaxValueHandler(e)}
                           onInput={(e) => setMaxValue(+e.target.value)}
                           placeholder={max.toString()}
                           class={styles.input}
                           max={max}/>
                </Label>
            </div>
        );
    }
;