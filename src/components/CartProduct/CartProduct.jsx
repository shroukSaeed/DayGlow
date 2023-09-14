import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from '../../ReduxTk/slices/cartSlice';

export default function CartProduct(props) {
    const dispatch = useDispatch();

    function handleRemoveProduct() {
        dispatch(removeItem(props.product.id))
    }

    function handleIncreaseQuantity() {
        dispatch(increaseQuantity(props.product.id))
    }
    function handleDecreaseQuantity() {
        dispatch(decreaseQuantity(props.product.id))
    }

    return (
        <tr className="cart-product">
            <td>
                <div className="d-flex gap-3 align-items-center">
                    <img className="cart-product-img p-2 img-fluid" src={props.product.imgSrc} alt='' />
                    <h5>{props.product.title}</h5>
                </div>
            </td>

            <td>
                <div className="cart-product-amount px-2">
                    <span className="change-amount change-amount-inc" onClick={handleIncreaseQuantity}>+</span>
                    <span className="quantity">{props.product.quantity}</span>
                    <span className="change-amount change-amount-dec" onClick={handleDecreaseQuantity}>-</span>
                </div>
            </td>

            <td>
                <div className="mb-2 d-flex flex-column text-end justify-content-end align-items-end">
                    <span className="fw-bolder fs-4">${parseInt(props.product.price)*parseInt(props.product.quantity)}</span>
                    <span className="remove-product" onClick={handleRemoveProduct}>Remove</span>
                </div>
            </td>
        </tr>
    )
}

