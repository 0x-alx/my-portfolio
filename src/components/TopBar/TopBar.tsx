import { useEffect, useState } from "react";
import { format } from "date-fns";
import { appleLogo } from "../../assets/images";

const TopBar = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const [date, setDate] = useState(new Date().toLocaleDateString());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(
				new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				})
			);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const date = new Date();

		setDate(format(date, "eee. dd MMM."));
	}, []);

	return (
		<div className='w-full h-[28px] bg-slate-100 flex items-center justify-between px-4 absolute top-0'>
			<div>
				<img
					src={appleLogo}
					className='h-[24px]'
				/>
			</div>
			<div className='flex gap-2'>
				<span>{date}</span>
				<span>{time}</span>
			</div>
		</div>
	);
};

export default TopBar;