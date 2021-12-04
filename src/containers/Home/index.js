import { Button, FormControl, FormGroup, Input, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { addPost } from '../../apis';



export default function Home() {

    const initialValue = {
        blogCategory: '',
        blogTitle: '',
        blogText: '',
        author: '',
        image: '',
        postedOn: ""
    }

    const [user, setuser] = useState(initialValue);
    const { blogCategory, blogTitle, blogText, author, postedOn } = user;
    const history = useHistory()

    const onValueChange = (e) => {
        console.log(e.target.value)
        setuser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const addPostDetails = async () => {
        await addPost(user)
        history.push('./post')
    }

    const timeUpdate = () => {
        const date = new Date().toLocaleString()
    }

    return (
        <div>
            <FormGroup>
                <FormControl>
                    <InputLabel>BlogCategory</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="blogCategory" />
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl>
                    <InputLabel>BlogTitle</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="blogTitle" />
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl>
                    <InputLabel>BlogText</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="blogText" />
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl>
                    <InputLabel>Author</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="author" />
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl>
                    <InputLabel></InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="image" type="file" />
                </FormControl>
            </FormGroup>
            <Button variant="contained" onClick={() => addPostDetails(), () => timeUpdate()} color="primary">Submit</Button>
        </div>
    )
}
