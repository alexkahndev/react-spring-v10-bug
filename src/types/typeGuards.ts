import { NavbarDropdown, NavbarElement } from './types';

export const isNonEmptyString = (
	str: string | null | undefined
): str is string => str !== null && str !== undefined && str.trim() !== '';

export const isNavbarDropdown = (
	element: NavbarElement
): element is NavbarDropdown => 'links' in element;
