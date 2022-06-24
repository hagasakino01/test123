import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {   setInput } from '../../../../features/yourPost/inputYourPostSlice'
import { delYourPost, fixYourPost } from '../../../../features/yourPost/yourPostSlice'
import API from '../../../../Service/API'
import BoxCreatePost from '../BoxCreatePost/BoxCreatePost'

const BoxPost = (props) => {
    const [img,setImg]= useState(false)
    const content=useSelector((state)=>state.inputYourPost.inputYourPost)
    const file = useSelector((state)=>state.inputYourPost.idImg)
    const dispatch = useDispatch()
    const handlePostImg= async(data)=>{
        try{
            if(data!== null){
                setImg(true)
            }
        }catch(error){
            console.log(error)
        }
        
    }
    
    
    const data={content:content,
                file:file,
               
            }
           
    const newDataFix={
        content: data.content,
        file: {url:'https://media.istockphoto.com/vectors/loading-icon-vector-illustration-vector-id1335247217?k=20&m=1335247217&s=612x612&w=0&h=CQFY4NO0j2qc6kf4rTc0wTKYWL-9w5ldu-wF8D4oUBk='},
        author: {email: 'wolfcub2402@gmail.com', firstName: 'le', lastName: 'dat'},
        updatedAt: "load"
    }
    const handleFixPost =async(data)=>{

        try{
        const { data: res } = await API.put(`api/posts/${props.id}`,data)
        
        
        dispatch(setInput(''))
        props.handleGetYourPosts()
          
        }catch(error){
            console.log(error)
        }
    }
    


    const handleDelPost =async()=>{
        
        try{
        const { data: res } = await API.delete(`api/posts/${props.id}`)
        props.handleGetYourPosts()
        
        }catch(error){
            console.log(error)
        }
    }
    

    useEffect(()=>{
        handlePostImg(props.file)
    },[])

    const image = props.file?.url


    
    
    return (
        <div className='box-post' key={props.id} >
                        <div className='profile-post'>
                            <img src={props.avatar} alt="" className='avatar-post' /> 
                            <div className='infor'>
                                <p className='name-post'>{props.name}</p>
                                <p className='time-post'>{props.updatedAt}</p>
                            </div>
                            <div className='button-post'>
                            <button className='button-fix-post' onClick={()=> handleFixPost(data)}>
                            <img className='icon-fix' src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/282272949_1250809788989814_9166255061442441907_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4-C7YVspCUgAX-fZTc-&_nc_ht=scontent.fhan4-3.fna&oh=03_AVK7Leq7omNDqWAgnbKeb6JGk5ancYqxJeYj1YdFM0vNqw&oe=62CF1931" alt="" />
                            </button>

                            <button className='button-fix-post' onClick={()=> handleDelPost()}>
                            <img className='icon-fix' src="https://scontent.xx.fbcdn.net/v/t1.15752-9/285358601_3305383376456937_4645749114919561961_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=38UgdE2GiDkAX9S0OqB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLohBJUXquYc-1ycZjOV5he8ERoUYQdg14QwO0-vwTmYA&oe=62CEA1F7" alt="" />
                            </button>
                            </div>
                        </div>
                        <p className='post-content'>{props.content}</p>
                        <div className='left-box-img-post'>
                         { img && <img src={image} alt="" className='left-img-post' />}
                        </div>
                        <div className='comment'>
                            <img src="https://flyclipart.com/thumb2/font-comment-png-icon-free-download-654900.png" alt="" className='icon-comment'/>
                            <a href="" className='text-comment'>1 comment</a>
                        </div>
        </div>
    )
}

export default BoxPost