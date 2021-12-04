import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import Card from '../UI/Card'
import './index.css'
import first from '../../blogpostphotos/first.jpg'
import { getusers, deletePost } from '../../apis'

const Blogpost = (props) => {

    const [post, setpost] = useState([])

    useEffect(() => {
        getAllUser();
    }, [])

    const getAllUser = async () => {
        const res = await getusers()
        console.log(res.data)
        setpost(res.data)
    }

    const deletePostData = async (id) => {
        await deletePost(id)
        getAllUser()
    }

    // const [post, setPost] = useState({})
    // const [postid, setpostid] = useState('')

    // useEffect(() => {
    //     const postid = props.match.params.postid
    //     const post = blogPost.data.find(post => post.id == postid)
    //     setPost(post)
    //     setpostid(postid)
    // }, [post, props.match.params.postid])
    // console.log(blogPost.data[0].blogImage)

    return (
        <div className="blogpostcontainer">
            {
                post.map(posts => {
                    return (
                        <Card>
                            <div className="blogheader">
                                <span className="blogcategory">{posts.blogCategory}</span>
                                <h1 className="posttitle">{posts.blogTitle}</h1>
                                <span className="postedBy">Posted on {posts.postedOn} By {posts.author}</span>
                            </div>
                            <div className="postImagecontainer">
                                <img src={first} alt="post Image" />
                            </div>
                            <div className="postContent">
                                <h3>{posts.blogTitle}</h3>
                                <p>{posts.blogText}</p>
                                <div className="button">
                                    <Button variant="contained" onClick={() => deletePostData(posts.id)} color="secondary">DELETE</Button>
                                </div>
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
}
export default Blogpost
