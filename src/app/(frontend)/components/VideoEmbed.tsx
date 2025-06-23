import React from 'react'

interface VideoEmbedProps {
  videoUrl: string
}

const getEmbedUrl = (videoUrl: string): string | null => {
  if (!videoUrl) return null
  const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?v%3D)([\w-]{11}).*/
  const youtubeMatch = videoUrl.match(youtubeRegex)
  if (youtubeMatch && youtubeMatch[2]) {
    return `https://www.youtube.com/embed/${youtubeMatch[2]}`
  }
  return null
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoUrl }) => {
  const embedUrl = getEmbedUrl(videoUrl)
  if (!embedUrl) return null
  return (
    <iframe
      width="560"
      height="315"
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

export default VideoEmbed
