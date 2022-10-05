import { infoContent } from '../../content/Footer/infoContent.js'

const FooterInfo = () => {
  return (
    <div className="info-container">
      {infoContent.map(({icon, content}, idx) =>
        <div key={idx} className="info-item">
          {icon}
          {content}
        </div>
      )}
    </div>
  )
}

export default FooterInfo