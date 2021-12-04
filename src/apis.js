import axios from "axios"


const url = "http://localhost:3003/user"

export const getusers = async () => {
    return await axios.get(url)
}

export const addPost = async (user) => {
    return await axios.post(url, user)
}

export const deletePost = async (id) => {
    return await axios.delete(`${url}/${id}`)
}
