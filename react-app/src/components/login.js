import React,{ Component } from 'react';

import logo from '../logo.svg';

import './login.css';

import API from '../api/API'

import { Form, Icon, Input, Button} from 'antd';

const FormItem = Form.Item;

const api = new API();

class Login extends Component{
	constructor(props) {  
        super(props);  
        this.state = {
        	username: '',
        	userpwd: ''
        };
        this.doLogin = this.doLogin.bind(this);

        this.usernameChange = this.usernameChange.bind(this);

        this.userpwdChange = this.userpwdChange.bind(this);
    }

    //组件存在期  组件已存在时的状态改变
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    //组件销毁&清理期
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    //监听组件中的事件
    usernameChange(e){
    	this.setState({username:e.target.value});
    }

    userpwdChange(e){
    	this.setState({userpwd:e.target.value});
    }

    doLogin(e) {
        e.preventDefault();
        let that = this;
        this.props.form.validateFields((err, values) => {
          if (!err) {
            let params ={
                username:that.state.username,
                password:that.state.userpwd,
            };

            window.localStorage.setItem('users',JSON.stringify(params));
            that.props.history.push("/index");

            /*
            api.login(params).then(function(res){
                if(res.status === 200 || res.status === '200'){
                    window.localStorage.setItem('users',JSON.stringify(res.data));
                    that.props.history.push("/index"); 
                }else{
                    alert(res.msg);
                }
            });
            */
          }
        });
    }


    //实例化完成后的更新
    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        let users = window.localStorage.getItem('users');
        if(users){
            let initValue = JSON.parse(users);
            //设置初始值
            this.props.form.setFieldsValue({
                username:initValue.username,
                userpwd:initValue.password
            }); 
        }  
    }

 	render() {
        const { getFieldDecorator } = this.props.form;
	    return (
            <div className="login">
                <header className="login-header">
                  <img src={logo} className="login-logo" alt="logo" />
                  <h1 className="login-title">Welcome to React</h1>
                </header>
                <div style={{width: '400px',margin:'50px auto'}}>
                    <Form onSubmit={this.doLogin} className="login-form">
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                              })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" onChange={this.usernameChange}/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('userpwd', {
                                rules: [{ required: true, message: '请输入密码!' }],
                              })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" onChange={this.userpwdChange}/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>   
	    );
	  }
};

export default Login = Form.create()(Login); 