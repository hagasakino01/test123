import React from 'react'
import { Routes, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import API from '../../../../Service/API';


export const RightLayout = () => {
    const [inputs, setInputs] = useState({});
    const [err, setErr]= useState(false)
    const navigate = useNavigate();

    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const onSubmit = async (data) => {
        try {
            const { data: res } = await API.post('api/authentication/log-in', data);
            console.log(res)

           if(res && res.status === 200) {
               localStorage.setItem('token', res.data.accessToken)
                navigate('/home')
           }
           else(
            setErr(true) 
           )
        } catch (error) {
            setErr(true)
            console.error(error);
        }
    }





    return (
        <div className="right-login">
            <div className="content">
                <img src="https://s3-alpha-sig.figma.com/img/0afb/f112/6a75c5487e12dfce8de34703f8512c74?Expires=1653868800&Signature=Ouj0B7MKzp9NBNKPEBjXdGdbBBgfE-juJDdyCtiDkrXzOEChDI~6WohGLkHGZ4KYaOfqB7ZNXbH0hZsGP6itYYbJcGyz0Z6c~T8WKcocJPswRUmO02Jp7nshHjccuZ8B0Poomz5wp2CaGfvW-puBvhyrGrTrF0egfecFKNTui~3nLQqhGY23R2MiRnEsAGdmZ5AuPyuqC90v~slzoS95l8kJ5kE3hjesxFqAH~Y7zdWzPnG4L~Rw8-5NAqTh~id7-XZ6~cj458zmuktfgoQyZiDPlilQCVmqJPEfXeROAfvfKzAVxP002kk6w3TNdq7nKBQyYXLAcABO1x~GrJaHMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="icon" />
                <div className="title-login-login">
                    <p className="title1-login">Login</p>
                    <p className="title2-login">Welcome back, please login in to your account</p>
                </div>

                <div className="Information-login">
                    <div className="email-login">
                        <input type="text" className="box-email-login" placeholder="Email"
                            name="email" value={inputs.email || ''} onChange={handleChange}
                        />


                        {err && <div className="notice">
                            <p className="text-notice">sai tài khoản</p>
                        </div>}

                    </div>
                    <div className="pass-login">
                        <input type="password" className="box-pass-login" placeholder="Password"
                            name="password" value={inputs.password || ''} onChange={handleChange}
                        />

                    </div>

                </div>
                <a href="" className="fp">Forget Password?</a>
                <div className="selection">
                    <button className="box-login" type="button" onClick={() => onSubmit(inputs)} >
                        <Link className="text-login" to=''>Login</Link>
                    </button>


                    <button className="box-create-login">
                        <Link className="text-create" to='/CreateAcc'> Create new account </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}