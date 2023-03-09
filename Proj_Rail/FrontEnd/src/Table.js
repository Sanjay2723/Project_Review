import axios from 'axios';
import React, { Component } from 'react';


class Table extends Component {
    state = {
        data: []
    }


    componentDidMount() {
    axios.get('http://127.0.0.1:2076/show').then(response =>{this.setState({data: response.data});
})
.catch(error => {console.log(error);
});
}

deleteData(aadhar_id, e){
    axios.delete(`http://127.0.0.1:2076/delete/${aadhar_id}`).then(response => {console.log(response);
    
    const data = this.state.data.filter(item => item.aadhar_id !== aadhar_id);
    this.setState({ data });
})
}

updateData(aadhar_id, e){
    axios.put(`http://127.0.0.1:2076/update/${aadhar_id}`).then(response => {console.log(response);
    
    
})
}   


    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>Aadhar_id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>No.of Ticket</th>
                        <th>Ticket Type</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(ticket => (
                        <tr key={ticket.aadhar_id}>
                            <td>{ticket.aadhar_id}</td>
                            <td>{ticket.name}</td>
                            <td>{ticket.age}</td>
                            <td>{ticket.no_ticket}</td>
                            <td>{ticket.type_ticket}</td>
                            
                            
                            <td>
                                <button className='btn btn-danger' onClick={(e) => this.deleteData(ticket.aadhar_id, e)}>Delete</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={(e) => this.updateData(ticket.aadhar_id, e)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        )
    }
}


export default Table;