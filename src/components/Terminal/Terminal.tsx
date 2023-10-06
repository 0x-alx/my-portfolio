import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { close } from "./terminalSlice";

import TerminalLine from "./TerminalLine";

const Terminal = () => {
	const [commandHistory, setCommandHistory] = useState<
		{
			command: "help" | "clear" | "whoami" | "";
			type: "error" | "success" | "info";
			response: string;
		}[]
	>([
		{ command: "", type: "info", response: "Welcome to my website!" },
		{
			command: "",
			type: "info",
			response: "Type 'help' to see all commands",
		},
	]);
	const visible = useAppSelector((state) => state.terminal.value);
	console.log(visible);
	const dispatch = useAppDispatch();
	const commandMap = (command: string) => {
		if (command === "clear") {
			setCommandHistory([]);
		} else if (command === "help") {
			setCommandHistory([
				...commandHistory,
				{
					command: command,
					type: "info",
					response: "clear - clears the terminal",
				},
				{
					command: command,
					type: "info",
					response: "help - shows all commands",
				},
				{
					command: "whoami",
					type: "info",
					response: "whoami - shows information about me",
				},
			]);
		} else if (command === "whoami") {
			setCommandHistory([
				...commandHistory,
				{
					command: command,
					type: "info",
					response: `{ name: 'Alex', age: 28, location: 'Aix-en-Provence', hobbies: ['sport', 'gaming', 'new technologies', 'hanging out with friends'], languages: ['French', 'English'], food: {favorite: '🥩', hate: '🍄'} }`,
				},
			]);
		} else {
			setCommandHistory([
				...commandHistory,
				{ command: "", type: "error", response: "Command not found" },
			]);
		}
	};

	return (
		<div className='w-[98%] h-[500px] max-h-[80vh] max-w-2xl absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'>
			<div
				className='h-full coding inverse-toggle shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-[rgba(31,41,55,0.25)] backdrop-blur-md pb-6 rounded-lg leading-normal overflow-hidden'
			>
				<div className='w-full h-[30px] flex sticky top-0 bg-slate-100 px-2 items-center'>
					<div
						className='h-3 w-3 bg-red-500 rounded-full cursor-pointer'
						onClick={() => dispatch(close())}
					></div>
					<div className='ml-2 h-3 w-3 bg-slate-500 rounded-full'></div>
					<div className='ml-2 h-3 w-3 bg-slate-500 rounded-full'></div>
				</div>
				<div className='w-full h-auto max-h-full flex flex-col justify-end overflow-x-hidden overflow-y-scroll pb-6 pl-2'>
					{commandHistory.map((command) => (
						<TerminalLine
							type={command.type}
							text={command.response}
						/>
					))}

					<div className='mt-4 flex'>
						<span className='text-green-400'>computer:~$</span>
						<input
							placeholder='Type a command here...'
							type='response'
							className='w-full bg-transparent outline-none border-none text-gray-100 ml-2 placeholder:italic text-base'
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									commandMap(e.currentTarget.value);
									e.currentTarget.value = "";
								} else if (e.key === "ArrowUp") {
									e.currentTarget.value =
										commandHistory[
											commandHistory.length - 1
										].command;
								}
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Terminal;
