import React from 'react'

const NewsCard = ({image,title,category,published}) => {
    return (
        <div className="w-full p-2 flex flex-row space-x-4 bg-gray-800 bg-opacity-20">
            <img src={image} alt="news" className="h-32 w-48 object-cover" />
            <div className="flex flex-col justify-between">
                <p className="text-lg font-bold tracking-wider mt-1">{title}</p>
                <div className="space-x-3">
                    <span className="text-red-600">{category}</span>
                    <span className="text-sm">{published}</span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
