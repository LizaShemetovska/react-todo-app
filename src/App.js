import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let todoItems=[];
todoItems.push({index:1, value: "To do task from Math", done:false});
todoItems.push({index:2, value: "Learn Docker", done:false});
todoItems.push({index:3, value: "Solve all problems in a hole world", done:false});
todoItems.push({index:4, value: "Become older", done:true});




class TodoList extends Component{
  render(){
    var todoItems=this.props.items.map((items,index) => {
        return (<TodoListItem key={index} item={item} index={index} 
          removeItem={this.props.removeItem} markDone={this.map.markDone}/>);

    });
return ( <ul className="list-group"> {todoItems}</ul>);
  };
}
class TodoListItem extends Component{
  constructor(){
    super(props);
    this.onClickClose=this.onClickClose.bind(this);
    this.onClickDone=this.onClickDone.bind(this);
  }
  onClickClose(){
    var index=parseInt(this.props.index);
    this.props.removeItem(index);
  }
  render(){
    
  };

}
class TodoForm extends Component{
  render(){

  };
}
class TodoHeader extends Component{
  render(){
    return <h1>Hello Liza from Todo List</h1>
  };
}

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* load  */}
      </div>
    );
  }
}

export default App;
