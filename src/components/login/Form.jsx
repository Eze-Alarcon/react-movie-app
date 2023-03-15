/* eslint-disable multiline-ternary */
/* eslint space-before-function-paren: 0 */

import React from 'react'
import IconLogo from '../../resources/svg/IconLogo'

/*
  TO DO:
  * Show error message on form
  * Do something with the form on submit
*/

function Form({ login }) {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <aside className='h-screen w-full grid place-content-center pb-16'>
      <section className='min-h-[365px] w-[330px] bg-darkBlue rounded-xl grid place-content-center relative py-8'>
        <div className='absolute -top-16 w-full flex justify-center'>
          <IconLogo />
        </div>
        <article className='w-[280px] flex flex-col justify-between gap-6 font-light'>
          <h2 className='text-2xl tracking-wider'>Login</h2>
          <form
            action=''
            onSubmit={handleSubmit}
            className='grid gap-6 caret-red'
          >
            <input
              type='email'
              name='user'
              id='userEmail'
              placeholder='Email address'
              className='w-full form-input bg-darkBlue outline-none border-0 border-b-2 focus:ring-0 focus:border-white hover:cursor-pointer'
            />
            <input
              type='password'
              name='password'
              id='userPassword'
              placeholder='Password'
              className='w-full form-input bg-darkBlue outline-none border-0 border-b-2 focus:ring-0 focus:border-white hover:cursor-pointer'
            />
            {login ? (
              <></>
            ) : (
              <input
                type='password'
                name='repeatpassword'
                id='userRepeatPassword'
                placeholder='Repeat password'
                className='w-full form-input bg-darkBlue outline-none border-0 border-b-2 focus:ring-0 focus:border-white hover:cursor-pointer'
              />
            )}
            <button
              type='submit'
              className='w-full h-12 bg-red rounded-md mt-4 hover:bg-white hover:text-black'
            >
              {login ? 'Login to your account' : 'Create an account'}
            </button>
          </form>
          <div className='flex justify-center space-x-2'>
            <p>{login ? "Don't" : 'Already'} have an account?</p>
            {login ? (
              <a href='#.' className='text-red'>
                Sign Up
              </a>
            ) : (
              <a href='#.' className='text-red'>
                L ogin
              </a>
            )}
          </div>
        </article>
      </section>
    </aside>
  )
}

export { Form }
