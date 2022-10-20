import yayJpg from '../assets/yay.jpg';
// import 'unocss/dist/index';
// import '@unocss/cli/s';

export default function HomePage() {
	return (
		<div className='pl-200px bg-blue'>
			{/* <div className='pl200'> */}
			<h2>Yay! Welcome to umi!</h2>
			<p>
				<img src={yayJpg} width='388' />
			</p>
			<p>
				To get started, edit <code>pages/index.tsx</code> and save to
				reload.
			</p>
		</div>
	);
}
