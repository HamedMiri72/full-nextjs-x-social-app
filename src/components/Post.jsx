import React from 'react'
import Image from './Image'
import PostInfo from './PostInfo'

function Post() {
  return (
    <div className='p-4 border-y-[1px] border-borderGray'>
        {/* POST TYPE */}
        <div className='flex items-center text-sm gap-2 text-textGray mb-2 font-bold'>
            icon
            <span>Hamed miri reposted</span>
        </div>
        {/* POST CONTENT */}
        <div className='flex gap-4 '>
            {/* AVATAR */}
            <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                <Image path="general/avatar.png" alt="" w={100} h={100} tr={true}/>
            </div>
            {/* CONTENT */}
            <div className='flex-1 flex flex-col gap-2'>
                {/* TOP */}
                <div className='flex items-center justify-between gap-2'>

                    <div className='flex items-center gap-2 flex-wrap'>
                        <h1 className='text-md font-bold'>Hamed Miri</h1>
                        <span className='text-textGray'>@Hamedmiri72</span>
                        <span className='text-textGray'>1 day ago</span>
                    </div>
                    <PostInfo/>

                </div>
                {/* TEXT AND MEDIA */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aliquid omnis? Libero dolores nostrum possimus natus, alias dignissimos similique qui error inventore quis placeat assumenda pariatur distinctio! Quod, labore numquam.</p>

                <Image path="general/post.jpeg" alt="post" w={600} h={600}/>

            </div>
            
            
        </div>
    </div>
  )
}

export default Post