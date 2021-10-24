import React from 'react'

const NewsSideCard = ({image,title,category}) => {
    return (
        <div className="w-full py-4 px-2 flex flex-row justify-between space-x-2 bg-gray-800 bg-opacity-20">
              <img src={image} alt="news" className="h-20 w-20 object-cover mt-3" />
            <div className="flex flex-col justify-between ">
                <p className="tracking-wider mt-1">{title}</p>
                <div className="space-y-3">
                    <span className="text-red-600 text-sm">{category}</span>
                </div>
            </div>
        </div>
    )
}

export default NewsSideCard
