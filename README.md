# Minimal reproduction of a Module Federation issue

When using `@module-federation/enhanced` v0.8.5 everything works fine.
After upgrading to v0.8.6 or later (tested up to 0.8.8) the dev mode breaks with the following error when trying to run:

```log
[webpack-cli] TypeError [ERR_INVALID_ARG_TYPE]: The "to" argument must be of type string. Received undefined
    at Object.relative (node:path:1264:5)
    at _GenerateTypesPlugin.apply (.../node_modules/@module-federation/dts-plugin/dist/index.js:2489:41)
    at _a3.apply (.../node_modules/@module-federation/dts-plugin/dist/index.js:2644:82)
    at _DtsPlugin.apply (.../node_modules/@module-federation/dts-plugin/dist/index.js:2658:30)
    at ModuleFederationPlugin.apply (.../node_modules/@module-federation/enhanced/dist/src/lib/container/ModuleFederationPlugin.js:58:49)
    at ModuleFederationPlugin.apply (.../node_modules/@module-federation/enhanced/dist/src/wrapper/ModuleFederationPlugin.js:26:24)
    at createCompiler (.../node_modules/webpack/lib/webpack.js:83:12)
    at create (.../node_modules/webpack/lib/webpack.js:156:16)
    at webpack (.../node_modules/webpack/lib/webpack.js:184:32)
    at WebpackCLI.f [as webpack] (.../node_modules/webpack/lib/index.js:80:21) {
  code: 'ERR_INVALID_ARG_TYPE'
}
 ELIFECYCLE  Command failed with exit code 2.
```

# Installation

```bash
pnpm i
```

# Running Demo

Run `pnpm start`. This will build and serve the module on ports 3002 respectively.

- [localhost:3002](http://localhost:3002/)
