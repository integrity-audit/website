const Hero = ({ customImage = false, containerClass = '', contentClass = '', content }) => {
  return (
    <div className={`hero-container ${customImage ? 'custom' : 'regular'} ${containerClass}`} style={{backgroundImage: `url(${customImage && content.image !== '' ? content.image : '/img-bg-header.png'})`}}>
      <div className="container py-0">
        <div className={`column-content ${contentClass}`}>
          {content.content}
        </div>
      </div>
    </div>
  )
}

export default Hero