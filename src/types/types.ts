import { AnimatedProps } from '@react-spring/web';
import { CSSProperties, ReactNode } from 'react';

export type AnimatedCSSProperties = AnimatedProps<CSSProperties>;

export type NavbarLink = {
	href: string;
	label: string;
	icon?: ReactNode;
};

export type NavbarDropdown = {
	label: string;
	href: string;
	links: NavbarLink[];
	icon?: ReactNode;
};

export type NavbarElement = NavbarLink | NavbarDropdown;
