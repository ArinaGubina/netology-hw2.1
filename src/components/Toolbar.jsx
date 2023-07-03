import PropTypes from 'prop-types'

export const Toolbar = (props) => {
  const filters = props.filters.map((x) => <button key={x} id={x} onClick={props.onSelectFilter} className={x === props.selected ? 'selected' : 'unselected'}>{x}</button>);

  return (
    <div>{filters}</div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func
}