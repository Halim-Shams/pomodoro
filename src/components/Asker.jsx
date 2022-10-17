import React, {useState} from 'react';

function Asker(props) {
	const [work, setWork] = useState('');

	const focusOn = (event) => {
		setWork(event.target.value);
	};

	const subit = (e) => {
		e.preventDefault();
		props.onSubmit(work);
		setWork('');
	};
	return (
		<div>
			<form onSubmit={subit}>
				<input
					placeholder='What do you want to do?'
					className='px-3 mt-12 text-gray-900 placeholder:italic placeholder:text-slate-400 bg-gray-100 rounded border border-slate-300 w-5/12 py-2 focus:outline-none focus:border-yellow-300 hover:shadow dark:bg-gray-700 dark:text-gray-200'
					type='text'
					value={work}
					onChange={focusOn}
				/>
			</form>
		</div>
	);
}

export default Asker;
