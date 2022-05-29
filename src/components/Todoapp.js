import './Todoapp.css'
import React, { Component } from 'react'

class Todoapp extends Component {
    state ={
        input:'',
        items:[]
       
        
    }

handleChange = (event) =>{
    this.setState({
        input:event.target.value

    })
}


    storeItems = (event) =>{
        event.preventDefault();
        const {input} = this.state;
       

        
        this.setState({
            items:[...this.state.items,input],
            input:''
        })

    }

    deleteItem = (index) => {
        const allItems = this.state.items
        allItems.splice(index,1);

        this.setState({
            item:allItems
        })
        
    }




  render(){
      const {input,items} =this.state;

console.log(items)
  return (
    <div className='todo-container'>
        
    <form className='input-section' onSubmit={this.storeItems}>
    <h1>User-info</h1>
    
        <input type='text'
        value={input} 
         onChange={this.handleChange} 
         placeholder='Enter items...'/>
        

    </form>
    <ul>
    {items.map((data,index)=>(
        <li key={index}>
        {data}<i className="fa-solid fa-trash-can" onClick={()=>this.deleteItem(index)}></i>
         </li>
     ))}
    </ul>
  

        </div>
        


  

  )
        }
}

export default Todoapp