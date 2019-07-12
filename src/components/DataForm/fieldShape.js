import PropTypes from 'prop-types'

const fieldShape = PropTypes.shape({
  meta: {
    type: PropTypes.string.isRequired,
    indentLevel: PropTypes.number.isRequired,
    hasChanged: PropTypes.bool.isRequired,
  },
  data: {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  },
})

export default fieldShape
