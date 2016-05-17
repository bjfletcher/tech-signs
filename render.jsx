import React from 'react'
import ReactDOMServer from 'react-dom/server'

import data from './data'

const Video = ({ id }) => (
	<video className="video" controls loop preload="metadata" poster={`posters/${id}.jpg`} src={`clips/${id}.mp4`}></video>
)

const TagList = ({ tags }) => {
	const tagElements = tags.map((tag) => (
			<li className="tag-list__tag">
				{tag}
			</li>
	))
	return (
			<ol className="tag-list">
				{tagElements}
			</ol>
	)
}

const SignList = ({ signs }) => {
	const signElements = signs.map((sign) => (
			<li className="sign-list__sign">
				<Video id={sign.id} />
				<TagList tags={sign.tags} />
			</li>
	))
	return (
			<ol className="sign-list">
				{signElements}
			</ol>
	)
}

console.log(ReactDOMServer.renderToStaticMarkup(<SignList signs={data}/>))