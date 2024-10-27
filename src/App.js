import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    latestHistoryList: initialHistoryList,
    isTrue: false,
  }

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {latestHistoryList} = this.state
    const updatedHistoryList = latestHistoryList.filter(each => each.id !== id)

    if (updatedHistoryList.length === 0) {
      this.setState({latestHistoryList: updatedHistoryList, isTrue: true})
    } else {
      this.setState({latestHistoryList: updatedHistoryList})
    }
  }

  render() {
    const {searchInput, latestHistoryList} = this.state
    let {isTrue} = this.state
    const searchResults = latestHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (searchResults.length === 0) {
      isTrue = true
    }
    return (
      <div className="bg-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="search-box-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              placeholder="Search history"
              className="search-bar"
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="bottom-container">
          {!isTrue && (
            <ul className="unorderlist-container">
              {searchResults.map(eachObj => (
                <li className="list-container" key={eachObj.id}>
                  <p className="time">{eachObj.timeAccessed}</p>
                  <div className="container">
                    <div className="title-container">
                      <img
                        src={eachObj.logoUrl}
                        alt="domain logo"
                        className="logo"
                      />
                      <p className="title">{eachObj.title}</p>
                      <p className="domainUrl">{eachObj.domainUrl}</p>
                    </div>
                    <button
                      type="button"
                      data-testid="delete"
                      onClick={() => this.onDelete(eachObj.id)}
                      className="delete-button"
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        alt="delete"
                        className="delete-icon"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {isTrue && (
          <div>
            <div className="list-container">
              <p>There is no history to show</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
