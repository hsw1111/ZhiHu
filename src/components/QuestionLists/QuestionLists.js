import React from 'react'
import './index.css'

export default class QuestionLists extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lists:props.lists
    }

  }
  addClick(id){
    this.state.lists[id].voteCount++
    this.setState({
      lists:this.state.lists
    })
  }
  reduceClick(id){
    this.state.lists[id].voteCount--
    this.setState({
      lists:this.state.lists
    })
  }

  render(){
    return(
      <div className="question_lists">
        {this.state.lists.map(item=>{
          return (
            <div className="lists_item clearfix" key={item.id}>
              <div className="left">
                <button className="top" onClick={()=>{this.addClick(item.id)}}>
                  <i className="iconfont">&#xe62c;</i><br />
                  <span>{item.voteCount}</span>
                </button><br />
                <button className="bottom" onClick={()=>{this.reduceClick(item.id)}}>
                  <i className="iconfont">&#xe62d;</i>
                </button>
              </div>
              <div className="right">
                <h2 className="title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

}