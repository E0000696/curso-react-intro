import { TodoContext } from '../TodoContext';
import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){
    const {openModal, setOpenModal} = React.useContext(TodoContext);
    
    const abrirModal = () => {
        setOpenModal(!openModal);
      }


    return (        
        <div className=''>     
            <div className='d-flex flex-row justify-content-center'>
                <div className="box-2">
                    <div className="btn btn-two" onClick={abrirModal}>
                    <div className="icon">
                        <i className="fa fa-plus-square fa-2x"> </i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {CreateTodoButton};      