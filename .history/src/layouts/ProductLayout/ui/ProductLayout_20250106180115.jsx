import React from 'react'

const ProductLayout = (props) => {
    const { header, items } = props
  return (
    <>
        <section>
            <h2>{header}</h2>
        </section>
    </>
  )
}

export  {ProductLayout}