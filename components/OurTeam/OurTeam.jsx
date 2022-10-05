import Image from 'next/future/image'

import { ourTeamContent } from '../../content/OurTeam/ourTeamContent.js'

const OurTeam = ({ containerId = '' }) => {
  return (
    <div id={containerId} className="team-container">
      <div className="container">
        {ourTeamContent.map((item, idx) =>
          <div key={idx} className="team-item-container">
            <div className="profile">
              <div className="picture">
                <Image
                  src={item.image}
                  alt={item.fullName} />
              </div>
              <h3 className="full-name text-center">{item.fullName}</h3>
              <h4 className="role">{item.role}</h4>
            </div>
            <div className="description">{item.description}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OurTeam