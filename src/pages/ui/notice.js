import React from 'react'
import {Card , Button ,notification} from 'antd'

class  Notice  extends  React.Component{

    handleOpenNotice = (type , direction)=>{
        //还提供了一个全局配置方法，在调用前提前配置，全局一次生效。
        if(direction){
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            messages:'消息提醒',
            description:'消息提醒的内容内容内容!'
        })
    }
    render(){
        return(
            <div className="content-details" >
                <Card  title="消息通知提醒框"  className="card-wrap">
                    <Button type="primary"  onClick={()=>this.handleOpenNotice('success')} > Success</Button>
                    <Button type="primary"  onClick={()=>this.handleOpenNotice('info')} > info</Button>
                    <Button type="primary"  onClick={()=>this.handleOpenNotice('warning')} > warning</Button>
                    <Button type="primary"  onClick={()=>this.handleOpenNotice('error')} > error</Button>
                </Card>
                <Card  title="通知提醒框"  className="card-wrap">
                <Button type="primary"  onClick={()=>this.handleOpenNotice('success','topLeft')} > Success</Button>
                    <Button type="primary"  onClick={()=>this.handleOpenNotice('info','topRight')} > info</Button>
                    <Button type="primary"  onClick={()=>this.handleOpenNotice('warning','bottomLeft')} > warning</Button>
                    <Button type="primary"  onClick={()=>this.handleOpenNotice('error','bottomRight')} > error</Button>
                </Card>
            </div>
        )
    }
}

export default Notice 