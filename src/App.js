import { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/modal'
import Finder from './components/finder'
import Item from './components/item'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const itemDefault = {
  name:'',
  phone:'',
  address:'',
  department:'',
  email:'',
  hire_date:'',
  position_name:''
}

const reduser = (state = itemDefault, action) => {
  switch(action.type){
    case "ADD_ITEM": {
      return {...state,
        name:action.name,
        phone:action.phone,
        address:action.address,
        department:action.department,
        email:action.email,
        hire_date:action.hire_date,
        position_name:action.position_name}
    }
    case "REMOVE_ITEM":{
      return itemDefault;
    }
    default: return state
  }
}

const store = createStore(reduser)

function App() {
  const [name, setName] = useState('');
  const [modalActive, setmodalActive] = useState(false);
  const [item, setItem] = useState('')

  const nameSearch = (name) => {
    setName(name);
  }
  const getItem = (itemOb) => {
    setItem(itemOb);
    // console.log (itemOb)
  }
  
  return (
    <Provider store={store}>
      <div className="App">
        <Finder onChange={nameSearch}/>
        <Item name={name} modal={setmodalActive} itemOb={getItem}/>
        <Modal active={modalActive} setActive={setmodalActive} item={item}/>
      </div>
    </Provider>
    
  );
}

export default App;
