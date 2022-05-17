

import Header from './Header'
import Footer from './Footer'
import ShopPage from './ShopPage'




function Shop(props) {
  return <>
    <Header></Header>
    <ShopPage shopData={props.shopData}></ShopPage>
    <Footer></Footer>
  </>
}




export default Shop