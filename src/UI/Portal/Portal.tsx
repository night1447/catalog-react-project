import React from 'react';
import {createPortal} from "react-dom";

type Props = {
    idDocument: string,
    children: React.ReactNode
};
export const Portal = (props: Props) => {
    return (
        createPortal(props.children, document.getElementById(props.idDocument) as Element)
    );
};