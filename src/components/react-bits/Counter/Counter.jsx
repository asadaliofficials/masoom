// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

function Digit({ value, height }) {
	// Animate the digit value
	let animatedValue = useSpring(value);

	useEffect(() => {
		animatedValue.set(value);
	}, [animatedValue, value]);

	// This transform shifts the whole column of digits
	const y = useTransform(animatedValue, v => -v * height);

	const defaultStyle = {
		height,
		position: 'relative',
		width: '1ch',
		fontVariantNumeric: 'tabular-nums',
		overflow: 'hidden', // Prevent overflow of numbers
		display: 'inline-block',
	};

	return (
		<div style={defaultStyle}>
			<motion.div
				style={{
					y,
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
				}}
			>
				{Array.from({ length: 10 }, (_, i) => (
					<span
						key={i}
						style={{
							display: 'block',
							height,
							lineHeight: `${height}px`,
							width: '100%',
							textAlign: 'center',
						}}
					>
						{i}
					</span>
				))}
			</motion.div>
		</div>
	);
}

export default function Counter({ value, fontSize = 100 }) {
	const height = fontSize;
	const valueStr = String(value);
	const digits = valueStr.split('').map(Number);

	return (
		<span
			style={{
				fontSize,
				display: 'inline-flex',
				lineHeight: 1,
				fontWeight: 'bold',
				color: 'inherit',
				// width: 'min-content',
			}}
		>
			{digits.map((digit, idx) => (
				<Digit key={idx} value={digit} height={height} />
			))}
		</span>
	);
}
