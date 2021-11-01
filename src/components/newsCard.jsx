import React from 'react'

const NewsCard = ({image,title,category,published,clickSave}) => {
    return (
        <div className="w-full p-2 flex flex-col md:flex-row md:space-x-4 bg-gray-800 bg-opacity-20 cursor-pointer hover:bg-opacity-50">
            <img src={image} alt="news" className="h-32 w-full md:w-48 object-cover" />
            <div className="flex flex-col justify-between">
                <p className="text-md font-bold tracking-wider mt-1">{title}</p>
                <div className="space-x-3">
                    <span className="text-red-600">{category}</span>
                    <span className="text-sm">{published}</span>
                </div>
            </div>
            {/* tombol save onclick={clickSave(title)} */}
        </div>
    )
}

export default NewsCard
