import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu , Col} from 'antd'
import MenuConfig from  './../../config/menuConfig'

import './index.less'

const SubMenu = Menu.SubMenu ;

class NavLeft  extends React.Component{

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染的方法
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
                return(
                    <SubMenu  title={item.title} key={item.key}>
                         {
                             this.renderMenu(item.children)
                         }
                    </SubMenu>
                )
            }
            return  <Menu.Item title={item.title} key={item.key}>
                            <NavLink to={item.key}>{item.title}</NavLink>
                    </Menu.Item>
        })
    }
    render(){
        return(
            <div>
                <NavLink to="/home">
                    <div className="logo">
                        <img src="/assets/logo-ant.svg"  />
                        <h1>My Control</h1>
                    </div>
                </NavLink>
                <Menu   theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default  NavLeft