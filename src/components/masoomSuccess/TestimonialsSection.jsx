import { AnimatedTestimonials } from '../aceternity-ui/Testimonials.jsx';

export function TestimonialsSection() {
	const testimonials = [
		{
			quote:
				'Masoom’s journey has inspired me to pursue my dreams with confidence. Her story is a beacon of hope for women everywhere.',
			name: 'Priya Sharma',
			designation: 'Marketing Manager at BharatBrands',
			src: 'https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // woman
		},
		{
			quote:
				'The way Masoom empowers others through her platform is truly remarkable. She motivates me to break barriers and aim higher.',
			name: 'Amit Verma',
			designation: 'Entrepreneur at StartUp India',
			src: 'https://images.unsplash.com/photo-1670886498028-a72e1d9dcc9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // man
		},
		{
			quote:
				'Masoom’s creativity and authenticity have changed the way I look at personal branding. She is a true role model.',
			name: 'Sneha Patel',
			designation: 'Content Creator',
			src: 'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D', // woman
		},
		{
			quote:
				'Her dedication to empowering women is unmatched. Masoom’s story encourages me to support and uplift others in my community.',
			name: 'Rahul Singh',
			designation: 'Community Leader',
			src: 'https://plus.unsplash.com/premium_photo-1693000696650-e73643956033?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // man
		},
		{
			quote:
				'Masoom’s positive impact is felt far and wide. She inspires me to be bold, creative, and compassionate in everything I do.',
			name: 'Anjali Mehta',
			designation: 'Fashion Blogger',
			src: 'https://images.unsplash.com/photo-1628337868220-19208d39cbaf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // woman, fashion blogger
		},
		{
			quote:
				'Masoom’s leadership and vision have helped me believe in my own abilities. She is a true inspiration for the youth of India.',
			name: 'Karan Malhotra',
			designation: 'Software Engineer',
			src: 'https://images.unsplash.com/photo-1509839862600-309617c3201e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // man, software engineer
		},
		{
			quote:
				'I admire Masoom’s courage to speak up and make a difference. Her journey motivates me to follow my passion.',
			name: 'Riya Kapoor',
			designation: 'Social Media Strategist',
			src: 'https://images.unsplash.com/photo-1656236577401-6c60e0baeed5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // woman, social media strategist
		},
		{
			quote:
				'Masoom’s work ethic and dedication are second to none. She has shown us that with hard work, anything is possible.',
			name: 'Arjun Desai',
			designation: 'Business Analyst',
			src: 'https://images.unsplash.com/photo-1595349785606-5982d59ef635?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // man
		},
		{
			quote:
				'Her ability to connect with people and share meaningful stories is truly special. Masoom inspires me every day.',
			name: 'Meera Joshi',
			designation: 'Journalist',
			src: 'https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // woman
		},
		{
			quote:
				'Masoom’s achievements remind me that dreams do come true with perseverance and belief in oneself.',
			name: 'Dev Patel',
			designation: 'Photographer',
			src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=600&h=800&facepad=2', // man
		},
	];
	return <AnimatedTestimonials testimonials={testimonials} />;
}
