import { useSpring } from '@react-spring/web';
import { useRef } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { navbarContainerStyle } from '../../styles/navbarStyles';
import { tertiaryColor } from '../../styles/styles';
import { NavbarLinks } from './NavbarLinks';
import { NavbarUserButtons } from './NavbarUserButtons';

export const Navbar = () => {
	const breakpoint = useMediaQuery();
	const isMobile = breakpoint === 'xs' || breakpoint === 'sm';

	const navRef = useRef<HTMLDivElement>(null);

	const [hamburgerMenuSpring, hamburgerMenuApi] = useSpring(() => ({
		config: { friction: 40, tension: 275 },
		transform: 'translateX(100%)',
		onRest: () => {
			if (hamburgerMenuSpring.transform.get() === 'translateX(100%)') {
				document.body.style.overflow = '';
			}
		},
		onStart: () => {
			document.body.style.overflow = 'hidden';
		}
	}));

	const toggleHamburgerMenu = () => {
		const isOpen =
			hamburgerMenuSpring.transform.get() === 'translateX(100%)';
		void hamburgerMenuApi.start({
			transform: isOpen ? 'translateX(0%)' : 'translateX(100%)'
		});
	};

	return (
		<header ref={navRef} style={navbarContainerStyle}>
			<a
				href="/"
				style={{
					color: tertiaryColor,
					fontSize: '1.5rem',
					fontWeight: 'bold',
					textDecoration: 'none'
				}}
			>
				AbsoluteJS
			</a>

			<div
				style={{
					alignItems: 'center',
					display: 'flex'
				}}
			>
				<NavbarUserButtons />
			</div>
		</header>
	);
};
