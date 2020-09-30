import React from 'react'
import {Card , Carousel } from 'antd'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
function onChange(current){
    console.log(current)
}

class  Carousels  extends  React.Component{
   
    render(){
        return(
            <div  className="content-details">
                <Card  title="轮播图" className="card-wrap">
                    <Carousel afterChange={onChange}>
                        <div>
                        <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}

export default Carousels 