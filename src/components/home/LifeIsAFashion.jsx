import ImageTrail from '../react-bits/ImageTrail/ImageTrail.jsx';
import '../../styles/home/lifeFashion.css';
const LifeIsAFashion = () => {
	return (
		<div
			style={{
				height: '92vh',
				position: 'relative',
				overflow: 'hidden',
				backgroundColor: '#f5f5f5',
			}}
		>
			<ImageTrail
				items={[
					'https://res.cloudinary.com/dyibkikle/image/upload/v1753205286/one_p4huoy.webp',
					'https://res.cloudinary.com/dyibkikle/image/upload/v1753205286/fg_zz4kbr.webp',
					'https://res.cloudinary.com/dyibkikle/image/upload/v1753205286/fdas_lryqe2.webp',
					'https://res.cloudinary.com/dyibkikle/image/upload/v1753205286/sdaf_jux7lt.webp',
					'https://res.cloudinary.com/dyibkikle/image/upload/v1753205287/fsdga_ldb03b.webp',
					'https://res.cloudinary.com/dyibkikle/image/upload/v1753205287/dfs_i84hnq.webp',
					'https://res.cloudinary.com/dyibkikle/image/upload/v1753205286/teoasdf_t2qeaa.webp',
					'https://res.cloudinary.com/dyibkikle/image/upload/v1753205287/dfas_snveei.webp',
					'https://res.cloudinary.com/dyibkikle/image/upload/v1753205287/dsfa_redoe6.webp',
					'https://res.cloudinary.com/dyibkikle/image/upload/v1753205287/sadf_qj0e4q.webp',
				]}
				variant={4}
			/>
			<div
				// Add pointerEvents: 'none' so that pointer events pass through to the ImageTrail
				className="lifeFashion flex flex-col items-center justify-center gap-4"
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					zIndex: 101,
					pointerEvents: 'none',
				}}
			>
				<h1 className="title text-6xl font-bold text-black text-center">Life is a Fashion</h1>
				<h2 className="text-2xl opacity-60 text-center font-semibold tag">
					Elegance in Every Thread
				</h2>
				<p className=" text-center opacity-80 des">
					Style is a reflection of personality, woven with care and confidence. Every detail, from
					fabric to fit, tells a story of grace and intention. It’s not just about appearance — it’s
					about presence. True sophistication lies in how effortlessly you carry yourself, making
					even the simplest look feel refined and thoughtfully crafted.
				</p>
			</div>
		</div>
	);
};

export default LifeIsAFashion;
