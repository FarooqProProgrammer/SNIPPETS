import React, { useState } from 'react'
import "./index.css"
import { AiOutlineMenu, AiOutlineHome, AiOutlineWallet } from "react-icons/ai"
import Logo from "../../assets/Logo.png"
import { AiFillMessage } from 'react-icons/ai'
import { MdGroups2 } from "react-icons/md"
import AgendaIcon from "../../assets/Agenda.png"
import ProfileIcon from "../../assets/profile.png"

export default function Sidebar() {
    const [handleSidebar, setHandleBar] = useState(false);

    const HandleSide = () => {
        if (handleSidebar === false) {
            setHandleBar(true)
        }
        else if (handleSidebar === true) {
            setHandleBar(false)
        }

    }

    return (
        <div style={{ width: handleSidebar === true ? '250px' : '65px'}} className='app_SideBar'>
            <div className="app__icon">
                <AiOutlineMenu size={35} color='#000' onClick={HandleSide} />
            </div>
            <div className="app__logo" style={{ left: handleSidebar ? '30%' : '10%' }}>
                <img src={Logo} style={{ width: handleSidebar ? '70px' : '40px', height: handleSidebar ? '70px' : '40px' }} /><br />
                {
                    handleSidebar === true ? <p>Mended</p> : ""
                }

            </div>
            <div className="app__sidebar__Links">
                <div className="app__sidebar__underLinks flex flex_start pl-5 gap-15 bg__pink__gradient">

                    <AiOutlineHome size={30} className='text-white' />
                    {
                        handleSidebar === true ? <p className='text-white'>Home</p> : ""
                    }

                </div>
                <div className="app__sidebar__underLinks flex flex_start pl-5 gap-15">
                    <AiFillMessage size={30} className='text-black' />
                    {
                        handleSidebar === true ? <p className='text-black'>Messages</p> : ""

                    }
                </div>
                <div className="app__sidebar__underLinks flex flex_start pl-5 gap-15">
                    <MdGroups2 size={30} className='text-black' />



                    {
                        handleSidebar === true ? <p className='text-black'>Mended</p> : ""

                    }
                </div>
                <div className="app__sidebar__underLinks flex flex_start pl-5 gap-15">
                    <img src={AgendaIcon} style={{ width: '30px', height: '30px' }} />
                    {
                        handleSidebar === true ? <p className='text-black'>Wallet</p>
                            : ""

                    }
                </div>
                <div className="app__sidebar__underLinks flex flex_start pl-5 gap-15">
                    <img src={AgendaIcon} style={{ width: '30px', height: '30px' }} />
                    {
                        handleSidebar === true ? <p className='text-black'>Wallet</p> : ""
                    }

                </div>
                <div className="app__sidebar__underLinks flex flex_start pl-5 gap-15">
                    <img src={ProfileIcon} style={{ width: '30px', height: '30px' }} />
                    {
                        handleSidebar === true ? <p className='text-black'>Wallet</p> : ""
                    }

                </div>
            </div>
        </div>
    )
}
