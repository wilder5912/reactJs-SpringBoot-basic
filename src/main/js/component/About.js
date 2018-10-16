import React, { Component }  from 'react';

class About extends Component{
    constructor() {
        super();
        this.state = {
        dataSales: [],
        };
    this.contenido();
    }
    contenido() {
        fetch('/sales/getSalesList', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(jsonD => {
                console.log(jsonD);
                console.log(jsonD.huno2);
            });
        fetch('/sales/getSalesListList', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(jsonD => {
                console.log(jsonD);
                this.setState({
                    dataSales: jsonD
                });
            });
    }
    render(){
        let todos = this.state.dataSales.map((allData, keyi) =>{
            return (
                <li key={keyi} >{allData}</li>
            )
        });
        return (
            <div className="card">
              <h1>About</h1>
                <ul>
                    {todos}
                </ul>

            </div>
        )
    }
}
export  default About;