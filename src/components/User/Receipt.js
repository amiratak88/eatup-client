import React, { Component } from 'react'
import { List, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ReceiptItem from './ReceiptItem';

class Receipt extends Component {

	subTotal = () => {

		const receiptItems = this.receiptItems()
		let subTotal = 0

		for (const food in receiptItems) {
			const { qty, price } = receiptItems[food]
			subTotal += (qty * price)
		}

		return subTotal
	}

	receiptItems = () => {

		const receiptItems = {}

		this.props.currentOrder.order_items.forEach(orderItem => {
			if (receiptItems[orderItem.item.name]) {
				receiptItems[orderItem.item.name].qty++
			} else {
				receiptItems[orderItem.item.name] = {qty: 1, price: orderItem.item.price}
			}
		})

		return receiptItems
	}

	getReceiptItems = () => {

		const receiptItemComponents = []
		const receiptItems = this.receiptItems()

		for (const food in receiptItems) {
			const { qty, price } = receiptItems[food]
			receiptItemComponents.push(
				<ReceiptItem key={food.id} name={food} price={price} qty={qty} />
			)
		}

		return receiptItemComponents
	}

	render() {
		return (
			<List verticalAlign='middle'>
				{this.getReceiptItems()}
				<Divider />
				<List.Item>
					<List.Content floated='right'>
						Subtotal: ${this.subTotal().toFixed(2)}
					</List.Content>
					{/* image */}
				</List.Item>
				<List.Item>
					<List.Content floated='right'>
						Tax: ${(this.subTotal() * 0.08625).toFixed(2)}
					</List.Content>
					{/* image */}
				</List.Item>
				<List.Item>
					<List.Content floated='right'>
						Total: ${(this.subTotal() * 1.08625).toFixed(2)}
					</List.Content>
					{/* image */}
				</List.Item>
			</List>
		)
	}
}

const mapStateToProps = (state) => ({
	currentOrder: state.user.currentOrder,
})

export default connect(mapStateToProps)(Receipt)
