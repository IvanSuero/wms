import { useState } from "react"
import { UilBars, UilSignOutAlt } from '@iconscout/react-unicons'
import {SidebarData} from "../Data/Data"
import {motion} from "framer-motion"
import '../css/Sidebar.css'
import { Link } from "react-router-dom"


export const Sidebar = () => {
    const [selected, setSelected] = useState(0)

    const [expanded, setExpanded] = useState(true)

    const sidebarVariants = {
        true: {left: '0'},
        false: {left: '-60%'}
    }

    const sidebarClick = async ({index}) => {
        await setSelected(index)
    }

    return (
        <>
            <div className="bars" style={expanded?{left:'60%'}:{left:'5%'}} onClick={()=>setExpanded(!expanded)}>
                <UilBars />
            </div>
            <motion.div className='sidebar' variants={sidebarVariants} animate={window.innerWidth<=768?`${expanded}`:''}>

                <div className="logo">
                    <span>.WMS</span>
                </div>

                <div className="menu">
                    {SidebarData.map((item, index) => {
                        return (
                            <Link 
                                className={selected === index ? "menuItem active" : "menuItem"}
                                key={index}
                                onClick={()=>sidebarClick({index})}
                                to={`/${item.heading}`}
                            >
                                <item.icon />
                                <span>{item.heading}</span>
                            </Link>
                        )
                    })}

                    <div className="menuItem">
                        <UilSignOutAlt />
                        <span>Exit</span>
                    </div>
                </div>
            </motion.div>
        </>
    )
}