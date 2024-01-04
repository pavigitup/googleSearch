import SuggestionItem from '../SuggestionItem/index'
import './index.css'

const GoogleSuggestions = props => {
  const {suggestionsList} = props

  return (
    <div className="google-main">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt="google logo"
        />
      </div>
      <div className="google-con-1">
        <div className="google-con">
          <div className="search-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <div className="input-con">
            <input type="search" placeholder="Search Google" />
          </div>
        </div>
        <ul>
          {suggestionsList.map(each => (
            <SuggestionItem itemsList={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GoogleSuggestions
