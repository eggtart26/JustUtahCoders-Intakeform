import React from 'react';
import FormPage from './FormPage.jsx'
import axios from "axios"; 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: null,
            email: null,
            birthDate: null,
            agreeBox: false
        }
        this.handleAddName = this.handleAddName.bind(this);
        this.handleAddEmail = this.handleAddEmail.bind(this);
        this.handleAddBirthDate = this.handleAddBirthDate.bind(this);
        this.handleAgreeBox = this.handleAgreeBox.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    addData() {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const birthDate = /(\d{4})[-\/](\d{2})[-\/](\d{2})/
        if(this.state.name === null) {
            alert('Name can not be empty')
        };
        if(this.state.email === null || !validEmail.test(this.state.email)) {
            alert('Cannot be blank AND must be a valid email address')
        };
        if(!birthDate.test(this.state.birthDate)) {
            alert('The input must be a valid date')
        };
        if(this.state.agreeBox === false) {
            alert('Must be checked')
        };
        axios.post('https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users', {
          form: {
            id: this.state.id += 1,
            name: this.state.name,
            email: this.state.email,
            birthDate: this.state.birthDate,
            agreeBox: this.state.agreeBox,
          }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      }


    

    handleAddName(e) {
        console.log("you are inputing name")
        console.log(e.target.value)
        this.setState({
          name: e.target.value
        });
      }
    handleAddEmail(e) {
        console.log("you are inputing email")
        console.log(e.target.value)
        this.setState({
          email: e.target.value
        });
      }
    handleAddBirthDate(e) {
        console.log("you are inputing birthDate")
        console.log(e.target.value)
        this.setState({
          birthDate: e.target.value
        });
      }
    handleAgreeBox(e) {
        console.log("you are checking agreeBox")
        console.log(e)
        this.setState({
          agreeBox: !this.state.agreeBox
        });
      }


    handleClear() {
        this.setState({
            name: null,
            email: null,
            birthDate: null,
            agreeBox: false
        })
        window.location.reload(false);
    }

    handleSubmit(e) {
        this.addData();
    }

    render() {
        return(
            <FormPage 
            handleAddName={this.handleAddName}
            handleAddEmail={this.handleAddEmail}
            handleAddBirthDate={this.handleAddBirthDate}
            handleAgreeBox={this.handleAgreeBox}
            handleClear={this.handleClear}
            handleSubmit={this.handleSubmit}
            />
        )
    }

};

export default App;
