import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TourismCard from './components/TourismCard'

import './App.css'

class App extends Component {
  state = {
    isLoading: false,
    tourismLists: [],
  }

  componentDidMount() {
    this.getTourismPackageLists()
  }

  getTourismPackageLists = async () => {
    this.setState({
      isLoading: true,
    })
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.packages.map(location => ({
        id: location.id,
        name: location.name,
        imageUrl: location.image_url,
        description: location.description,
      }))
      this.setState({
        tourismLists: updatedData,
        isLoading: false,
      })
    }
  }

  renderTourismPackageLists = () => {
    const {tourismLists} = this.state
    return (
      <ul className="tourism-list">
        {tourismLists.map(eachTourList => (
          <TourismCard key={eachTourList.id} tourDetails={eachTourList} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="travel-guide-container">
        <h1 className="heading">Travel Guide</h1>
        <hr className="line" />
        <div className="tour-cards-container">
          {isLoading ? this.renderLoader() : this.renderTourismPackageLists()}
        </div>
      </div>
    )
  }
}

export default App
