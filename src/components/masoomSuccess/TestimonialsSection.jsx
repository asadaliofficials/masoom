import { AnimatedTestimonials } from '../aceternity-ui/Testimonials.jsx';

export function TestimonialsSection() {
	const testimonials = [
		{
			quote:
				'Masoom’s journey has inspired me to pursue my dreams with confidence. Her story is a beacon of hope for women everywhere.',
			name: 'Priya Sharma',
			designation: 'Marketing Manager at BharatBrands',
			src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&h=800&facepad=2', // woman
		},
		{
			quote:
				'The way Masoom empowers others through her platform is truly remarkable. She motivates me to break barriers and aim higher.',
			name: 'Amit Verma',
			designation: 'Entrepreneur at StartUp India',
			src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=600&h=800&facepad=2', // man
		},
		{
			quote:
				'Masoom’s creativity and authenticity have changed the way I look at personal branding. She is a true role model.',
			name: 'Sneha Patel',
			designation: 'Content Creator',
			src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=600&h=800&facepad=2', // woman
		},
		{
			quote:
				'Her dedication to empowering women is unmatched. Masoom’s story encourages me to support and uplift others in my community.',
			name: 'Rahul Singh',
			designation: 'Community Leader',
			src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=600&h=800&facepad=2', // man
		},
		{
			quote:
				'Masoom’s positive impact is felt far and wide. She inspires me to be bold, creative, and compassionate in everything I do.',
			name: 'Anjali Mehta',
			designation: 'Fashion Blogger',
			src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=600&h=800&facepad=2', // woman, fashion blogger
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
			src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=600&h=800&facepad=2', // woman
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
