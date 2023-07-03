import PropTypes from 'prop-types'

export const ProjectList = (props) => {
  const items = props.items.map((x) => <img key={x} src={x.img}/>);
  return (
    <div className="project-container">
      {items}
    </div>
  )
}

ProjectList.propTypes = {
  items: PropTypes.array.isRequired,
}