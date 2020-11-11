import React from 'react'

type ButtonProps = {
  text: string
  border: 'success' | 'error'
}

export const Button = ({text, border}: ButtonProps) => {

  const style = {
    border: `5px solid ${border === 'success' ? 'green' : 'red'}`
  }
  return (
    <div>
      <button style={style}>{text}</button>
    </div>
  )
}

