const Spotify = () => {
	return (
		<iframe
			style={{
				borderRadius: "12px",
			}}
			src='https://open.spotify.com/embed/playlist/6XAof7NdnJ6Oc1YO3NNk3D?utm_source=generator&theme=0'
			width='100%'
			height='120'
			allowFullScreen={false}
			allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
			loading='lazy'
			className='absolute top-[48px] sm:right-4 sm:translate-x-0 max-w-sm max-h-[80px] right-1/2 translate-x-[50%]'
		></iframe>
	);
};

export default Spotify;
