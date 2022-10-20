info  - [你知道吗？] dev 模式下访问 /__umi 路由，可以发现很多有用的内部信息。
info  - generate files



[@umijs/plugins | Online try out、debug and test @umijs/plugins with devtools | All badges about @umijs/plugins | DEVTOOL.TECH](https://npm.devtool.tech/@umijs/plugins)

### 报错

#### Cannot find module '@umijs/plugins/dist/unocss'

```
➜  umi4-project git:(master) ✗ pnpm dev

> @ dev /Users/wangshihao/Desktop/github/umi4-project
> umi dev

fatal - Error: Parse config file failed: [/Users/wangshihao/Desktop/github/umi4-project/.umirc.ts]
    at Function.getUserConfig (/Users/wangshihao/Desktop/github/umi4-project/node_modules/.pnpm/@umijs+core@4.0.25/node_modules/@umijs/core/dist/config/config.js:146:17)
    at Config.getUserConfig (/Users/wangshihao/Desktop/github/umi4-project/node_modules/.pnpm/@umijs+core@4.0.25/node_modules/@umijs/core/dist/config/config.js:51:19)
    at Service.run (/Users/wangshihao/Desktop/github/umi4-project/node_modules/.pnpm/@umijs+core@4.0.25/node_modules/@umijs/core/dist/service/service.js:196:37)
    at Service.run2 (/Users/wangshihao/Desktop/github/umi4-project/node_modules/.pnpm/umi@4.0.25_brleimwi42sgjvd2q5ndckrqka/node_modules/umi/dist/service/service.js:58:23)
    at /Users/wangshihao/Desktop/github/umi4-project/node_modules/.pnpm/umi@4.0.25_brleimwi42sgjvd2q5ndckrqka/node_modules/umi/dist/cli/forkedDev.js:24:19
    at Object.<anonymous> (/Users/wangshihao/Desktop/github/umi4-project/node_modules/.pnpm/umi@4.0.25_brleimwi42sgjvd2q5ndckrqka/node_modules/umi/dist/cli/forkedDev.js:37:3)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12) {
  [cause]: Error: Cannot find module '@umijs/plugins/dist/unocss'
  Require stack:
  - /Users/wangshihao/Desktop/github/umi4-project/.umirc.ts
```

pnpm i @umijs/plugins



#### 答案

[Module not found: Error: Can't resolve './uno.css' - Issues Antenna (issueantenna.com)](https://issueantenna.com/repo/umijs/umi-next/issues/545)