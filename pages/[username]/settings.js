import { useRouter } from 'next/router'

export default function Settings() {
	const router = useRouter()
	const { username } = router.query

	return (
		<>
			<h1>Settings for: {username}</h1>
		</>
	)
}
