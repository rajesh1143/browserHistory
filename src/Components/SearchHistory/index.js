import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

class SearchHistory extends Component {
  state = {searchInput: ''}

  getFilteredDetails = id => {
    const {historyDetails} = this.props
    const filteredItem = historyDetails.filter(eachItem => eachItem.id !== id)

    return filteredItem
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {historyDetails} = this.props
    const {searchInput} = this.state
    const filteredItem = this.getFilteredDetails(historyDetails)
    const searchResults = filteredItem.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="nav-container">
          <nav className="nav-bar">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="search-logo">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div className="input-container">
              <input
                type="search"
                placeholder="Search History"
                className="input"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </nav>
        </div>
        <div className="history-container">
          <ul className="history-list-container">
            {searchResults.map(eachItem => (
              <HistoryItem
                key={eachItem.id}
                historyItemDetails={eachItem}
                deleteHistory={this.getFilteredDetails}
              />
            ))}
          </ul>

          <ul />
        </div>
      </div>
    )
  }
}

export default SearchHistory
