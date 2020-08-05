import React,{Component} from 'react';
import axios from 'axios';
import './style.css'
class  AddFruit extends Component{
    state={
        fruit:'',
        message:''
    }

    addingfruit=()=>{
        axios.post('http://localhost:5000/add',{
            FruitName:this.state.fruit
        }).then(res=>{
            console.log(res.data);
            alert(res.data)
        })

        document.getElementById('txt').value=''
        document.getElementById('txt').focus()
    }
    add=()=>{
        console.log(this.InputDemo.value)
        this.setState({
            fruit:this.InputDemo.value
        })
    }
    render(){
        return(
        <div className="Container">
            <div className="Input">
                <input type="text" id="txt" onChange={this.add} ref={input=>this.InputDemo=input}/>
            </div>
            <div className="Button">
                <button onClick={this.addingfruit}>Add</button>
            </div>
        </div>
        )    
    }
    
}

export default AddFruit;