import { ButtonGroup, Button, Grid } from '@geist-ui/core'
import dynamicURLFetch from '../lib/dynamicURLFetch'
import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'

async function getShowcase (req) {
	const res = await dynamicURLFetch({
		req,
		path: `/api/showcase`
	})
	return res.json()
}

export const getServerSideProps = async ({ req }) => {
	const { showcase } = await getShowcase(req)
	return {
		props: {
			showcase
		}
	}
}

const getDynamicComponent = (name) => dynamic(() => import(`../showcase/${name}`), {
	ssr: false,
})

export default function Home ({ showcase = [] }) {
	const [currentComponentIndex, setCurrentComponentIndex] = useState(0)
	const DynamicComponent = useMemo(() => {
		return getDynamicComponent(showcase[currentComponentIndex])
	}, [currentComponentIndex, showcase])
	return (
		<Grid.Container gap={1}>
			<Grid xs={24}>
				<ButtonGroup>
					{showcase.map((component, index) => {
						return <Button key={`button-${index}`} onClick={() => setCurrentComponentIndex(index)}>{component}</Button>
					})}
				</ButtonGroup>
			</Grid>
			<Grid xs={24}>
				<DynamicComponent/>
			</Grid>
		</Grid.Container>
	)
}