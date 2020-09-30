import React from 'react'
import {Card,Spin ,Alert}  from  'antd'
import {LoadingOutlined } from '@ant-design/icons';
class  Loadings  extends  React.Component{
    constructor(props){
        super(props)
        this.state={
            flagSpin1:true,
            flagSpin2:true
        }
    }
    bandleChangeSpin=(type)=>{
        this.setState({
            [type]:!this.state[type]
        })
    }
    render(){
        
        return(
            <div  className="content-details">
                <Card  title="spin用法"  className="card-wrap" >
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                    <Spin size="large" indicator={<LoadingOutlined />} />
                </Card>
                <Card title="内容遮罩"  className="card-wrap">
                    <Alert
                        message="React"
                        description="欢迎来到React高级实战课程"
                        type="warning"
                        style={{ marginBottom: 10 }}
                    />
                    <Spin
                        spinning={this.state.flagSpin1}
                        onClick={()=>this.bandleChangeSpin('flagSpin1')}
                    >
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin tip="加载中..."
                          spinning={this.state.flagSpin2}
                          onClick={()=>this.bandleChangeSpin('flagSpin2')}
                    >
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    
                    <Spin 
                        indicator={<LoadingOutlined />}
                    >
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}

export default Loadings 