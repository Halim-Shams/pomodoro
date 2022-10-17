import React from 'react';

function Guide(props) {
	return (
		<div className='flex flex-col items-center justify-center gap-2'>
			<h1 className='text-yellow-500 text-5xl font-bold dark:text-gray-200'>
				{props.focus}
			</h1>
			<p className='text-gray-500 text-2xl font-light w-4/12 dark:text-gray-400'>
				You have 25min to work on{' '}
				<span className='font-medium'>{props.focus}</span>, When the time is up,
				I'll inform you by playing a sound!
			</p>
			<h4 className='text-gray-500 font-bold dark:text-gray-400'>
				Good Luck 🚀
			</h4>
		</div>
	);
}

export default Guide;
