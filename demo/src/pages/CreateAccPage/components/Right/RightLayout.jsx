import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import API from '../../../../Service/API';
export const RightLayout = () => {
    const [inputs, setInputs] = useState({});
    const [err, setErr] = useState(false)
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const { data: res } = await API.post('api/authentication/register', data);
            console.log(res)
            if(res && res.status ===200){
                
                navigate('/Login')
            }
        } catch (error) {
            setErr(true)
            console.error(error);
        }
    }

    return (
        <div class="right-create">
            <div class="content">
                <img src="https://s3-alpha-sig.figma.com/img/0afb/f112/6a75c5487e12dfce8de34703f8512c74?Expires=1653868800&Signature=Ouj0B7MKzp9NBNKPEBjXdGdbBBgfE-juJDdyCtiDkrXzOEChDI~6WohGLkHGZ4KYaOfqB7ZNXbH0hZsGP6itYYbJcGyz0Z6c~T8WKcocJPswRUmO02Jp7nshHjccuZ8B0Poomz5wp2CaGfvW-puBvhyrGrTrF0egfecFKNTui~3nLQqhGY23R2MiRnEsAGdmZ5AuPyuqC90v~slzoS95l8kJ5kE3hjesxFqAH~Y7zdWzPnG4L~Rw8-5NAqTh~id7-XZ6~cj458zmuktfgoQyZiDPlilQCVmqJPEfXeROAfvfKzAVxP002kk6w3TNdq7nKBQyYXLAcABO1x~GrJaHMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" class="icon" />
                <div class="title-login">
                    <p class="title1">Create new account</p>
                    <p class="title2">Welcome back, please login in to your account</p>
                </div>
                <div class="Information">
                    <div class="email">
                        <input type="email" class="box-email" placeholder="Email"
                            name="email" value={inputs.email || ''} onChange={handleChange}
                        />
                        {err && <div class="notice">
                            <p class="text-notice">nhập lại thông tin </p>
                        </div>}
                    </div>

                    <div class="pass">
                        <input type="password" class="box-pass" placeholder="Password"
                            name="password" value={inputs.password || ''} onChange={handleChange}
                        />
                    </div>

                    <div class="firstname">
                        <input type="text" class="box-firstname" placeholder="firstname"
                            name="firstName" value={inputs.firstName || ''} onChange={handleChange}
                        />
                    </div>

                    <div class="lastname">
                        <input type="text" class="box-lastname" placeholder="Lastname"
                            name="lastName" value={inputs.lastName || ''} onChange={handleChange}
                        />
                    </div>

                    <div class="city">
                        <input type="text" class="box-city" placeholder="City"
                            name="city" value={inputs.city || ''} onChange={handleChange}
                        />
                    </div>

                    <div class="street">
                        <input type="text" class="box-street" placeholder="Street"
                            name="street" value={inputs.street || ''} onChange={handleChange}
                        />
                    </div>

                </div>
                <div class="create">
                    <button class="box-create" type='button' onClick={() => onSubmit(inputs)} >
                        <Link class="text-create" to=''>Create new account</Link>
                    </button>

                </div>


            </div>
        </div>
    )

}
