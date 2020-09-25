import React from 'react'
import {Card,Button,Radio}  from  'antd'
import { PlusOutlined,EditOutlined,DeleteOutlined,SearchOutlined ,DownloadOutlined ,LeftOutlined , RightOutlined} from '@ant-design/icons';
import './ui.less'
 
class  Buttons  extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            size:'default'
        }
    }
    //关闭loading
    handleCloseLoading=()=>{
        this.setState({
            loading:false
        })
    }
    //打开loading 
    handleOpenLoading=()=>{
        this.setState({
            loading:true
        })
    }
    //改变大小
    handleChangeSize=(e)=>{
        let size = e.target.value ;
        this.setState({
            size
        })
    }
    render(){
        return(
            <div className="content-details">
                <Card  title="基础按钮"  className="card-wrap">
                    <Button type="primary">Imooc</Button>
                    <Button  >Imooc</Button>
                    <Button type="dashed" >Imooc</Button>
                    <Button type="danger" >Imooc</Button>
                    <Button disabled >Imooc</Button>
                </Card>
                <Card  title="图形按钮"  className="card-wrap">
                    <Button icon={<PlusOutlined />}>创建</Button>
                    <Button icon={<EditOutlined />}>编辑</Button>
                    <Button icon={<DeleteOutlined />} >删除</Button>
                    <Button shape="circle" 
                            icon={<SearchOutlined />}  >
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />}  >搜索</Button>
                    <Button type="primary" icon={<DownloadOutlined />}   >下载</Button>
                </Card>
                <Card  title="Loading按钮"  className="card-wrap">
                    <Button type="primary"  loading={this.state.loading}  onClick={this.handleOpenLoading}>确定</Button>
                    <Button type="primary" shape="circle"  loading={this.state.loading}  ></Button>
                    <Button loading = {this.state.loading}>点击加载</Button>
                    <Button shape="circle" 
                            loading={this.state.loading}  >
                    </Button>
                    <Button type="primary"  onClick={this.handleCloseLoading} >关闭</Button>
                </Card>
                <Card  title="按钮组"  className="card-wrap">
                    <Button.Group>
                        <Button type="primary" icon={<LeftOutlined />}></Button>
                        <Button type="primary" icon={<RightOutlined />}></Button>
                    </Button.Group>
                </Card>
                <Card  title="按钮尺寸"  className="card-wrap">
                    <Radio.Group value={this.state.size}  onChange={this.handleChangeSize}>
                          <Radio value="small">小</Radio>
                          <Radio value="default">中</Radio>
                          <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button  type="primary" size={this.state.size}>按钮</Button>
                    <Button  size={this.state.size}>按钮</Button>
                    <Button  type="dashed" size={this.state.size}>按钮</Button>
                    <Button  type="danger" size={this.state.size}>按钮</Button>
                </Card>
            </div>
        )
    }
}

export default Buttons 