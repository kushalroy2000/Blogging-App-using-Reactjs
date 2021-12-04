import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import Card from '../UI/Card'
import './index.css'
import { getusers } from '../../apis'
import { NavLink } from 'react-router-dom'

const Sidebar = (props) => {

    const [post, setpost] = useState([])

    useEffect(() => {
        getAllUser();
    }, [post])

    const getAllUser = async () => {
        const res = await getusers()
        setpost(res.data)
    }

    // const [posts, setposts] = useState([])

    // useEffect(() => {
    //     const posts = blogPost.data;
    //     setposts(posts)
    // }, [posts])


    return (
        <div className="sidebarcontainer">
            <Card>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div>
                {
                    post.map(posts => {
                        return (
                            <NavLink key={posts.id} to={`/post/${posts.id}`} className="nav">
                                <div className="recentPosts">
                                    <div className="recentPost">
                                        <h3>{posts.blogTitle}</h3>
                                        <span>{posts.postedOn}</span>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </Card>
        </div>
    )
}
export default Sidebar