import React from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import { BsSearch, BsFillArrowRightCircleFill, BsFillFilePersonFill } from 'react-icons/bs';

const Chat = () => {
    return (
        <>
            <h1>User</h1>
            <div className="container">
                <LeftPanel />                
                <RightPanel />
            </div>
        </>
    )
}

export default Chat