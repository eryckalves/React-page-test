import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        //para apenas um campo de texto 
        //this.setState( { title: e.target.value})

        //para varios campos de texto onde NAME vem do input que deve existir  no state exemplo aqui 'title'
        this.setState( { [e.target.name]: e.target.value})
    }

    onSubmit = (e) =>
    {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    value={this.state.title} 
                    onChange={this.onChange}
                    name="title" 
                    style={{ flex: '10' , padding: '5px', textAlign: 'left'}} 
                    placeholder="Digite um item da Lista de afazeres ..." >
                </input>
                <input type="submit" value="Adicionar" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }
}

//PropTypes
AddTodo.propType = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo
