/* eslint space-before-function-paren: 0 */
import React from 'react'

function Mark({ marked }) {
  return (
    <svg
      width='12'
      height='14'
      viewBox='0 0 12 14'
      xmlns='http://www.w3.org/2000/svg'
      className={`${
        marked
          ? 'fill-white group-active/container:stroke-black group-active/container:fill-black xl:group-hover/container:stroke-black xl:group-hover/container:fill-black'
          : 'fill-none group-hover/active:stroke-black xl:group-hover/container:stroke-black'
      } stroke-white`}
    >
      <path
        d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z'
        strokeWidth='1.5'
      />
    </svg>
  )
}

export { Mark }
