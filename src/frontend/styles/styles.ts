import { CSSProperties } from 'react';
import { HALF } from '../../constants';

export const primaryColor = '#A0E7E5';
export const secondaryColor = '#B4F8C8';
export const tertiaryColor = '#4A4E69';
export const quaternaryColor = '#22223B';

type ButtonStyleProps = {
	backgroundColor?: string;
	color?: string;
	width?: string;
};
export const buttonStyle = ({
	backgroundColor = 'none',
	color = 'white',
	width
}: ButtonStyleProps): CSSProperties => ({
	alignItems: 'center',
	backgroundColor,
	border: 'none',
	borderRadius: '0.3125rem',
	color,
	cursor: 'pointer',
	display: 'flex',
	fontSize: '1rem',
	fontWeight: 'bold',
	justifyContent: 'center',
	margin: '0.3125rem',
	padding: '0.625rem 1rem',
	textDecoration: 'none',
	textWrap: 'nowrap',
	width
});

export const formStyle: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
	padding: '16px',
	width: '300px'
};

export const formButtonStyle = (isFullOpacity?: boolean): CSSProperties => ({
	backgroundColor: '#007bff',
	border: 'none',
	borderRadius: '4px',
	color: '#fff',
	cursor: isFullOpacity ? 'pointer' : 'not-allowed',
	fontSize: '14px',
	opacity: isFullOpacity ? 1 : HALF,
	padding: '8px 16px'
});

export const headingStyle: CSSProperties = {
	color: '#333',
	fontSize: '2.5rem',
	marginBottom: '20px',
	textAlign: 'center'
};

export const paragraphStyle: CSSProperties = {
	color: '#333',
	fontSize: '1.2rem',
	lineHeight: '1.5',
	marginBottom: '20px',
	maxWidth: '600px',
	textAlign: 'center'
};

export const linkStyle: CSSProperties = {
	color: '#fff',
	fontSize: '1.2rem',
	fontWeight: 'bold',
	textDecoration: 'none'
};

export const contentStyle: CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	justifyContent: 'center'
};
