const TwoColumnsWithImage = ({ imageOnRight = false, content }) => {
  return (
    <div className="two-columns-with-image-container">
      <div className={`column-image ${imageOnRight ? 'order-last' : ''}`} style={{backgroundImage: `url(${content.image})`}}></div>
      <div className="column-content">
        {content.content}
      </div>
    </div>
  )
}

export default TwoColumnsWithImage