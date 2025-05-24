import { FiUser } from 'react-icons/fi';
import {
	oauthButtonStyle,
	oauthButtonContentStyle,
	oauthIconStyle,
	oauthButtonTextStyle
} from '../../styles/authModalStyles';

type OAuthLinkProps = {
	mode: 'login' | 'signup';
	provider: string | undefined;
};

export const OAuthLink = ({ mode, provider }: OAuthLinkProps) => {
	const defaultData = {
		logoUrl: '/assets/svg/todo-put-file.svg',
		name: 'other provider',
		primaryColor: 'lightgray'
	};

	const isProviderSelected = provider !== undefined;

	const buttonText =
		mode === 'login' ? `Sign in with ${name}` : `Sign up with ${name}`;

	return (
		<a
			href={provider ? `/oauth2/${provider}/authorization` : undefined}
			style={oauthButtonStyle({
				isProviderSelected,
				providerPrimaryColor: defaultData.primaryColor
			})}
		>
			<div style={oauthButtonContentStyle}>
				{provider ? (
					<img
						src={defaultData.logoUrl}
						alt={`${defaultData.name} logo`}
						style={oauthIconStyle}
					/>
				) : (
					<FiUser style={oauthIconStyle} />
				)}
				<span style={oauthButtonTextStyle}>{buttonText}</span>
			</div>
		</a>
	);
};
