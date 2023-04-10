import React, {FC, PropsWithChildren} from 'react';
import {createPortal} from "react-dom";

type PortalProps = {
    idDocument: string,
};
export const Portal: FC<PropsWithChildren<PortalProps>> = (props) => {
    return (
        createPortal(props.children, document.getElementById(props.idDocument) as Element)
    );
};