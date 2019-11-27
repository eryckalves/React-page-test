import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // if rapido de true ou false 
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() { 
        // desconstruindo o this.props.todo.(propriedade dele)
        const { id , title} = this.props.todo;
        return ( 
            <div style={this.getStyle()}> 
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this , id)} style={{marginRight: '10px'}} />
                    {title}
                    <button onClick={this.props.delTodo.bind(this , id)} style={btnStyle}>x</button>
                </p>
            </div>
         );
    }
}

//PropTypes
TodoItem.propType = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
 
export default TodoItem;