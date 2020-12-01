import React, { Component } from 'react';
import './App.css';
import ClosedItems from './components/ClosedItems'
import ListItems from './components/ListItems'
import Search from './components/Search'
import Sort from './components/Sort'
import Title from './components/Title'
import { v4 as uuidv4 } from 'uuid'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
      ],
      tasksRender:[

      ],
      search : '',
    }
    this.onSave = this.onSave.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    // this.onSearch = this.onSearch.bind(this)
    this.onSort = this.onSort.bind(this)
  }
  // Get items from Local Storage
  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      let tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState(
        { tasks: tasks,tasksRender:tasks }
      )
    }
  }
  // Gen data
  GenerateData = () => {
    var tasks = [
      {
        id: uuidv4(),
        name: 'A',
        level: "high",
        status: 'open'
      },
      {
        id: uuidv4(),
        name: 'B',
        level: 'low',
        status: 'open'
      },
      {
        id: uuidv4(),
        name: 'C',
        level: 'medium',
        status: 'closed'
      }
    ]
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  // save
  onSave(data) {
    var tasks = this.state.tasks;
    tasks.push(data)
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  // delete items
  onDelete(id) {
    let tasks = this.state.tasks
    let index = tasks.findIndex(task => task.id === id) // lambda function
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
        tasksRender : tasks
      });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  // update
  onUpdate(data) {
    let updateTasks = this.state.tasks;
    let index = updateTasks.findIndex(task => task.id === data.id)
    if (index !== -1) {
      updateTasks[index] = data
      console.log(this.state.tasks[index])
      this.setState(
        { tasks: updateTasks }
      )
    }
  }

  // search
  onSearch = (dataSearch) => {
    const {tasks} = this.state; // khái bao hang so trong state, hang so nay k doi, chi lay ra du lieu thoi, can thi setState chu k tasks = ...

    let SearchTask = []; // tao bien bang let
    if (dataSearch === '') {
      if (localStorage && localStorage.getItem('tasks')) {
        let taskLocal = JSON.parse(localStorage.getItem('tasks'))
        this.setState(
          { tasksRender: tasks }
        )
      }
    }
    // uncomment kieeur gi??? ctrl /
    // okela
    else {
      for (let item of tasks) {
        if (item.name.includes(dataSearch)) {
          SearchTask.push(item)
        }
      }
      this.setState({
        tasksRender: SearchTask
      })
    }
    
  }
  onSort(value) {
    let tasks = this.state.tasks
    if(value === 'desc'){
      
    }
    else{

    }
  }
  render() {
    const {tasksRender} = this.state;
    return (
      <div className="App">

        <div class="container">

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 title">
              <Title></Title>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 search">
              <Search onChange={this.onSearch} search={this.onSearch}></Search>
              <Sort onSort={this.onSort}></Sort>



            </div>

            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-md-offset-2 ClosedItems">
              <ClosedItems></ClosedItems>
            </div>

            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ListItems tasks={tasksRender} onSave={this.onSave} onDelete={this.onDelete} onUpdate={this.onUpdate}></ListItems>
                <button type="button" class="btn btn-primary" onClick={this.GenerateData}>Generate Data</button>
              </div>
            </div>

          </div>


        </div>


      </div>)
  }
}
export default App