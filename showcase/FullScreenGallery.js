import { useState } from 'react'
import { Card, Grid, Text } from '@geist-ui/core'
import { FullScreenGallery } from '@tollbrothers/tollbrothers-ui'

export default function FullScreenGalleryTest () {
	const [isOpen, setIsOpen] = useState(false)
	const walkthroughList = [
		{
			'link': 'pbGcUYerCwA',
			'type': 'walkthrough::matterport',
			'url': null
		}
	]
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
	const [listToLaunch, setListToLaunch] = useState()
	const walkthroughHandler = () => {
		setInitialSlide(0)
		setIsOpen(true)
		setListToLaunch(walkthroughList)
	}
	return (
		<Grid.Container gap={1}>
			<Grid>
				<Grid.Container gap={1}>
					<Grid xs={24} md={12} lg={6}>
						<Card style={{ cursor: 'pointer' }} width={100} onClick={walkthroughHandler}>
							<Card.Content>
								<Text h3>Show 3D Walkthrough</Text>
							</Card.Content>
						</Card>
					</Grid>
				</Grid.Container>
			</Grid>
			<Grid>
				<Card>
					<Grid.Container gap={1}>
						<Grid xs={24}><Text h3>Gallery</Text></Grid>
						{mediaList.map((item, index) => {
							const slide = 1 + index
							const cardHandler = () => {
								setInitialSlide(slide)
								setIsOpen(true)
								setListToLaunch(mediaList)
							}
							return (
								<Grid key={`card-container-${index}`} xs={24} md={12} lg={6}>
									<Card style={{ cursor: 'pointer' }} onClick={cardHandler}>
										<Card.Content>
											<img alt={`Slide ${slide}`} width={200} src={item.url}/>
										</Card.Content>
										<Card.Footer>Slide {slide}</Card.Footer>
									</Card>
								</Grid>
							)
						})}

						<Grid>
							<FullScreenGallery onNext={({ slideIndex }) => console.log('slideIndex', slideIndex)} onPrevious={({ slideIndex }) => console.log('slideIndex', slideIndex)} initialSlide={initialSlide} onClose={() => setIsOpen(false)} show={isOpen}
																 mediaList={listToLaunch}/>
						</Grid>
					</Grid.Container>
				</Card>
			</Grid>
		</Grid.Container>
	)
}
