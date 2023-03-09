import React, {Component} from "react";
import axios from 'axios';
import './Create.css';

<h1> Railway</h1>
class Create extends Component {
    constructor(props) {
         super(props);
         this.state = {
            aadhar_id: '',
            name: '',
            age:'',
            no_ticket: '',
            type_ticket:'',
            
         };
        }

 handleaccidchange = (event) => {
     this.setState({aadhar_id:event.target.value});   
    };


 handleclientnamechange = (event) => {
     this.setState({name: event.target.value});
    };


 handlebanknamechange = (event) => {
     this.setState({age: event.target.value});
     };


         handlebranchchange = (event) => {
        this.setState({no_ticket: event.target.value});
    };

         handlemobilechange = (event) => {
        this.setState({type_ticket: event.target.value});
    };





     handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            aadhar_id : this.state.aadhar_id,
            name: this.state.name,
            age: this.state.age,
            no_ticket: this.state.no_ticket,
            type_ticket: this.state.type_ticket,
    
         };
          axios.post('http://127.0.0.1:2076/add', data)
        //   console.log(data)
     };
    render(){
     return(
         <form onSubmit={this.handleSubmit} className="login-form" id="inputdata">
                <label className="login-label">Aadhar Id</label>
            <input 
                     className="login-input"
                        type="number"
                    value={this.state.aadhar_id}
                     onChange={this.handleaccidchange}
                     />
                <label className="login-label">Passenger Name</label>
                 <input 
                     className="login-input"
                     type="text"
                     value={this.state.name}
                    onChange={this.handleclientnamechange}
                />
                <label className="login-label">Passenger Age</label>
                 <input 
                 className="login-input"
                 type="number"
                 value={this.state.age}
                 onChange={this.handlebanknamechange}
                 />
                 <label className="login-label">No Ticket</label>
                 <input 
                 className="login-input"
                 type="number"
                 value={this.state.no_ticket}
                 onChange={this.handlebranchchange}
                 />
                 <label className="login-label">Type Ticket</label>
             <input 
                    className="login-input"
                    type="text"
                    value={this.state.type_ticket}
                    onChange={this.handlemobilechange}
                />
            
 
                <button className="login-button" type="submit">Submit</button>
    </form>
    )
}
}

export default Create;