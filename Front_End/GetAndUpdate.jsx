import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './style.css'
const GetAndUpdate = ()=>{
    const [fruit,setFruit]=useState([])
    
    function removeFruit(id){
        axios.delete('http://localhost:5000/remove/'+id)
         .then(res=>{
            alert(res.data);
        })
    }
    useEffect(()=>{
        axios.get('http://localhost:5000/fruit')
          .then(res=>{
              setFruit(res.data)
          }
        )
    },[fruit])
    return(
        <div className="Main">
            <div>
                {fruit.map(item=>(
                    <div  className="First-Division" key={item._id}>
                        <div className="Span">
                            <span><h2>{item.FruitName}</h2></span>
                        </div>
                        <div className="Button-1">
                            <button id={item._id} onClick={()=>removeFruit(item._id)}>Remove</button>
                        </div>
                        <div className="Button-2">
                            <button><Link className="Link" to={'/update/'+item._id}>Update</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetAndUpdate;