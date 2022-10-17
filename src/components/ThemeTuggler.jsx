import React from 'react';

function ThemeTuggler({darkTheme, setDarkTheme}) {
	return (
		<div className='absolute mt-6 right-4'>
			<button
				title='Ctrl + L'
				onClick={() => setDarkTheme(!darkTheme)}
				className='ring-2 ring-yellow-300 ring-offset-2 ring-offset-gray-100 text-1xl font-bold text-gray-900 text-center border rounded-full py-1 px-3 bg-white hover:shadow-lg yellow-200 dark:bg-gray-700 dark:text-gray-100 dark:border-none dark:ring-1 dark:ring-yellow-300 dark:ring-offset-gray-900 dark:ring-offset-2'>
				{!darkTheme ? 'Light 💡' : 'Dark 🌙'}
			</button>
		</div>
	);
}

export default ThemeTuggler;
