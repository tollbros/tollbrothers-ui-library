import { useEffect, useState } from 'react'
import { Card, Grid, Text } from '@geist-ui/core'
import { FullScreenGallery } from '@tollbrothers/tollbrothers-ui'

export default function FullScreenGalleryTest () {
	const [isOpen, setIsOpen] = useState(false)
	const mediaList = [
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-2-HI-RES--15_1920.jpg'
		},
		{
			'description': 'Luxurious Bathroom',
			'link': null,
			'title': 'Main Bath',
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-2-HI-RES--8_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--16_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--18_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--22_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--23_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--26_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--3_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/iStock-641316176_1920.jpg'
		}
	]
	const [initialSlide, setInitialSlide] = useState(1)
	useEffect(() => {
		console.log('initialSlide', initialSlide)
	}, [initialSlide])
	return (
		<Grid.Container gap={1}>
			<Grid xs={24}>
				<Text h2>FullScreenGallery</Text>
			</Grid>

			{mediaList.map((item, index) => {
				const slide = 1 + index
				const cardHandler = () => {
					setInitialSlide(slide)
					setIsOpen(true)
				}
				return (
					<Grid xs={24} md={12} lg={6}>
						<Card onClick={cardHandler}>
							<Card.Content>
								<img width={200} src={item.url}/>
							</Card.Content>
							<Card.Footer>Slide {slide}</Card.Footer>
						</Card>
					</Grid>
				)
			})}

			<Grid>
				<FullScreenGallery initialSlide={initialSlide} onClose={() => setIsOpen(false)} show={isOpen}
													 mediaList={mediaList}/>
			</Grid>
		</Grid.Container>
	)
}
