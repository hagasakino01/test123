import React from 'react'
import BoxPost from '../BoxPost/BoxPost'
import { Link, useNavigate } from 'react-router-dom'
import API from '../../../../Service/API'
import BoxCreatePost from '../BoxCreatePost/BoxCreatePost'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fixYourPost , delYourPost, getYourPost} from '../../../../features/yourPost/yourPostSlice'

export const LeftLayout = () => {
    const[infor,setInfor]= useState()
    // const[listYourPost,setListYourPost]= useState()
    const leftPosts = useSelector((state)=>state.yourPost.listYourPost)
    const leftPost = useSelector((state)=>state.yourPost.yourPost)
    
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const Token = {
        Token: localStorage.getItem('token'),
    }

    const handleLogout = async (data) => {
        try {
            const { data: res } = await API.post('api/authentication/log-out', data);
            console.log(res)
            if (res && res.status === 200) {

                navigate('/Login')
            }

        } catch (error) {
            console.error(error);
        }
    }
    const handleGetinfor =async()=>{
        try{
            const {data: res}= await API.get('api/authentication')
            setInfor(res.data)
            
        } catch(error){
            console.error(error);
        }
    }
    

    const handleGetYourPosts= async()=>{
        try{
            const {data: res}= await API.get('api/posts/me?offset=0&limit=10')
            // setListYourPost(res.data)
            dispatch(getYourPost(res.data))
        }catch(error){
            console.error(error);
        }
    }
    
   
    

    useEffect(()=>{
        handleGetinfor()
    },[])
    
    useEffect(()=>{
        handleGetYourPosts()
    },[])
    
    const clickAvatar = async(e)=>{
            try {
                const form = new FormData()
                form.append('file', e.target.files[0])
                const {data:res} = await API.post('api/users/avatar', form)
                console.log(res)
                if(res.resCode===0){
                    handleGetinfor()
                }
            } catch (error){
                console.log(error)
            }
    }

    const avatar=infor?.avatar?.url
    const data={}
    
    
    return (
        <div className='left-home'>
            <div className='top-left-home'>
                <img src="https://s3-alpha-sig.figma.com/img/0afb/f112/6a75c5487e12dfce8de34703f8512c74?Expires=1653868800&Signature=Ouj0B7MKzp9NBNKPEBjXdGdbBBgfE-juJDdyCtiDkrXzOEChDI~6WohGLkHGZ4KYaOfqB7ZNXbH0hZsGP6itYYbJcGyz0Z6c~T8WKcocJPswRUmO02Jp7nshHjccuZ8B0Poomz5wp2CaGfvW-puBvhyrGrTrF0egfecFKNTui~3nLQqhGY23R2MiRnEsAGdmZ5AuPyuqC90v~slzoS95l8kJ5kE3hjesxFqAH~Y7zdWzPnG4L~Rw8-5NAqTh~id7-XZ6~cj458zmuktfgoQyZiDPlilQCVmqJPEfXeROAfvfKzAVxP002kk6w3TNdq7nKBQyYXLAcABO1x~GrJaHMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className='logo' />
                <button className='logout' onClick={() => handleLogout(Token)} >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/OOjs_UI_icon_logOut-ltr-invert.svg/1024px-OOjs_UI_icon_logOut-ltr-invert.svg.png" alt="" className='icon-logout' />
                    <Link className='text-logout' to=''>Logout</Link>
                </button>
            </div >
            <div className='left-content'>
                <div className='left-top'>
                    <div className='profile'>
                        <div className='box-avatar'>
                            <input type="file" id='input-avatar' className='input-avatar' onChange={clickAvatar} />
                            <label htmlFor="input-avatar">
                            <img src={avatar} alt="" className='avatar' />
                            </label>
                        </div>
                        <p className='name-home'>{infor?.fullName}</p>
                        <p className='job'>Wildlife Photographer</p>
                    </div>

                    <BoxCreatePost data={data} handleGetYourPosts={handleGetYourPosts} />

                </div>
                <div className='left-bot'>
                    <p className='text-posted'>Posted</p>
                    {leftPosts?.map((e,index )=> (
                        <BoxPost   name={e.author.firstName +' '+ e.author.lastName } content={e.content} updatedAt={e.updatedAt}  id={e._id} file={e.file} avatar={avatar} data={data} index={index}  handleGetYourPosts={handleGetYourPosts}/>
                    ))}
                </div>
            </div>


        </div>
    )
}