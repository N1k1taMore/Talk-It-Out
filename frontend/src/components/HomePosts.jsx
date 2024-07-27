/* eslint-disable react/prop-types */
import {IF} from '../url'


const HomePosts = ({post}) => {
  return (
    <div className="shadow-2xl w-[100%] flex mt-8 space-x-4 rounded-lg">
    {/* left */}
    <div className="w-[25%] h-[150px] flex justify-center items-center mr-[4px]">
    <img src={IF+post.photo} alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[70%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      {post.title}
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@{post.username}</p>
       <div className="flex space-x-2 text-sm ">
       <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
       </div>
      </div>
      <p className="text-sm md:text-lg">{post.desc.slice(0,200)+" ...Read more"}</p>
    </div>

    </div>
  )
}

export default HomePosts

