import React from 'react'
import { Button, Input} from 'antd'
import './index.css'
import $ from 'jquery'
const { TextArea } = Input


export default class QuestionForm extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      question:"",
      description:"",
      isShow:props.isShow
    }
    console.log(this.state)
  }
  // 页面一加载不显示添加问题列表
  componentDidMount(){
    if(this.state.isShow===true){
      $("#question_form").css("display","block")
    }else{
      $("#question_form").css("display","none")
    }
  }
// 每次接收到的props值改变时，判断列表的显示隐藏
  componentWillReceiveProps(nextState){
    console.log(this.props)
    if(nextState.isShow===true){
      $("#question_form").css("display","block")
    }else{
      $("#question_form").css("display","none")
    }
  }
  // 表单值改变时设置state值
  handleChange(){
    this.setState({
      question:$("#ipt1").val(),
      description:$("#ipt2").val(),
    })
  }

  // 点击取消按钮清空表单内容并将false传递给父组件
  cancleClick(){
    this.setState({
      question:'',
      description:'',
      isShow:false
    })

    // 子组件调用props中的方法并将值传递给父组件
    this.props.onTemp(false)
  }
  // 点击确定按钮
  addClick(){
    console.log(this.props.lists)
    const lists = this.props.lists
    const item = {
      id:lists.length,
      description:this.state.description,
      title:this.state.question,
      voteCount:0
    }
    this.props.onAdd(item)
    this.setState({
      question:'',
      description:'',
    })
  }

  // 渲染DOM
  render(){
    return (
      <div className="question_form" id="question_form" >
        <h3>问题</h3>
        <Input placeholder="您的问题的标题" value={this.state.question} id="ipt1" onChange={()=>{this.handleChange()}}/><br />
        <TextArea placeholder="问题的描述" value={this.state.description} id="ipt2"  onChange={()=>{this.handleChange()}}/><br />
        <div className="clearfix">
          <Button type="primary" onClick={()=>{this.addClick()}}>确认</Button>
          <Button type="primary" className="cancle" onClick={()=>{this.cancleClick()}}>取消</Button>
        </div>
      </div>
    )
  }
}
