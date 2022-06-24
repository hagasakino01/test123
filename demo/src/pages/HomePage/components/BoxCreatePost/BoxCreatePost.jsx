import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearImg, clearInput, setImg, setInput } from '../../../../features/yourPost/inputYourPostSlice';
import { addYourPost } from '../../../../features/yourPost/yourPostSlice';
import API from '../../../../Service/API'

const BoxCreatePost = (props) => {
    // const [inputs, setInputs] = useState({});
    // const [idImg, setIdImg] = useState('')
    const [err,setErr]=useState(false)
    const [errImg,setErrImg]=useState(false)
    // const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const dispatch= useDispatch()
    const handleChange = e => dispatch(setInput( e.target.value ))

    const input = useSelector((state)=>state.inputYourPost.inputYourPost)
    const idImg = useSelector((state)=>state.inputYourPost.idImg)
    const onChange = async (e) => {
        // setImg()
        try {
            const form = new FormData()
            form.append('file', e.target.files[0])
            const res = await API.post('/api/resource/upload/image-public', form)
            // setIdImg({...idImg, file: res.data.data._id })
            dispatch(setImg( res.data.data._id ))
            setErrImg(false)
        } catch (error){
            console.log(error)
            setErrImg(true)
        }
    }
  console.log(idImg)
   
     const data = { content: input,
                    file: idImg,
                    title: "title 000"
                }
  
      props.data.content =  input
      props.data.file = idImg
      props.data.title ="title 000"
                
    
      

      const dataNewPost ={
        author: {email: 'wolfcub2402@gmail.com', firstName: 'le', lastName: 'dat'},
        content: input,
        file: {url: 'https://media.istockphoto.com/vectors/loading-icon-vector-illustration-vector-id1335247217?k=20&m=1335247217&s=612x612&w=0&h=CQFY4NO0j2qc6kf4rTc0wTKYWL-9w5ldu-wF8D4oUBk='},
        updatedAt:'load'
      }

    const handleCreatePost = async(data)=>{
        try{
          
            const { data: res }= await API.post('api/posts', data);
            console.log(res)
            if(res.statusCode === 422){
                setErr(true)
            }
            if(res && res.status === 200){
                setErr(false)
                // setInputs({})
                dispatch(setInput(''))
                dispatch(setImg(''))
                // props.handleGetYourPosts()
                dispatch(addYourPost(dataNewPost))
                load()
            }
            
        } catch(error){
            setErr(true)
            console.log(error)
        }
    }

    const load=()=>{
        setTimeout(() => {
            props.handleGetYourPosts()
        }, 1000);
    }

    return (
        <div className='container-create-status'> 
            <div className='status'>
                <div className='box-status'>
                    <input type="text" className='text-status' placeholder='Hi! What are you thinking?' 
                        name="content" value={input || ''} onChange={handleChange}
                    />
                    <button className='add-photos' >
                        <input className='input-file' id='file' type="file"  onChange={onChange} placeholder='upload img'  />
                        <label htmlFor="file" className='input-file-lb'>Select_Image</label>
                        <img src="https://cdn0.iconfinder.com/data/icons/thin-line-color-2/21/23-512.png" alt="" className='icon-photos' />
                    </button>

                </div>
                {err && <div className="notice">
                                <p className="text-notice">chưa đủ thông tin bài đăng</p>
                            </div>}
                {errImg && <div className="notice">
                                <p className="text-notice">kích thước ảnh quá lớn</p>
                            </div>}
                <button className='create-status'
                    onClick={() => handleCreatePost(data)}
                >
                    <p className='text-create-status'>Create Post</p>
                </button>
            </div>
        </div>
    )
}

export default BoxCreatePost;


