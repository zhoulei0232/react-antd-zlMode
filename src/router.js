import React from 'react'
import {HashRouter ,Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Home from './pages/home'
import Buttons from  './pages/ui/buttons'
import Modals  from  './pages/ui/modals'
import NoMatch from  './pages/nomatch/'
import Loadings from './pages/ui/loadings'
import Notice  from  './pages/ui/notice'
import Messages from  './pages/ui/messages'
import Tab  from  './pages/ui/tabs'
import Gallery  from  './pages/ui/gallery'
import Carousels  from  './pages/ui/carousels'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable  from  './pages/table/highTable'
import Rich from './pages/rich'
import City from './pages/city'
import Order from './pages/order/index'
import Common from './common'
import OrderDetail from './pages/order/detail'
import BikeMap  from  './pages/map/bikeMap'
import User  from  './pages/user'
import Bar from './pages/echarts/bar'
import Pie  from  './pages/echarts/pie'
import Line  from  './pages/echarts/line'
import Permission  from  './pages/permission'


export default class Router extends React.Component{
    render(){
        return(
            
            <HashRouter>
                <App>
                    <Switch>
                        <Route  path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path="/home"  component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notification" component={Notice} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={Tab} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={Carousels} />
                                    <Route path="/form/login" component={FormLogin} />
                                    <Route path="/form/reg" component={FormRegister} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/table/high" component={HighTable} />
                                    <Route path='/rich' component={Rich} />
                                    <Route path="/city" component={City} />
                                    <Route path="/order" component={Order} />
                                    <Route path='/bikeMap' component={BikeMap} />
                                    <Route path='/user' component={User} />
                                    <Route path="/charts/bar" component={Bar} />
                                    <Route path="/charts/pie" component={Pie} />
                                    <Route path="/charts/line" component={Line} />
                                    <Route path="/permission" component={Permission} />
                                </Switch>
                            </Admin>
                             }
                        ></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}