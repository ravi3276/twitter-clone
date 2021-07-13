import React from 'react'
import './SidebarOption.css'
function SidebarOption({active,Icon,text}) {
    return (
        <div className={`sidebaroption ${active && 'sidebaroption__active'}`}>
            <Icon />
            <h4>{text}</h4>
        </div>
    )
}

export default SidebarOption
