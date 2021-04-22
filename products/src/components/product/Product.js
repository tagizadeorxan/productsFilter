import React, {useState} from 'react'
import data from '../../assets/discountRules.json'
import productData from '../../assets/products.json'

const Product = (props) => {
    const [userType,setUserType] = useState(localStorage.getItem("_user_type"))
    const checkoutProduct = (p) => {
        let dataCard = localStorage.getItem("_products_card")
if(dataCard) {
    let exist = JSON.parse(dataCard).find(e => e.name === p.name)
        let result;
    if(exist) {
         result = JSON.parse(dataCard).map(e=> e.name=== p.name? {...e,count:e.count+1,price:(Number(e.price)+Number(p.price)).toFixed()}:e)
    } else {
        result = JSON.parse(dataCard)
        result.push({name:p.name,count:1,price:userType? Number((p.price-p.price*data[userType]/100).toFixed()) :Number(p.price)})
    }
    console.log(dataCard)
  
   console.log(result)
  localStorage.setItem("_products_card",JSON.stringify(result))    
} else {
    console.log([{name:p.name,count:1,price:userType? (p.price-p.price*data[userType]/100).toFixed() :p.price}])
   localStorage.setItem("_products_card",JSON.stringify([{name:p.name,count:1,price:userType? (p.price-p.price*data[userType]/100).toFixed() :p.price}]))
}
    }


    

    const {price,name,id} = props.product
    return <tr>
        <td>{name}</td>
        <td>{userType? (price-price*data[userType]/100).toFixed() :price}</td>
        <td><button onClick={()=>checkoutProduct(props.product)}>buy</button></td>
    </tr>
}

export default Product