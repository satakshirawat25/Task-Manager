import React from 'react'
import axiosInstance from './axiosInstance'
import { API_PATHS } from './apiPaths'

const uploadImage = async(imageFile) => {
    const formData = new FormData()

    //appenf file
    formData.append('image',imageFile)

    try {
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE,formData,{
            headers:{
                'Content-Type':'multipart/form-data',//set header for file upload
            },
        })
        return response.data //return response data
    } catch (error) {
        console.log("error uploading the image",error)
        throw error
    }
  
}

export default uploadImage
