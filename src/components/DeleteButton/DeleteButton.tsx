import React, {useState} from 'react';
import {Button} from "../../UI/Button/Button";
import {ConfirmModal} from "../ConfirmModal/ConfirmModal";
import {useDispatch} from "react-redux";
import {removeTrashProductAction} from "../../store/reducers/Trash/TrashActions";
import trashCanImage from '../../assets/decor/helpers/trashcan.svg'
import {AddedTrashProduct, TrashProduct} from "../../store/reducers/Trash/TrashTypes";

type Props = {
    class?: string,
    product: AddedTrashProduct,
};
export const DeleteButton = (props: Props) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const confirmDeleteHandler = () => {
        setShowModal(true);
    };
    const hiddenModalHandler = () => {
        setShowModal(false);
    }

    const deleteProductHandler = () => {
        dispatch(removeTrashProductAction(props.product));
        setShowModal(false);
    };

    return (
        <div className={`${props.class || ''}`}>
            <Button isRounded={true}
                    urlImage={trashCanImage}
                    type={'button'}
                    onClick={confirmDeleteHandler}/>
            <ConfirmModal title={'Вы уверены?'}
                          onConfirm={deleteProductHandler}
                          showModal={showModal}
                          onClose={hiddenModalHandler}/>
        </div>
    );
};