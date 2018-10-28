import React from 'react'
import App from './App'
import renderer from 'react-test-renderer'

test('Link changes the class when hovered', () => {
  const component = renderer.create(<App />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
