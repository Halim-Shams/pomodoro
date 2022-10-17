import React from 'react';

function ThemeTuggler({darkTheme, setDarkTheme}) {
	return (
		<div className='absolute mt-6 right-4'>
			<button
				title='Ctrl + L'
				onClick={() => setDarkTheme(!darkTheme)}
				className='text-1xl font-bold text-gray-900 text-center border rounded-full py-1 px-3 bg-gray-100 hover:shadow-lg'>
				{!darkTheme ? 'Light 💡' : 'Dark 🌙'}
			</button>
		</div>
	);
}

export default ThemeTuggler;
