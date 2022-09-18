import React from 'react';

export const Sidebar = ({ handleClick }) => {
  return (
    <div className=' sideBar'>
      <div class='flex flex-col justify-between w-16 h-screen bg-black border-r '>
        <div>
          <div class='inline-flex items-center justify-center w-16 h-16'>
            <span class='block w-10 h-10 bg-gray-200 rounded-lg'>
              <img
                src='https://media.istockphoto.com/photos/beautiful-smiling-girl-with-coral-lips-and-wet-hair-posing-isolated-picture-id1165189691?b=1&k=20&m=1165189691&s=170667a&w=0&h=310OlSnZIxAPBeqD2bfI9DdxEDMtrMjSaH1GqkznXL0='
                alt=''
                style={{
                  width: '40px',
                  height: '40px',
                  overFlow: 'hidden',
                  borderRadius: '5px',
                }}
              />
            </span>
          </div>

          <div class='border-t border-gray-100'>
            <nav class='flex flex-col p-2'>
              <div class='py-4'>
                <a
                  href='#'
                  class='flex justify-center px-2 py-1.5 t text-blue-700 rounded bg-blue-50 group relative bg-yellow-700'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-5 h-5 opacity-75 '
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>

                  <span class='absolute text-xs font-medium text-white bg-purple-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                    General
                  </span>
                </a>
              </div>

              <ul class='pt-4 border-t border-gray-100 space-y-1'>
                <li>
                  <a
                    href='#'
                    class='flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-5 h-5 opacity-75 text-purple-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>

                    <span class='absolute text-xs font-medium text-white bg-purple-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Teams
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    class='flex relative group justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-5 h-5 opacity-75 text-purple-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                      />
                    </svg>

                    <span class='absolute text-xs font-medium text-white bg-purple-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Billing
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    class='flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-5 h-5 opacity-75 text-purple-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                      />
                    </svg>

                    <span class='absolute text-xs font-medium text-white bg-purple-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Invoices
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    class='relative group flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-5 h-5 opacity-75 text-purple-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>

                    <span class='absolute text-xs font-medium text-white bg-purple-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Account
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class='sticky inset-x-0 bottom-0 p-2 bg-yellow-700 border-t border-gray-100'>
          <form action='/logout'>
            <button
              type='submit'
              class='flex justify-center w-full px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:bg-black hover:text-gray-700 group relative '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-5 h-5 opacity-75 text-rose-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                />
              </svg>

              <span class='absolute text-xs font-medium text-white bg-purple-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100 '>
                <button type='submit' onClick={() => handleClick('form')}>
                  Logout
                </button>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

