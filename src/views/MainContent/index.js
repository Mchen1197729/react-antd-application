import React, {useEffect, useRef} from "react"
import zrender from 'zrender'

import './index.css'

export default function () {
  //创建用来存储zrender实例的容器 zrRef.current就是zrender的实例对象
  const zrRef = useRef(null)
  useEffect(() => {
    zrRef.current = zrender.init(document.querySelector('.main-content'), {
      renderer: 'canvas', //可以使用canvas,svg,vml作为渲染器
      devicePixelRatio: 1,
      width: '2000',
      height: '1000'
    })
    //向画布上添加一个圆 圆心(50,50) 半径40
    zrRef.current.add(new zrender.Circle({
      draggable: true,
      shape: {
        cx: 50, cy: 50, r: 40
      },
      style: {
        fill: 'pink',
        stroke: 'tomato',
        opacity: 0.5,
        lineDash: [5, 5],
        lineWidth: 3
      }
    }))

    //向画布添加一个椭圆 椭圆心(300,50) 横轴长度100 纵轴长度40
    zrRef.current.add(new zrender.Ellipse({
      draggable: true,
      shape: {
        cx: 300, cy: 50, rx: 100, ry: 40
      },
      style: {
        fill: 'pink',
        stroke: 'tomato',
        opacity: 0.5,
        lineDash: [5, 5],
        lineWidth: 3
      }
    }))

    //向画布添加一个心形  心形中心(600,50) 宽70 高100
    zrRef.current.add(new zrender.Heart({
      draggable: true,
      rotation: 45,
      origin: [600, 50],
      shape: {
        cx: 600, cy: 50, width: 70, height: 100
      },
      style: {
        fill: 'pink',
        stroke: 'tomato',
        opacity: 0.5,
        lineDash: [5, 5],
        lineWidth: 3
      }
    }))

    //向画布添加一个直线
    zrRef.current.add(new zrender.Line({
      draggable: true,
      shape: {
        x1: 565, y1: 50, x2: 600, y2: 150
      },
    }))

    //向画布添加一个正多边形
    zrRef.current.add(new zrender.Isogon({
      draggable: true,
      shape: {
        x: 100, y: 100, r: 100, n: 8
      },
      style: {
        fill: 'pink',
        stroke: 'tomato',
        opacity: 0.5,
        lineDash: [5, 5],
        lineWidth: 3
      }
    }))

    //向画布添加一个玫瑰线
    zrRef.current.add(new zrender.Rose({
      draggable: true,
      shape: {
        cx: 100, xy: 100, r: [100], k: .5, n: 5
      },
      style: {
        fill: 'pink',
        stroke: 'tomato',
        opacity: 0.5,
        lineDash: [5, 5],
        lineWidth: 3
      }
    }))

    console.log(zrRef)
  }, [zrRef])
  return (
      <div className='main-content'>

      </div>
  )
}
