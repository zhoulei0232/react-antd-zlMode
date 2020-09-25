import React from 'react'
import {Card , Button ,Modal} from  'antd'
import './ui.less'

class  Modals  extends  React.Component{
    constructor(props){
        super(props)
        this.state = {
            showModal1 : false ,
            showModal2 : false,
            showModal3 : false,
            showModal4 : false
        }
    }
    //打开模态框
    handleOpen = (type)=>{
        console.log(123,type)
        this.setState({
            [type]:true
        })
    }
    handleConfirm = (type)=>{
        Modal[type]({
            title:'确认？',
            content:'今天天气怎么样？',
            okText:"fine",
            cancelText:"见鬼",
            onOk(){
                console.log('fine')
            },
            onCancel(){
                console.log('不好')
            }
        })
    }
    render(){
        return(
            <div  className="content-details">
                <Card title="基础模态框"  className="card-wrap" >
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')} >自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')} >顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')} >水平居中</Button>
                </Card>
                <Card title="信息确认框"  className="card-wrap" >
                    <Button type="primary"  onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary"  onClick={()=>this.handleConfirm('info')}>info</Button>
                    <Button type="primary"  onClick={()=>this.handleConfirm('success')}>success</Button>
                    <Button type="primary"  onClick={()=>this.handleConfirm('warning')}>warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>(
                        this.setState({
                            showModal1:false
                        })
                    )}
                >
                    <p>欢迎使用模态框</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="取消"
                    onCancel={()=>(
                        this.setState({
                            showModal2:false
                        })
                    )}
                >
                    <p>欢迎使用模态框</p>
                </Modal>
                <Modal
                    title="React"
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={()=>(
                        this.setState({
                            showModal3:false
                        })
                    )}
                >
                    <p>欢迎使用模态框</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={()=>(
                        this.setState({
                            showModal4:false
                        })
                    )}
                >
                    <p>欢迎使用模态框</p>
                </Modal>
            </div>
        )
    }
}

export default Modals 