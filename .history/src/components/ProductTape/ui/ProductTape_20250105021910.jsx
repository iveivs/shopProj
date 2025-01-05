
const ProductTape = (props) => {
    const{ title, products = [], isLoading = false, error = undefined} = props

    if(isLoading) {
        return 
    }
  return (
    <div>ProductTape</div>
  )
}

export  { ProductTape }