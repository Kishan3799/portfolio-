import React from 'react'

function Button(props) {
  return (
      <a download={props.filename} href={props.link} className='button'>{props.buttonType}</a>
  )
}

export default Button
