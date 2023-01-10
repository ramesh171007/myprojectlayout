import './index.css'

const TabItem = props => {
  const {tabDetails, tabClicked, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabButton = isActive ? 'active-tab-btn' : ''

  const onClickTab = () => {
    tabClicked(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabButton}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
