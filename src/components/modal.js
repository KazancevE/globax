import { useEffect, useState } from 'react';
import './modal.css'
import icon from '../img/icon.png'
import { useSelector } from 'react-redux';

function Modal({item, active, setActive}) {
    const getItem = useSelector(state => state)
    const closeModal = () => {
        setActive(false)
    }
    return ( 
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className='modal_content' onClick={e  => e.stopPropagation()}>
            <div className="modal_head">
                <h2>{getItem.name}</h2>
                <img 
                src={icon} 
                alt="icon" 
                onClick={closeModal}
                />
            </div>
            <div className="modal_main">
                <div>
                    <p className='modal_title modal_main_child_first'>Телефон:</p>
                    <p className='modal_description modal_main_child_second'>{getItem.phone}</p>
                </div>
                <div>
                    <p className='modal_title modal_main_child_first'>Почта:</p>
                    <p className='modal_description modal_main_child_second'>{getItem.email}</p>
                </div>
                <div>
                    <p className='modal_title modal_main_child_first'>Дата приема:</p>
                    <p className='modal_description modal_main_child_second'>{getItem.hire_date}</p>
                </div>
                <div>
                    <p className='modal_title modal_main_child_first'>Должность:</p>
                    <p className='modal_description modal_main_child_second'>{getItem.position_name}</p>
                </div>
                <div>
                    <p className='modal_title modal_main_child_first'>Подразделение:</p>
                    <p className='modal_description modal_main_child_second'>{getItem.department}</p>
                </div>
            </div>
            <div className="modal_ext">
                <p className='modal_title'>Дополнительная информация:</p>
                <p className='modal_description'>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>
            </div>
        </div>
            
        </div>
     );
}

export default Modal;