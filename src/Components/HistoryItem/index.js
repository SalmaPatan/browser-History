import './index.css'

const HistoryItem = props => {
  const {eachHistoryDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item">
      <div className="list-container">
        <div className="left-section">
          <p className="para">{timeAccessed}</p>

          <div className="list-content">
            <img src={logoUrl} className="logo" alt="domain logo" />
            <p>{title}</p>
            <p>{domainUrl}</p>
          </div>
        </div>

        <button type="button" onClick={onDelete} testid="delete">
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
