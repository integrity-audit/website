const OneColumn = ({ bgImage = false, bgColor = 'transparent', containerClass = '', colClass = '', content }) => {
  return (
    <div className={`one-column-container ${bgImage ? 'bg-image' : ''}`} style={{backgroundImage: `${bgImage && content.image !== '' ? 'url(' + content.image + ')' : 'none'}`, backgroundColor: `${bgColor}`}}>
      <div className={`container ${containerClass !== '' ? containerClass : ''}`}>
        <div className={`column ${colClass}`}>
          {content.content}
        </div>
      </div>
    </div>
  )
}

export default OneColumn