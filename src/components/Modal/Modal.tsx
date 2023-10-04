const Modal = () => {
	return (
		<dialog
			id='my_modal_1'
			className='modal'
		>
			<div className='modal-box'>
				<h3 className='font-bold text-lg'>Hello !</h3>
				<p className='py-4'>
					Je suis ravi de vous accueillir sur mon site web personnel,
					conçu avec une touche d'inspiration du design emblématique
					de <strong>macOS</strong>. À travers cette expérience, je
					souhaite vous faire découvrir mon parcours et mes
					compétences tout en offrant une interface familière et
					originale. <br />
					<br />
					Ce projet n'est pas seulement une vitrine de mes compétences
					en développement front-end, mais aussi un moyen de partager
					mon <strong>amour pour le design</strong> et l'
					<strong>expérience utilisateur</strong>.
					<br />
					<br />
					Le github du projet est dispo:{" "}
					<a
						href='https://github.com/0x-alx/my-portfolio'
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-500 underline'
					>
						ici
					</a>
					<br />
					<br />
					PS: le mot de passe est <strong>hire_me123</strong> 🤫
				</p>
				<div className='modal-action'>
					<form method='dialog'>
						{/* if there is a button in form, it will close the modal */}
						<button className='btn'>Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
};

export default Modal;
