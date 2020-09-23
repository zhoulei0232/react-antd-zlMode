import React from 'react'
import {Card,Button,Icon}  from  'antd'
import { PlusOutlined,EditOutlined,DeleteOutlined,SearchOutlined ,DownloadOutlined} from '@ant-design/icons';
import './ui.less'
class  Buttons  extends  React.Component{

    render(){
        return(
            <div className="content-details">
                <Card  title="基础按钮">
                    <Button type="primary">Imooc</Button>
                    <Button  >Imooc</Button>
                    <Button type="dashed" >Imooc</Button>
                    <Button type="danger" >Imooc</Button>
                    <Button disabled >Imooc</Button>
                </Card>
                <Card  title="基础按钮">
                    <Button icon={<PlusOutlined />}>创建</Button>
                    <Button icon={<EditOutlined />}>编辑</Button>
                    <Button icon={<DeleteOutlined />} >删除</Button>
                    <Button shape="circle" 
                            icon={<SearchOutlined />}  >
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />}  >搜索</Button>
                    <Button type="primary" icon={<DownloadOutlined />}   >下载</Button>
                </Card>
            </div>
        )
    }
}

export default Buttons 