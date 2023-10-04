import { FC } from "react";
interface IBottomBarApp {
	appName: string;
	icon: string;
	alt: string;
	onClick: () => void;
}

const BottomBarApp: FC<IBottomBarApp> = ({ appName, icon, alt, onClick }) => {
	return (
		<li
			className='cursor-pointer transition duration-200 hover:scale-125 hover:translate-y-[-10px] flex'
			id={appName}
			onClick={onClick}
		>
			<div
				className='tooltip'
				data-tip={appName}
			>
				<img
					src={icon}
					alt={alt}
					className='h-[50px] w-[50px]'
				/>
			</div>
		</li>
	);
};

export default BottomBarApp;
