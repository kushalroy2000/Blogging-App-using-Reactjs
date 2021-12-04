import React from 'react'
import Blogpost from '../../components/Blogpost'
import Sidebar from '../../components/Sidebar'
import './index.css'

const Post = (props) => {



    return (
        <section className="container">
            <Blogpost {...props}/>
            <Sidebar {...props} />
        </section>
    )
}
export default Post