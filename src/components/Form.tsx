import {useState} from 'react';
import {getData} from '../services/queries';

const Form =()=>{
    const [textToSearch, setTextToSearch] = useState("");

    const handleClick = async ()=>{
       var data = await getData(parseInt(textToSearch))
       console.log(data);
    }
    return (
        <div>
            <input 
                type="text" 
                name="" 
                id="" 
                value={textToSearch}
                onChange={(e)=>setTextToSearch(e.target.value)}
                />
            <button onClick={handleClick}>Consultar</button>
        </div>
    )
}

export default Form;