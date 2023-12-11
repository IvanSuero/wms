import { useContext, useState } from "react"
import { UilBars, UilSignOutAlt } from '@iconscout/react-unicons'
import {SidebarData} from "../Data/Data"
import {motion} from "framer-motion"
import '../css/Sidebar.css'
import { Link } from "react-router-dom"
import { SidebarContext } from "../App"


export const Sidebar = () => {
    const {sidebar, setSidebar} = useContext(SidebarContext);
    const [expanded, setExpanded] = useState(true)

    const sidebarVariants = {
        true: {left: '0'},
        false: {left: '-60%'}
    }

    const sidebarClick = async ({index}) => {
        await setSidebar(index);
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
                                className={sidebar === index ? "menuItem active" : "menuItem"}
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