import React from 'react'

const ChatPage = () => {
  return (
    <>
      <div className='w-full h-lvh flex items-center justify-center'>
        <div className='text-primary-content'>
          Let&apos;s Chat
        </div>
      </div>
      <div className="btm-nav border-t-[1px] border-primary">
        <div className='flex flex-row'>
          <div className='flex-auto'>
            <input
              type="text"
              placeholder="Please enter your message"
              className="input w-full text-sm text-secondary-content pr-0 border-transparent focus:border-transparent focus:outline-none placeholder:text-secondary" />
          </div>
          <div className='w-12 text-center'>
            <svg className="w-5 h-5 text-secondary hover:text-secondary-content" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatPage
