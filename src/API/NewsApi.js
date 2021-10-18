import React, { createContext, useState, useEffect } from "react"
import axios from 'axios'

export const NewsApi = createContext()

export const NewsApiAkses = (props) => {
    const [data, setData] = useState()
    const apiKey = "5ec2f4281d4a488782bd6ef69127397a"
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`
        )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error))
    }, [data])
    return (
        <NewsApi.Provider value={{ data }}>
            {props.children}
        </NewsApi.Provider>
    )
}