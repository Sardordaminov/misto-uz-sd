import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import ChangeTitle from '../../components/TitleChange/change-title'

const NotFound = () => {
  ChangeTitle('Nothing found :(')
  return (
    <div className='not-found'>
      <h1>Nothing found :(</h1>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default NotFound