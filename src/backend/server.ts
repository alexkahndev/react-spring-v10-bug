import {
	build,
	networkingPlugin,
	handleReactPageRequest
} from '@absolutejs/absolute';
import { staticPlugin } from '@elysiajs/static';
import { Elysia } from 'elysia';
import { Example } from '../frontend/pages/Example';

const manifest = await build({
	buildDirectory: 'build',
	assetsDirectory: 'src/backend/assets',
	reactDirectory: './src/frontend/'
});

if (manifest === null) throw new Error('Manifest was not generated');
const { ExampleIndex } = manifest;
if (ExampleIndex === undefined)
	throw new Error('ReactExampleIndex was not generated');

new Elysia()
	.get('/', () => handleReactPageRequest(Example, ExampleIndex))
	.use(networkingPlugin)
	.use(staticPlugin({ assets: './build', prefix: '' }))
	.on('error', (error) => {
		const { request } = error;
		console.error(
			`Server error on ${request.method} ${request.url}: ${error.message}`
		);
	});
