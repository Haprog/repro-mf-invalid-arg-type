# Minimal reproduction Module Federation issue #3437

This is a minimal reproduction example of issue [module-federation/core#3437](https://github.com/module-federation/core/issues/3437).

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

# Running the demo

Run `pnpm start`. This will build and serve the module on port 3002 using Webpack dev server. If using `@module-federation/enhanced@0.8.6` or later you will see the above error and the app will not start.

- [localhost:3002](http://localhost:3002/)

# Upgrading/downgrading Module Federation version

Switch to 0.8.5 (working version):

```bash
pnpm up @module-federation/enhanced@0.8.5
```

Switch to 0.8.6 (broken version):

```bash
pnpm up @module-federation/enhanced@0.8.6
```
