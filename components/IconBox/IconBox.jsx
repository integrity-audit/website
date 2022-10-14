import Link from 'next/link'
import Image from 'next/future/image'

const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children

const IconBox = ({ container = false, centerContent = false, iconOnLeft = false, bgContainer = 'none', containerId = '', containerClass = '', itemClass = '', content }) => {
  return (
    <div id={containerId} className="icon-box-container" style={{background: `${bgContainer}`}}>
      <div className={`container ${container ? 'p-[20px] sm:p-[50px] lg:p-[85px] bg-white' : 'p-0'} ${centerContent ? 'text-center' : ''}`}>
        {content.title !== '' && <h2>{content.title}</h2>}
        {content.description !== '' && <div className="mt-[30px]">{content.description}</div>}
        <div className={`icon-box-item-container mt-[50px] mx-auto flex flex-wrap items-start justify-center ${containerClass}`}>
          {content.items.map((item, idx) =>
            <div key={idx} className={`${itemClass}`}>
              <div className={`box-icon ${iconOnLeft ? 'icon-on-left' : ''}`}>
                <ConditionalWrapper
                  condition={item.link}
                  wrapper={children => <Link href={item.link}><a>{children}</a></Link>}
                >
                  <Image
                    className={`${centerContent ? 'mx-auto' : ''} ${iconOnLeft ? '' : 'mb-[15px] md:mb-[25px]'}`}
                    src={item.icon}
                    alt={item.alt} />
                  {item.title}
                </ConditionalWrapper>
              </div>
              {item.content !== '' && <div className="box-content">{item.content}</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default IconBox