import {useState, useEffect} from "react"
import Modal from './modal'
import axios from 'axios'
import icon_email from '../img/icon_email.png';
import icon_phone from'../img/icon_phone.png';
import { useDispatch, useSelector } from "react-redux";
import './item.css'
const src = 'http://localhost:3000/?term=';

function Item({name, modal, itemOb}) {
    const [itemName, setItemName] = useState('')
    const [list, setList] = useState([]);
    
    const dispatch = useDispatch()
    const item = useSelector(state => state)
    // console.log("item", item)

    const modalVisible = (e, el) => {
        modal(true);
        itemOb = el
        dispatch({type: "ADD_ITEM", 
            ...el
        })
        console.log("item", item)
    }

    useEffect(() => {
        setItemName(name);
        const Debounce = setTimeout(() => {
            if(!name){
                axios
                .get(`${src}`)
                .then(data => {
                    console.log(data.data)
                    setList(data.data);
                })
            }
            axios
            .get(`${src}${name}`)
            .then(data => {
                console.log(data.data)
                setList(data.data);
            })
        }, 300)
        
        return () => clearTimeout(Debounce);
    },[name])
    return ( 
        <div className="list">
                {list.map(el => {
                    return (
                        <div 
                        className="list_item"
                        onClick={(e) => modalVisible(e,el)}
                        name={el.name}> 
                            <h2>{el.name}</h2>
                            <div>
                                <img src={icon_phone} alt="icon_phone"/>
                                <p>{el.phone}</p>
                            </div>
                            <div>
                                <img src={icon_email} alt="icon_email"/>
                                <p>{el.email}</p>
                            </div> 
                        </div>
                    )
                })}
                {/* {list.forEach((el) => {
                    console.log("list", el.name)
                    
                })} */}
            </div>
     );
}

export default Item;

