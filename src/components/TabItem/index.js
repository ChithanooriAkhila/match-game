import './index.css'

const TabItem = props => {
  const {tabDetails, activeId, changeThumbnails} = props
  const {tabId, displayText} = tabDetails

  const changeThumbnail = () => {
    changeThumbnails(tabId)
  }

  return (
    <li>
      <button
        type="button"
        onClick={changeThumbnail}
        className={tabId === activeId ? 'active' : ''}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
