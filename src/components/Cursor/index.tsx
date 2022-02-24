import React, { ReactElement, useEffect, useRef } from 'react'
import "./styles.scss";


function Cursor():ReactElement {
 /*    const cursorRef= useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.addEventListener('mousemove', (event :MouseEvent)  =>{
            

            const mouseX =  event.clientX -  cursorRef.current?.clientWidth / 2 ;
            const mouseY = event.clientY - cursorRef.current?.clientHeight / 2;
            cursorRef.current?.style.transform = `translate3d(${mouseX}px,${mouseY}px, 0)`;


        })
    }, []) */
    
  return (
    <div className='app-cursor' /* ref={cursorRef} */ /> 
  )
}

export default Cursor