import React from 'react'
import { BsSearch, BsFillFilePersonFill } from 'react-icons/bs';


const LeftPanel = () => {
    return (
        <div className='left-panel'>
            <span className="input-group-text"><BsSearch /></span>
            <input type="text" className="form-control" placeholder="Search..."></input>
            <div className="user-list">
                <div className="user">
                    <BsFillFilePersonFill className='user-icon' />
                    <h4>user 1</h4>
                </div>
                <div className="user">
                    <BsFillFilePersonFill className='user-icon' />
                    <h4>user 1</h4>
                </div>
                <div className="user">
                    <BsFillFilePersonFill className='user-icon' />
                    <h4>user 1</h4>
                </div>

            </div>
            <div className='group-list'></div>
        </div>
    )
}

export default LeftPanel