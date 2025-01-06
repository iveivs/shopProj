import React from 'react'
import { Link } from 'react-router-dom'
import 

const ProductLayout = (props) => {
    const { header, items } = props
  return (
    <>
        <Link className={cls.link}>
            Вернуться назад
        </Link>
        <section>
            <h2>{header}</h2>
        </section>
    </>
  )
}

export  {ProductLayout}