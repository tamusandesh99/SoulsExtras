import React from 'react'
import './index.scss'
import { useState } from 'react'

const DropAreaColumn = ({onDrop}) => {
    const [showDropArea, setShowDropArea] = useState(false)
  return (
    <div
    onDragEnter={() => setShowDropArea(true)} 
    onDragLeave={() => setShowDropArea(false)}
    onDrop={() => {onDrop()}}
    onDragOver={(e) => e.preventDefault()}
    className={showDropArea ? 'opponent-drop-true' : 'hide-opponent-drop'} >
    Drag it here
  </div>
  )
}

export default DropAreaColumn
