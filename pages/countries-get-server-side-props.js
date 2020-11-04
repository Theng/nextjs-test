export default function Countries({ countries }) {
	return(
		<div style={{padding: 32}}>
			<h3>Countries ({countries?.length})</h3>
			<div style={{paddingLeft: 32}}>
				{
					countries?.map((c,idx)=>{
						return(
							<p key={idx}>{c.name}</p>
						)
					})
				}
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`https://sampleapis.com/countries/api/countries`)
	const countries = await res.json()
	return { props: { countries } }
}