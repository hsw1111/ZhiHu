import React from 'react'
import QuestionForm from '../QuestionForm/QuestionForm'
import QuestionLists from '../QuestionLists/QuestionLists'
import './index.css'

export default class Head extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isAdd : false,
      temperature:'',
      lists:[
        {
          id:0,
          title:'产品经理与程序员矛盾的本质是什么？',
          description:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
          voteCount:10
        },
        {
          id:1,
          title:'热爱编程是一种怎样的体验？',
          description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
          voteCount:8
        },
        {
          id:2,
          title:'热爱编程是一种怎样的体验？',
          description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
          voteCount:5
        }
      ]
    }
    this.handleTemp = this.handleTemp.bind(this);
    this.addList = this.addList.bind(this);
  }
// 点击添加问题按钮，显示隐藏QuestionForm组件
  handleClick(){
    this.setState({
      isAdd : !this.state.isAdd,
      
    })
    console.log(this.state.isAdd)
  }

  // 父组件定义一个方法，接收子组件传递过来的值
  handleTemp(temperature) {
    this.setState({
        isAdd:temperature
    })
 }

  addList(item){
    this.state.lists.push(item)
    this.setState({
      lists:this.state.lists
    })
  }
  render(){
    return (
      <div className="head">
        <div className="top_wrap">
          <div className="clearfix head_wrap">
            <h1>React问答</h1>
            <button className="add" onClick={()=>{this.handleClick()}}>添加问题</button>
          </div>
        </div>
        <div className="container">
          {/* 定义一个方法以props属性的方式传给子组件 */}
          <QuestionForm isShow={this.state.isAdd} onTemp={this.handleTemp} lists={this.state.lists} onAdd={this.addList}/>
          <QuestionLists lists={this.state.lists} />
        </div>
      </div>
    )
  }
}