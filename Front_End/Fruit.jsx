import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import GetAndUpdate from './GetAndUpdate';
import AddFruit from './AddFruit';
import Navbar from './Navbar';
import './style.css'
import Update from './update';
const Fruit = ()=>{
    return(
        <BrowserRouter>
            <div>
                <span><center><h1>FRUIT ADDING APP</h1></center></span>
                <Navbar/>
                <Route path='/' exact component={GetAndUpdate}/> 
                <Route  path='/add' component={AddFruit}/>
                <Route path='/update/:id' component={Update}/>
            </div>
        </BrowserRouter>
        
    )
}
export default Fruit;
