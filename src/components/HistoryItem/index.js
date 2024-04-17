import './index.css'

function HistoryItem(props) {
  const {eachItem, deleteFun} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const deleteItem = () => {
    deleteFun(id)
  }

  return (
    <li className="each-history-item">
      <p className="time">{timeAccessed}</p>
      <div className="item-delete-container">
        <div className="logo-domain-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-domain">
            <p className="title-name">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button type="button" onClick={deleteItem} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-btn"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
