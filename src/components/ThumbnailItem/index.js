import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, checkMatch} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const checkMatched = () => {
    checkMatch(id)
  }

  return (
    <li>
      <button type="button" onClick={checkMatched}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
