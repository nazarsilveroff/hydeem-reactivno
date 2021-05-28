import React from 'react';

const AddProductModal = ({children, toggleDiaryModal}) => {
    return toggleDiaryModal ? ( 
        <>
            {children}
        </>
    ) : null
}

export default AddProductModal;