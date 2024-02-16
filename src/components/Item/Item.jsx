import { NavLink } from 'react-router-dom'
import './Item.css'
import like from "../../../public/Sales/heart.png"
export default function Item({id, img, name, price }) {
    return (
        <>
            <NavLink to={`/catalog/${id}`}>
                <div className="item">
                    <div className="item-img">
                        <img src={img} alt="" />
                        <div className="item-actions">
                            <p>в корзину</p>
                            <div className="like"><img src={like} alt="" /></div>
                        </div>
                    </div>

                    <div className="item-text">
                        <p>{name}</p>
                        <span>{price} ₽</span>
                    </div>

                </div></NavLink>
        </>
    )
}