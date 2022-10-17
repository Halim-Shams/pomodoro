import './index.css';
import {useState} from 'react';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import Asker from './components/Asker';
import Guide from './components/Guide';
import ThemeTuggler from './components/ThemeTuggler';

function App() {
	const [work, setWork] = useState('');
	const [isHide, setIsHide] = useState(false);
	const [darkTheme, setDarkTheme] = useState(false);

	const submitHandler = (work) => {
		setWork(work);
		setIsHide(true);
	};

	const undoHandler = () => {
		setIsHide(false);
	};

	return (
		<div className={darkTheme ? 'dark' : ''}>
			<div className='bg-gray-100 text-center h-screen dark:bg-gray-900'>
				{isHide ? (
					<button
						onClick={undoHandler}
						className='absolute border border-gray-200 ring-2 ring-yellow-300 ring-offset-2 ring-offset-gray-100 top-5 left-4 text-3xl hover:shadow-gray-400 hover:shadow-lg rounded-full py-1 px-1 bg-white dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:border-none dark:ring-1 dark:ring-yellow-300 dark:ring-offset-gray-900 dark:ring-offset-2 text-gray-900'>
						<AiOutlineArrowLeft />
					</button>
				) : null}
				<ThemeTuggler darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
				{isHide ? <Guide focus={work} /> : null}
				{!isHide ? <Asker onSubmit={submitHandler} /> : null}
			</div>
		</div>
	);
}

export default App;
