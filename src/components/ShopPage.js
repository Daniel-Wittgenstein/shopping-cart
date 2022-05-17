

import {useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProductCard from "./ProductCard"

import './ShopPage.css';



let initOk = false

const ShopPage = (props) => {

  useEffect(() => {
    if (!initOk) {
      /* Eslint may not like this ("missing dependency") because it thinks the dependence
      array should not be empty, but contain props.data.methods, instead.
      That's nonsense, though. */
      /* The point of the initOk check is the fact that in development mode
      ReactStrictMode calls each component twice (simply speaking). We do not
      want to issue two updates, not even while developing. */
      props.shopData.methods.reloadShopProducts() // do when component is mounted
      initOk = true 
    }
  }, [])


  const products = props.shopData.data.shopProducts

  const listItems = products.map(product =>
    <Col sm={6} md={4} key={product.id}><ProductCard product={product}></ProductCard></Col>
  )
  
  return (
    <>
      <Container>
        <Row>
          {listItems}
        </Row>
      </Container>
      <div className="spacer-bottom"></div>
    </>
  )

}



export default ShopPage