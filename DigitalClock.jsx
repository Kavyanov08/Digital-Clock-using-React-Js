import React, { useEffect, useState } from 'react'

export const DigitalClock = () => {
    const[currenttime,setCurrenttime]=useState(new Date())
    
    useEffect(()=>{
        const timer=setInterval(()=>{
            setCurrenttime(new Date())
        },1000)
        return ()=>clearInterval(timer)
    },[])

    const formathour=(hour)=>{
        return hour=== 0 ? 12 : hour >12 ? hour-12 :hour ;
    }
    const timewithzero=(num)=>{
        return num < 10 ? `0${num}` : num;
    }
    const formatdate=(date)=>{
        const options={weekday:'long',year:'numeric',month:'long',day:'numeric'}
        return date.toLocaleDateString(undefined,options)
    }
  return (
    <>
    <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">{timewithzero(formathour(currenttime.getHours()))} :
            {timewithzero(currenttime.getMinutes())} :
            {timewithzero(currenttime.getSeconds())} {currenttime.getHours()>=12 ? ' PM' : ' AM'}
        </div>
        <div className="date">{formatdate(currenttime)}</div>
    </div>
    </>
  )
}
