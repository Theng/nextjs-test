import { useRouter } from 'next/router'

export default function About() {
	const router = useRouter()
	const { slug } = router.query

	return (
		<>
			<h1>Blog: {slug}</h1>
		</>
	)
}
