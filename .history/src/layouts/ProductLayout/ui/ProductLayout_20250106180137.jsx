import React from 'react'
import { Link } from 'react-router-dom'

const ProductLayout = (props) => {
    const { header, items } = props
  return (
    <>
        <Link
        <section>
            <h2>{header}</h2>
        </section>
    </>
  )
}

export  {ProductLayout}