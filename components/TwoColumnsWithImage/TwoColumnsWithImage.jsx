import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper'

const TwoColumnsWithImage = ({ container = false, imageOnRight = false, containerClass = '', columnImageClass = '', columnContentClass = '', content }) => {
  return (
    <div className={`two-columns-with-image-container ${container ? '' : 'grid grid-cols-1 lg:grid-cols-2 bg-[#F6F6F6]'}`}>
      <ConditionalWrapper
        condition={container}
        wrapper={children => <div className={`container grid grid-cols-1 lg:grid-cols-2 ${containerClass}`}>{children}</div>}
      >
        <div className={`column-image ${columnImageClass !== '' ? columnImageClass : 'bg-center'} ${imageOnRight ? 'order-last' : ''}`} style={{backgroundImage: `url(${content.image})`}}></div>
        <div className={`column-content ${columnContentClass}`}>
          {content.content}
        </div>
      </ConditionalWrapper>
    </div>
  )
}

export default TwoColumnsWithImage