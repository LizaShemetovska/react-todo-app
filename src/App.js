import React, { Component } from 'react';

import './App.css';
import { parse } from 'url';
import '../node_modules/bulma/css/bulma.css';


let todoItems = [];
todoItems.push({ index: 1, value: "To do task from Math", done: false });
todoItems.push({ index: 2, value: "Learn Docker", done: false });
todoItems.push({ index: 3, value: "Solve all problems in a hole world", done: false });
todoItems.push({ index: 4, value: "Become older", done: true });



class TodoList extends Component {
  render() {
    var todoItems = this.props.items.map((item, index) => {
      return (<TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />);

    });
    return (<ul className="list-group"> {todoItems}</ul>);
  };
}
class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    let index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render() {
    let todoClass = this.props.item.done ? "done" : "undone";
    return (
      <li>

       
      <div className={"columns"}> 
        <div className="column"> {this.props.item.value}</div>
        <div className="column">
        <button type="button" className="button is-primary is-rounded" onClick={this.onClickClose}><span>&times;</span></button>
       
        
        </div>
        <div className="column">
        <button className="button is-primary is-rounded" onClick={this.onClickDone}>
        <span>{todoClass}</span>
        </button>
        </div>
      </div>
    </li>
    );

  };

}

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    let newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.refs.form.reset();

    }
  }
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="input is-info" placeholder="Add "></input>
        <button className="button is-primary is-rounded">Add</button>
      </form>
    );

  };
}

class TodoHeader extends Component {
  render() {
    return <p class="subtitle is-3">What do you want to do ?</p>
  };
}
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: todoItems };
  }
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems: todoItems });
  }
  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });

  }
  markTodoDone(itemIndex) {
    let task = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    task.done = !task.done;
    task.done ? todoItems.push(task) : todoItems.unshift(task);
    this.setState({ todoItems: todoItems });

  }
  render() {
    return (
      <div id="main">
       <div className="columns is-centered" >

<div class="card column is-half  .is-multiline">


  <header class="card-header columns is-centered">
    <p class="card-header-title column is-half .is-multiline">
    <TodoHeader/>
    </p>
  </header>
  
  <div class="card-content">
  <TodoList items={this.props.initItems} removeItem={this.removeItem} markDone={this.markDone}/>
     
  </div >
  <footer class="card-footer columns is-centered">
  <div class="column is-half .is-multiline">
  <ToDoForm addItem={this.addItem}/>
  </div>
  
  </footer>
  </div>
      
</div>

      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* load  */}
        <TodoApp initItems={todoItems} />
      </div>
    );
  }
}

export default App;
