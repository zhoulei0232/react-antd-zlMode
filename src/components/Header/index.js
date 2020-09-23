import React from 'react'
import {Row , Col} from 'antd'
import './index.less'
import Util from '../../utils/utils'

class Header extends React.Component{
    componentWillMount(){
        this.setState({
            userName:'管理员',
            sysTime:''
        })
        setInterval(()=>{
           let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
    }
    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col  span="24">
                        <span>{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                    
                </Row>
                <Row className="breadcrumb" >
                    <Col  span="4" className="breadcrumb-title" >
                        首页
                    </Col>
                    <Col  span="20" className="weather">
                        <span className="date" >{this.state.sysTime}</span>
                        <span className="weather-detail">多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default  Header