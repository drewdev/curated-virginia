import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div className="markdown">
          <h1 style={{marginTop: 0}}>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <a href='#' className='snipcart-add-item'
            data-item-id={post.id}
            data-item-price={post.price}
            data-item-image={post.image}
            data-item-name={post.title}
            data-item-description={post.description}
            data-item-url={"http://snipcart-gatsby.netlify.com" + post.path}>
            Reserve
          </a>
          <em
            style={{
              display: 'block',
              marginBottom: rhythm(2),
            }}
          >
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr
            style={{
              marginBottom: rhythm(2),
            }}
          />
          <ReadNext post={post} pages={route.pages} />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
