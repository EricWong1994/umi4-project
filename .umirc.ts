export default {
	npmClient: 'pnpm',
	plugins: [require.resolve('@umijs/plugins/dist/unocss')],
	unocss: {
		watch: ['pages/**/*.tsx'], // 添加其他包含 unocss 的 classname 的文件目录
	},
};
