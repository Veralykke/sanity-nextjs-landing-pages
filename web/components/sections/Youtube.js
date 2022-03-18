import React from 'react'
import PropTypes from 'prop-types'
import styles from './Youtube.module.css'
import getYouTubeID from 'get-youtube-id'

function Youtube(props) {
  const id = getYouTubeID(props.url)
  const url = `https://www.youtube.com/embed/${id}`
  if (!id) {
    return <div>Missing YouTube URL</div>
  }
  return (
    <iframe
      title="YouTube Preview"
      width="560"
      height="315"
      src={url}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  )
}

export default Youtube
