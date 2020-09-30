import React from 'react'
import {Card , Form, Input, Button ,Checkbox  } from 'antd'

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less'
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
const tailLayout = {
    wrapperCol: { offset: 4, span: 8 },
  };

const onFinish = values => {//提交表单且数据验证成功后回调事件
    console.log('Received values of form: ', values);
  };
 

class  Login  extends  React.Component{
    formRef = React.createRef();

    okHandle = async () => {
        const fieldsValue = await this.formRef.current?.validateFields();
        //这里打印表单的结果
        console.log(fieldsValue,"这个就是表单的结果")
      }

    render(){
        
        return(
            <div  className="content-details">
                <Card title="登录"  className="card-wrap" >
                    <Form
                            {...layout}
                            onFinish ={onFinish} className="login-form"
                            initialValues={{
                            username:'admin',//默认值
                            }}
                    >
                        <Form.Item
                            
                            label="用户名"
                            name=""
                            rules={[// 声明式验证: 直接使用别人定义好的验证规则进行验证
                              { required: true, whitespace: true, message: '用户名必须输入' },
                              { min: 4, message: '用户名至少4位' },
                              { max: 12, message: '用户名最多12位' },
                              { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                            ]}
                        >
                           <Input />
                        </Form.Item>
                        <Form.Item
                           
                            label="密码"
                            name="password"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            {...tailLayout}
                        >
                                <Button type="primary" htmlType="submit"  >
                                    Submit
                                </Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="登录1"  className="card-wrap mylogin" >
                        <Form
                            name="normal_login"
                            className="login-form"
                            ref={this.formRef}
                        >
                            <Form.Item
                                name="username"
                            >
                                <Input 
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="username"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                            >
                                <Input 
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item >
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    noStyle
                                >
                                    <Checkbox >记住密码</Checkbox >
                                </Form.Item>
                                <a className="login-form-forgot" href="#">
                                        忘记密码
                                </a>
                            </Form.Item>
                            <Form.Item>
                                <Button
                                     className="login-form-button"
                                     type="primary"
                                     htmlType="submit"
                                     onClick={this.okHandle}
                                >登录</Button>
                                Or<a herf="#">register now!</a>
                            </Form.Item>
                        </Form>
                </Card>
            </div>
        )
    }
}

export default    Login