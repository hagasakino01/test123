import React, { useState } from 'react'
import { useEffect } from 'react'
import { createRoutesFromChildren } from 'react-router-dom'
import API from '../../../../Service/API'

import CommentPostRight from './commentPostRight/commentPostRight'

const BoxPostRinght = (props) => {
    const [img,setImg]= useState(false)
    const [comment,setComment]= useState({})
    const [listComment,setListComment]=useState([])
    const handlePostImg= async(data)=>{
        
        try{
            if(data!== null){
                setImg(true)
            }
        }catch(error){
            console.log(error)
        }
        
    }

    const handleCreateComment = e => setComment(prevState => ({ ...prevState,[e.target.name]: e.target.value }));
    
    const createComment= async(data)=>{
        try{
            
            const { data: res }= await API.post('api/comment', data);
            console.log(res)
            setComment({})
            
                handleGetComment()
            
        }catch(error){
            console.log(error)
        }
    }
    const data={content:comment.content,
                postId: props.id
    }
    const handleGetComment= async()=>{
        try{
            const { data: res } = await API.get(`api/comment/${props.id}?skip=0&limit=10`)
            setListComment(res.data)

            
        }catch(error){
            console.log(error)
        }
    }
//   console.log(listComment)


    useEffect(()=>{
        handlePostImg(props.file)
    },[])

    useEffect(()=>{
        handleGetComment()
    },[])

    const image = props.file?.url
   
    
    return (
        <div className='box-post-right1' key={props.key}>
                <div className='head-post-right'>
                    <div className='profile-post-right'>
                        <img src="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.15752-9/278541616_349139523789688_7556886667272963489_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6xOUlmaZ73AAX_GRJeZ&_nc_ht=scontent.fhan3-4.fna&oh=03_AVLLgMGA0uqH1haiIWzIFN3ZlAwvSaL3xUdRjAjNdR7ofw&oe=62D0F805" alt="" className='avatar-right' />
                        <div className='infor-right'>
                            <p className='name-infor-right'>{props.name}</p>
                            <p className='time-infor-right'>{props.updatedAt}</p>
                        </div>

                    </div >
                    <p className='caption-right'>
                        {props.content}
                    </p>
                </div>
                <div className='body-post-right'>
                    {img && <img src={image} alt=""  className='img-post' />}
                    <div className='line'></div>
                    <div className='write-comment'>
                        <img src="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.15752-9/278541616_349139523789688_7556886667272963489_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6xOUlmaZ73AAX_GRJeZ&_nc_ht=scontent.fhan3-4.fna&oh=03_AVLLgMGA0uqH1haiIWzIFN3ZlAwvSaL3xUdRjAjNdR7ofw&oe=62D0F805" alt="" className='avatar-write-comment' />
                        <input type="text" placeholder='Write a comment...' className='input-write-comment' 
                         name="content" value={comment.content || ''} onChange={handleCreateComment} 
                         
                         />
                         <button className='button-create-comment' onClick={()=> createComment(data)}><img className='icon-create-comment' src="https://scontent.fhan4-2.fna.fbcdn.net/v/t1.15752-9/285172191_2020447591476114_4241997056787477595_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Dv4-RHwi4f4AX8yUrKp&_nc_ht=scontent.fhan4-2.fna&oh=03_AVJ7EAOmjuU5W2r_4v0iao2va1XEvnpU2sXQ4VZi2tvJNg&oe=62CD8267" alt="" /></button>

                    </div>
                    {listComment.map(e=>(
                <CommentPostRight name={e.owner.firstName +' '+ e.owner.lastName} content={e.content}   id={e._id}  />
            ))}
                    
                </div>
            </div>
    )
}

export default BoxPostRinght;