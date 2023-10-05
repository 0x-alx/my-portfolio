import { Avatar, Input } from "react-daisyui";
import avatar from "../assets/images/avatar.jpg";
import TopBar from "../components/TopBar/TopBar";
import Modal from "../components/Modal/Modal";
import { useEffect, useState } from "react";
import { arrowRight } from "../assets/images";

const Login = () => {
	const [password, setPassword] = useState("");
	const [toastActive, setToastActive] = useState(false);

	useEffect(() => {
		const modal = document.getElementById(
			"my_modal_1"
		) as HTMLDialogElement;
		if (localStorage.getItem("first_connection") === null) {
			modal && modal.showModal();
			localStorage.setItem("first_connection", "true");
		}
		console.log(localStorage.getItem("first_connection"));
	}, []);

	const handleSubmit = () => {
		if (password === "hire_me123") {
			window.location.href = "/home";
			sessionStorage.setItem("logged_in", "true");
		} else {
			setToastActive(true);
			setTimeout(() => {
				setToastActive(false);
			}, 5000);
		}
	};

	return (
		<div className='h-screen bg-mainBackground bg-cover relative'>
			<TopBar transparent />
			<div className='flex flex-col w-full max-w-[250px] items-center justify-center absolute top-[28%] left-1/2 translate-x-[-50%] gap-4'>
				<Avatar
					src={avatar}
					shape='circle'
					size={150}
				/>
				<h1 className='text-2xl font-bold text-white mt-2'>
					Alex Charbonneyre
				</h1>
				<div className='relative'>
					<Input
						className='h-[30px] bg-[rgba(255,255,255,0.25)] backdrop-blur-md rounded-[20px] text-white max-w-[180px] text-base'
						placeholder='Enter password'
						type='password'
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleSubmit();
							}
						}}
					/>
					{password.length > 0 && (
						<img
							src={arrowRight}
							alt=''
							className='absolute right-1 top-[3px] w-[24px] h-[24px] -rotate-90 cursor-pointer opacity-70'
							onClick={() => handleSubmit()}
						/>
					)}
				</div>
			</div>
			<div
				className={`toast transition-all ${
					toastActive
						? "translate-x-0"
						: "translate-x-[calc(100%+30px)]"
				}`}
			>
				<div className='alert alert-error flex'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='stroke-current shrink-0 h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
					<span>Bad password. Try hire_me123</span>
				</div>
			</div>
			<Modal />
		</div>
	);
};

export default Login;
