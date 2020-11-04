import { useRouter } from 'next/router'

export default function AllPosts() {
	const router = useRouter()
	return (
		<>
			<h1>Post: {JSON.stringify(router.query)}</h1>
		</>
	)
}
