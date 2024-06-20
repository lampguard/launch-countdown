import { useEffect, useState } from 'react';
import image from './assets/logo-white.svg';

import { formatCountdown } from 'antd/es/statistic/utils';

const time = new Date(2024, 5, 21, 12);

const TimePane = ({ value }) => (
	<div className="text-white glass bg-theme p-2 rounded-md h-full grid place-items-center text-4xl md:text-9xl w-1/3 md:w-[350px] cursor-pointer hover:animate-slide">
		{value}
	</div>
);

function App() {
	const [countdown, setCount] = useState(
		formatCountdown(time, {
			format: 'HH:mm:ss',
		}).split(':')
	);

	useEffect(() => {
		setInterval(() => {
			setCount(() =>
				formatCountdown(time, {
					format: 'HH:mm:ss',
				}).split(':')
			);
		}, 1000);
	}, []);

	return (
		<div className="px-4">
			<div className="grid place-items-center pt-[100px]">
				<img src={image} className="md:w-[100px]" />
			</div>
			<div className="py-5"></div>
			<div className="flex gap-2 h-36 md:h-[500px] items-center justify-between md:justify-center">
				{countdown.map((v, index) => (
					<>
						<TimePane value={v} />
						{index < countdown.length - 1 && (
							<span className="md:text-9xl md:px-8">:</span>
						)}
					</>
				))}
			</div>
			<div className="py-6 md:py-10"></div>
			<div className="text-center">
				<a
					href="https://usedoppler.app"
					target="_blank"
					className="btn border-0 bg-theme hover:bg-theme glass w-full md:btn-lg md:w-1/3 text-white"
				>
					Join the waitlist
				</a>
			</div>
		</div>
	);
}

export default App;
