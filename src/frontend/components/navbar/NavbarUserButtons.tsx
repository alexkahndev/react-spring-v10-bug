import { useSpring } from '@react-spring/web';
import { useRef, useState } from 'react';
import { buttonStyle } from '../../styles/styles';
import { AuthContainer } from '../auth/AuthContainer';
import { DropdownContainer } from './DropdownContainer';

export const NavbarUserButtons = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const openDropdown = () => {
		setIsDropdownOpen(true);
		void loginDropdownApi.start({ opacity: 1, scale: 1 });
	};

	const closeDropdown = () => {
		setIsDropdownOpen(false);
		void loginDropdownApi.start({ opacity: 0, scale: 0 });
	};

	const handleLoginClick = () => {
		if (isDropdownOpen) {
			closeDropdown();
		} else {
			openDropdown();
		}
	};

	const [loginDropdownSpring, loginDropdownApi] = useSpring(() => ({
		config: { friction: 20, tension: 250 },
		opacity: 0,
		scale: 0
	}));

	const userButtonRef = useRef<HTMLButtonElement>(null);

	return (
		<div
			style={{
				display: 'flex',
				marginLeft: '1.5rem',
				position: 'relative'
			}}
		>
			<button
				ref={userButtonRef}
				onClick={handleLoginClick}
				style={buttonStyle({
					backgroundColor: '#000',
					color: '#fff'
				})}
			>
				Login
			</button>

			{isDropdownOpen === true && (
				<DropdownContainer
					spring={loginDropdownSpring}
					springApi={loginDropdownApi}
					onClose={closeDropdown}
					ignoredElements={[userButtonRef]}
				>
					<AuthContainer />
				</DropdownContainer>
			)}
		</div>
	);
};
