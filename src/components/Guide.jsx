import React from 'react';
import Timmer from './Timmer';

function Guide(props) {
	return (
		<div className='flex flex-col items-center justify-center gap-2'>
			<h1 className='text-yellow-500 text-4xl font-bold dark:text-gray-200'>
				{props.focus.toUpperCase()}
			</h1>
			<p className='text-gray-500 text-2xl font-light w-4/12 dark:text-gray-400'>
				You have{' '}
				<span className='text-yellow-500 font-medium font-mono'>25min</span> to
				work on this task, When the time is up, I'll inform you by playing a
				sound!
			</p>
			<h4 className='text-gray-500 font-bold dark:text-gray-400'>
				Good Luck 🚀
			</h4>
			<Timmer />
		</div>
	);
}

export default Guide;
