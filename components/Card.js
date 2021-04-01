import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 2px 16px 16px 16px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
const Line = styled.p`
  margin: 4px;
`

function Card({userId, title, description}) {
  const textLines = description.split('\n')
  return (
    <Container>
      <h4><b>{`User ${userId}`}</b> - {title}</h4>
      {textLines.map((line, index) => <Line key={index}>{line}</Line>)}
    </Container>
  )
}

Card.propTypes = {
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

Card.defaultProps = {}

export default memo(Card)