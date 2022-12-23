import { ButtonGroup, Button, Grid } from '@geist-ui/core'
import dynamicURLFetch from '../lib/dynamicURLFetch'
import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'

async function getShowcase(req) {
	const res = await dynamicURLFetch({
		req,
		path: `/api/showcase`
});
	return res.json();
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

export default function Home ({ showcase }) {
	const [currentComponentIndex, setCurrentComponentIndex] = useState(0)
	const DynamicComponent = useMemo(() => {
		return getDynamicComponent(showcase[currentComponentIndex])
	}, [currentComponentIndex])
	return (
		<Grid.Container gap={1}>
			<Grid xs={4}>
				<ButtonGroup vertical>
				{showcase.map((component, index) => {
					return <Button onClick={() => setCurrentComponentIndex(index)}>{component}</Button>
				})}
				</ButtonGroup>
			</Grid>
			<Grid xs={20}>
				<DynamicComponent />
			</Grid>
		</Grid.Container>
	)
}