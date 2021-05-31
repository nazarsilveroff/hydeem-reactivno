import React from 'react';
import useModal from '../../Modal/ModalHook/useModal';

const AddProductModal = ({children}) => {
    const {isOpen} = useModal();
    return isOpen ? ( 
        <>
            {children}
        </>
    ) : null
}

export default AddProductModal;