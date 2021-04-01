import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
`
const Item = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  cursor: pointer;
  &.active {
    background-color: #4CAF50;
    color: white;
  }
  &:hover:not(.active) {
    background-color: #ddd;
  }
`

function Pagination({rowsPerPage, total, page, onChange}) {
  const lastPage = Math.ceil(total/rowsPerPage)
  const items = []
  for(let i = 1; i <= lastPage; i ++) {
    items.push(i)
  }
  const navigateTo = (num) => () => onChange(num)
  return (
    <Container>
      <Item onClick={navigateTo(1)}>&laquo;</Item>
      {items.map(item =>
        <Item key={item} className={item === page ? 'active' : ''} onClick={navigateTo(item)}>{item}</Item>
      )}
      <Item onClick={navigateTo(lastPage)}>&raquo;</Item>
    </Container>
  )
}

Pagination.propTypes = {
  rowsPerPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

Pagination.defaultProps = {}

export default memo(Pagination)