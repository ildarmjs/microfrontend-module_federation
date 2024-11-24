import React, { Suspense } from 'react'
const App2 = React.lazy(() => import('project/App'))
const sum = await import('project/utils/sum').then(module => module.sum)
const App = () => {
	return (
		<>
			<div style={{ background: 'green', padding: 20 }}>
				<h1>LocalHost 3000</h1>
				<p>{sum(1, 2)}</p>
			</div>
			<Suspense fallback='Loading remote App2'>
				<App2 />
			</Suspense>
		</>
	)
}

export default App
