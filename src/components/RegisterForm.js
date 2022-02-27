import React from 'react'

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Register</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <Link className='jump-link' to='/LoginForm'></Link>
                        <Link className='button' to='/Chat'>Start</Link>
                        {/* <button type="submit" className="button">
                            <span>Start</span>
                        </button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm