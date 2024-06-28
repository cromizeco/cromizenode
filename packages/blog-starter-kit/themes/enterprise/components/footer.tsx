import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-20 dark:border-neutral-800 ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-10 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-10 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="flex flex-col items-center text-slate-600 dark:text-neutral-300">
					<div className="mb-5">
						<Link href="https://cromize.com/blog" className="mr-5 text-blue-600 hover:underline">
							Blogs
						</Link>
						<Link href="https://cromize.com/" className="text-blue-600 hover:underline">
							Conversion Rate Optimization
						</Link>
					</div>
					<p>&copy; 2024 Cromize</p>
				</div>
			</Container>
		</footer>
	);
};
