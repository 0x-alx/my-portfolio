// import "dotenv/config";
import { Avatar, Input } from "react-daisyui";
import avatar from "../assets/images/avatar.jpg";
import TopBar from "../components/TopBar/TopBar";
import { useState } from "react";

const Login = () => {
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		if (password === "hire_me123") {
			window.location.href = "/home";
			sessionStorage.setItem("logged_in", "true");
		} else console.log("Wrong password");
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
				<Input
					className='h-[30px] bg-[rgba(255,255,255,0.25)] backdrop-blur-md rounded-[20px] text-white max-w-[180px]'
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
			</div>
		</div>
	);
};

export default Login;
