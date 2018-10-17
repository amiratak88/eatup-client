import React from 'react'
import { Button, Image, Item } from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ItemExampleDivided = () => (
	<Item.Group fluid>
		<Item>
			<Item.Image size='small' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqvo8sceTqPRKBciFaibhsdcZH-46unwOvMsd8GjIgxPKo9-z' />

			<Item.Content>
				<Item.Header as='a'>Isho boiiiii Restaurant</Item.Header>
				<Item.Meta>
					<span className='cinema'>Union Square 14</span>
				</Item.Meta>
				<Item.Description>Tempor sint nisi consectetur elit excepteur duis cillum et adipisicing et. Esse culpa ea laboris incididunt nulla. Aliquip nisi dolore cupidatat do veniam tempor velit veniam mollit mollit consequat elit ipsum. Officia ex ut et est velit ea voluptate dolor sunt eiusmod. Elit id esse quis deserunt pariatur consequat laboris duis ea. Nisi enim dolore nisi esse eu deserunt ipsum voluptate Lorem est aute anim. Mollit tempor nostrud reprehenderit consectetur occaecat dolor.

Reprehenderit quis Lorem proident ut velit. Enim veniam aliqua officia proident elit reprehenderit. Amet et laboris laborum ipsum ea id. Excepteur et laborum reprehenderit velit officia id in deserunt anim.</Item.Description>
				<Item.Extra>
				<Button primary floated='right'>
					Order Now
				</Button>
				</Item.Extra>
			</Item.Content>
		</Item>
	</Item.Group>
)

export default ItemExampleDivided