import React,{Component} from 'react';
import axios from 'axios';
import './style.css'

class  Update extends Component{
    state={
        id:'',
        Ufruit:''
    }
    componentDidMount=()=>{
        let url = window.location.href
        let array = url.split('/');
        this.setState({
            id:array[4]
        })
    }
    updateFruit=()=>{
        axios.put('http://localhost:5000/update/'+this.state.id,{
            FruitName:this.state.Ufruit
        })
        .then(res=>alert(res.data))
        document.getElementById('txt').value=' '
        
    }
    setUpdateFruit=()=>{
        console.log(this.InputDemo.value)
        this.setState({
            Ufruit:this.InputDemo.value
        })
    }
    render(){
    return(
        <div className="Container">
            <div>
                <input onChange={this.setUpdateFruit} type="text" id='txt' ref={input=>this.InputDemo = input} />
            </div>
            <div>
                <button onClick={this.updateFruit}>Update</button>
            </div>
        </div>
    )
    }
}

export default Update;