import React from 'react';
import Timmer from './Timmer';

function Guide(props) {
	return (
		<div className='flex flex-col items-center gap-52 h-screen pt-6'>
			<div className='flex flex-col items-center gap-3 w-4/12'>
				<h1 className='text-yellow-500 text-4xl font-bold dark:text-gray-200'>
					{props.focus.toUpperCase()}
				</h1>
				<div>
					<p className='text-gray-500 text-2xl font-light dark:text-gray-400'>
						You have{' '}
						<span className='text-yellow-500 font-medium font-mono'>25min</span>{' '}
						to work on this task, When the time is up, I'll inform you by
						playing a sound!
					</p>
					<h4 className='text-gray-500 font-bold dark:text-gray-400'>
						Good Luck 🚀
					</h4>
				</div>
			</div>
			<Timmer />
		</div>
	);
}

export default Guide;
