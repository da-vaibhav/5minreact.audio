import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './style.css'

const DisqusThread = require('react-disqus-thread')

class SitePost extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        const home = (
        <div>
          <Link className='gohome' to={ prefixLink('/') }> All episodes
          </Link>
        </div>
        )

        return (
            <div>
              { home }
              <div className='blog-single'>
                <div className='text'>
                  <h1>{ post.title }</h1>
                   <div className='date-published'>
                    { moment(post.date).format('DD MMMM YYYY') }
                  </div>
                  <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                  <DisqusThread
                    shortname="5minreact-audio"
                    title={post.title}
                    url={`http://5minreact.audio${this.props.location.pathname}`}
                  />
                </div>
              </div>
            </div>
            );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default SitePost
