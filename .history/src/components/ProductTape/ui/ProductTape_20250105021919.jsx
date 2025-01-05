
const ProductTape = (props) => {
    const{ title, products = [], isLoading = false, error = undefined} = props

    if(isLoading) {
        return <div>Loading...</div>
    }
  return (
    <div>ProductTape</div>
  )
}

export  { ProductTape }