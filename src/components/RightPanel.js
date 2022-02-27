import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const RightPanel = () => {
    return (
        <div className='right-panel'>
            <div className='row'>Contact-name</div>
            <div className="chat-history">
                <li><div className="messagedata-received">Hey, you free?</div></li>
                <li><div className="messagedata-sent">No, not yet</div></li>
                <li><div className="messagedata-received">sbab</div></li>
                <li><div className="messagedata-sent">vnxgn</div></li>

            </div>
            <div className="input-message">
                <input className='message' type="text" placeholder='Enter message here' />
                <BsFillArrowRightCircleFill className='input-icon' />
            </div>
        </div>
    )
}

export default RightPanel