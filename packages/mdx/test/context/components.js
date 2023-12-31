import React from 'react'

/**
 * @param {Readonly<JSX.IntrinsicElements['span']>} props
 *   Props
 * @returns
 *   `span` element.
 */
export function Pill(props) {
  return React.createElement('span', {...props, style: {color: 'red'}})
}

/**
 * @param {Readonly<JSX.IntrinsicElements['div']>} props
 *   Props
 * @returns
 *   `div` element.
 */
export function Layout(props) {
  return React.createElement('div', {...props, style: {color: 'red'}})
}

export default Layout
