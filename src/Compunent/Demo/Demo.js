import React, { useState } from 'react';
import './Demo.css';
const Demo = () => {

const [list,setList] = useState([]);
const [item,setItem]  = useState("");

const handleOnClick = (data) => {
    list.push(item);
    setList([...list]);

  
}

const handleRemoveItem = (index) => {
    list.splice(index,1);
    setList([...list]);
    
}


    return (
        <div>
        
<dvi className="container">
    <p className='text-center fs-1 fw-bold'>React js To Do List</p>
<div className='toDoList'>
    <input name='inputValue' onChange={(e) =>  setItem(e.target.value) } className='inputs input' type='text' placeholder='Enter here..' />
    <button className='btn btn-success'  onClick={handleOnClick}>Add Data</button>
</div>

<div className='d-flex mt-5 justify-content-center'>
    <table className='table w-25 '>
        <tbody>
            {
                list.length!==0 ? (
list.map((element,index) =>{
return(
<tr>
    <td className='fw-bold'> {index + 1}:- { element}</td>
    <td><button onClick={() => handleRemoveItem(index)} className='btn btn-sm btn-danger'>Remove</button></td>
</tr>
);
})
 )  : <tr></tr>
            }
        </tbody>
    </table>
</div>


</dvi>



        </div>
    );
};

export default Demo;