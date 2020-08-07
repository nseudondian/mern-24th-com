import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './index.css'



class App extends Component {
    constructor(){
        super()
        this.state = {
            school : "",
            location : "",
            age: "",
            password: "",
        }
        this.newSchool=this.newSchool.bind(this)
        this.newLoc=this.newLoc.bind(this)
        this.newAge=this.newAge.bind(this)
        this.newPass=this.newPass.bind(this)
        this.submitData = this.submitData.bind(this)
    }
    newSchool(event){
        this.setState({
            school : event.target.value
        })
    }
    newLoc(event){
        this.setState({
            location:event.target.value
        })
    }
    newAge(event){
        this.setState({
            age:event.target.value
        })
    }
    newPass(event){
        this.setState({
            password: event.target.value
        })
    }
    submitData(event){
        event.preventDefault()
        const submitted = {
            school : this.state.school,
            location: this.state.location,
            age : this.state.age,
            password:this.state.password
        }
        axios.post("http://localhost:5000/api/routes/register", submitted)
            .then(response => console.log(response.data))

            this.setState({
                school: "",
                location: "",
                age: "",
                password:""
            })
        


    }
    render() { 
        return ( 
            <div>
                <div className="container">
                    <div className="formdiv">
                        <form onSubmit={this.submitData}>
                            <input type="text" placeholder="School" value={this.state.school} onChange={this.newSchool} className="form-group form-control" />
                            <input type="text" placeholder="Location" value={this.state.location} onChange={this.newLoc}  className="form-group form-control"/>
                            <input type="number" placeholder="Age" value={this.state.age} onChange={this.newAge} className="form-group form-control" />
                            <input type="password" placeholder="Password" value={this.state.password} onChange={this.newPass} className="form-group form-control" />
                            <input type="submit"  value="submit" className="btn btn-secondary" />
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default App;