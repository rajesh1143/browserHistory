import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, tittle, domainUrl} = historyItemDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-items-container">
      <div className="list-items">
        <p>{timeAccessed}</p>
        <div className="domain-detail-list">
          <img className="domain-logo" src={logoUrl} alt={domainUrl} />
          <p>{tittle}</p>
          <p>{domainUrl}</p>
        </div>
      </div>
      <div>
        <button type="button" className="delete-button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
