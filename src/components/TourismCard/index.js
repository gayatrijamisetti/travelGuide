import './index.css'

const TourismCard = props => {
  const {tourDetails} = props
  const {imageUrl, name, description} = tourDetails

  return (
    <li>
      <div className="tourism-container">
        <img src={imageUrl} alt={name} className="image" />
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default TourismCard
