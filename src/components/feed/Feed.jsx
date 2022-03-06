import React, { useEffect, useState } from 'react'
import './Feed.sass'
import Avatar from '../base/avatar/Avatar'
import Button from '../base/button/Button'
import Card from '../base/card/Card'
import Post from '../post/Post'
import { postFeedAPI, getFeedAPI } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { timeConverter } from '../../helper/time'

const Feed = ({ user }) => {
  const dispatch = useDispatch()
  const [feedData, setFeedData] = useState([])
  const [showUploadImage, setShowUploadImage] = useState(false)
  const [image, setImage] = useState(undefined)
  const [imageUrl, setImageUrl] = useState(undefined)
  const [feed, setFeed] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const feeds = useSelector((state) => state.feedState.feeds)
  const setFeeds = () => {
    setFeedData(feeds)
  }

  useEffect(() => {
    setFeeds()
    dispatch(getFeedAPI())
  }, [setFeeds])

  useEffect(() => {
    if (!image) {
      return
    }

    const fileURL = URL.createObjectURL(image)
    setImageUrl(fileURL)
  }, [image])

  const onImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const postFeed = () => {
    const data = {
      feed,
      user
    }
    setIsLoading(true)
    dispatch(postFeedAPI(data))
      .finally(() => {
        setIsLoading(false)
        setDefault()
      })
  }

  const setDefault = () => {
    setShowUploadImage(false)
    setImage(undefined)
    setImageUrl(undefined)
    setFeed("")
  }

  return (
    <div className='feed'>
      <Card>
        <div className='feed__post'>
          <Avatar
            height="h-12"
            width="w-12"
            avatar={user && user.photoURL ? user.photoURL : "/images/no-photo.png"}
          />
          <div className='post__container'>
            <textarea
              className='post__body'
              placeholder='Start a post'
              value={feed}
              onChange={(e) => setFeed(e.target.value)}
            />
            {
              showUploadImage && (
                <div className='flex flex-col'>
                  {
                    imageUrl && (
                      <div className='border rounded-lg object-cover object'>
                        <img src={imageUrl} />
                      </div>
                    )
                  }
                  <div className='flex justify-between py-1 px-2 border rounded-lg my-2'>
                    <input type="file" accept='image/*' className='post__upload' onChange={onImageChange} />
                    <Button
                      text={(
                        <svg viewBox="0 0 24 24" className='h-5 w-5'>
                          <path fill="red" d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z" />
                        </svg>
                      )}
                      type="btn--xs btn--pill"
                      onClick={() => {
                        setShowUploadImage(false)
                        setImage(undefined)
                        setImageUrl(undefined)
                      }}
                    />
                  </div>
                </div>
              )
            }
            <div className='post__bottom'>
              <div className='space-x-2'>
                <Button
                  text="Photo"
                  type="btn--sm font-bold btn--secondary"
                  icon={(
                    <svg viewBox="0 0 24 24" className='h-5 w-5'>
                      <path fill="#0288D1" d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
                    </svg>
                  )}
                  onClick={() => setShowUploadImage(!showUploadImage)}
                />
                <Button
                  text="Video"
                  type="btn--sm font-bold btn--secondary"
                  icon={(
                    <svg viewBox="0 0 24 24" className='h-5 w-5'>
                      <path fill="#2E7D32" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                    </svg>
                  )}
                />
                <Button
                  text="Event"
                  type="btn--sm font-bold btn--secondary"
                  icon={(
                    <svg viewBox="0 0 24 24" className='h-5 w-5'>
                      <path fill="#FF8F00" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                    </svg>
                  )}
                />
              </div>
              <Button
                text="Post"
                type="btn--primary btn--sm"
                onClick={() => postFeed()}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </Card>
      <div className='span'></div>
      {
        feedData && feedData.map((feed, i) => (
          <Post
            key={i}
            avatar={feed.actor.image}
            name={feed.actor.name}
            jobTitle={feed.actor.email}
            time={timeConverter(feed.date)}
            feed={feed.feed}
          />
        ))
      }
    </div>
  )
}

export default Feed