import { type CSSProperties } from 'react';

export const styleReset = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: inherit;
    }
`;

export const bodyDefault: CSSProperties = {
	backgroundColor: '#f5f5f5',
	color: '#333',
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	margin: 0
};
export const htmlDefault: CSSProperties = {
	fontFamily: 'Poppins, sans-serif',
	height: '100%'
};
export const mainDefault: CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'column'
};
