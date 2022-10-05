import Link from 'next/link'

import { FaBookOpen } from 'react-icons/fa'
import { articlesContent } from '../../content/Articles/articlesContent.js'

const Articles = () => {
  return (
    <div id="index" className="articles-container">
      <div className="container">
        <div className="articles-index text-white">
          <h2 className='text-white'>Articles</h2>
          <ul>
            {articlesContent.map((item, idx) =>
              <Link key={idx} href={`#${item.slug}`}>
                <li>
                  <FaBookOpen size="30" />
                  {item.title}
                </li>
              </Link>
            )}
          </ul>
        </div>
        {articlesContent.map((item, idx) =>
          <div key={idx} id={item.slug} className="articles-item-container">
            <div className="meta">
              <h3 className="title">{item.title}</h3>
              {item.author !== '' && <h4 className="author">By {item.author}</h4>}
            </div>
            <div className="content">
              {item.content}
              <p className="link-index"><Link href="#index">back to index</Link></p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Articles