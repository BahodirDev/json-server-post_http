import React from 'react';
import './App.css';
import Engine from './comps/Engine';
import Power from './comps/Power';


class App extends React.Component {

  state = {
    posts: "",
    title: "",
    body: "",
  }

  componentDidMount() {
    fetch('http://localhost:3000/post_lists')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ posts: data })

      })
  }

  getId = (postId) => {
    let newMass = this.state.posts.filter(s => s.id !== postId);
    this.setState({ posts: newMass })
  }
  getBody = (e) => {
    this.setState({ body: e.target.value })
  }
  getTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  getValue = () => {
    fetch('http://localhost:3000/post_lists',{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({title:this.state.title,body:this.state.body})
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ posts:[...this.state.posts,data]})
      })
  }


  render() {
    return (
      <div className='App'>
        <div>
          {
            this.state.posts.length ?
              this.state.posts.map((val, idx) => {
                return (
                  <div key={val.id}>
                    <h3>{val.title}</h3>
                    <p>{val.body}</p>
                    <button className='btn btn-danger' onClick={() => this.getId(val.id)}>Remove</button>
                  </div>
                )
              })
              : 'loading'
          }
        </div>
        <div>
          <input type="text" value={this.state.body} placeholder="Name" onChange={this.getBody} />
          <input type="text" value={this.state.title} placeholder="Body" onChange={this.getTitle} />
          <div>
            <button className="btn btn-danger" onClick={this.getValue}>Add</button>
          </div>
        </div>
      </div>
    )
  }

}


// CRUD

export default App;
