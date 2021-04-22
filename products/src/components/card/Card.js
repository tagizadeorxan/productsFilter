import React, { useState, useEffect } from 'react'
import discount from '../../assets/discountRules.json'
import './card.css'

const Card = () => {

    const [card, setCard] = useState(localStorage.getItem("_products_card"))
    const [editCard, setEditCard] = useState([])
    const [total,setTotal] = useState(0)
    const userType = localStorage.getItem("_user_type")

    const editCardData = () => {
        let total = 0
        const card = JSON.parse(localStorage.getItem("_products_card"))
        if(card) {
            let result = card.map(c => {
                if (discount.items[c.name]) {
                    if (discount.items[c.name][c.count]) {
                        c.price = (discount.items[c.name][c.count] * c.count).toFixed()
                    }
                }
                return c
            })
            localStorage.setItem("_products_card",JSON.stringify(result))
            result.map(e=> total+=Number(e.price))
            setTotal(total)
        }
      
      

    }

    useEffect(() => {
        editCardData()
    }, [])

    return <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {card ? JSON.parse(card).map((e, i) => <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.count}</td>
                    <td>{e.price}</td>
                </tr>) : null}
                <p>Total price:{total}</p>
            </tbody>
        </table>

    </div>
}

export default Card