import React , {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//npm i react-router-dom
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/todos/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/todos/AddTodo';
import About from './components/Pages/About';
//import uuid from 'uuid';
import axios from 'axios';


class App extends Component {
  state = {
    todos: [
      //{ exemplo simples
        // PARA GERAR NOVOS ID AUTOMATICO USE COMANDO npm i uuid
        //id:uuid.v4(),
        //title: 'Titulo do Todos 1',
        //completed: true
      //},
    ]
  }


  componentDidMount() {
    // instalar npm i axios
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }

  // marca com toggle a propiedade do state -> todos
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
        }
      return todo;
    }) });
  }

  //adicionar um afazer AddTodo.js
  addTodo = (title) =>{
    //const newTodo = { EXEMPLO SIMPLES
    // PARA GERAR NOVOS ID AUTOMATICO USE COMANDO npm i uuid
    //  id:uuid.v4(),
    //  title: title,
    //  completed: false
    //}
    //this.setState({ todos: [...this.state.todos, newTodo]})
 
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {
      title:title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data]}) );
    // os ... para copiar oque ja tem e depois a funcao adiciona novo afazer

  }

  //deleta um item do Todo
  delTodo = (id) =>{
    //simples exemplo
    //this.setState({
    // os ... para copiar oque ja tem e depois a funcao  remover o id selecionado
    //  todos: [...this.state.todos.filter(todo => todo.id !== id)]
    //})

    // COM API Axios
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
     .then(res=> this.setState({
      // os ... para copiar oque ja tem e depois a funcao  remover o id selecionado
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    }))

  }

  render() { 
    return (  
    // para Router instalar  npm i react-router-dom 
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <Addtodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos}
                markComplete = {this.markComplete} 
                delTodo = {this.delTodo}
              />
            </React.Fragment>
          )}>   
          </Route>
          <Route path="/sobre" component={About} />
        </div>
      </div> 
    </Router>);
  }
}
 
export default App;

