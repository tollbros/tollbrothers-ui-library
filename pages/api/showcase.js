// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import path from 'path'

export default async function handler (req, res) {
	const showcase = await fs.promises.readdir(path.resolve(process.cwd(), 'showcase'))

	res.status(200).json({ showcase })
}
