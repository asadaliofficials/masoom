import ImageTrail from '../react-bits/ImageTrail/ImageTrail.jsx';
const LifeIsAFashion = () => {
	return (
		<div style={{ height: '92vh', position: 'relative', overflow: 'hidden' }}>
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
			<h1 className="text-4xl font-bold text-white">Life is a Fashion</h1>
		</div>
	);
};

export default LifeIsAFashion;
