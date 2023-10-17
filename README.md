# Dual Package Example

This is a demo project that compiles a package with [tsup](https://github.com/egoist/tsup), using named and default exports, as well as a subpath export.

It showcases an error related to the usage of default exports.

```shell
cd packages/package-a
pnpm check
```

After running this you should see this:
```shell
Build tools:
- @arethetypeswrong/cli@^0.12.2
- typescript@^5.2.2

🤨 CommonJS module simulates a default export with exports.default and exports.__esModule, but does not also set module.exports for compatibility with Node. Node, and some bundlers under certain conditions, do not respect the __esModule marker, so accessing the intended default export will require a .default property access on the default import. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/CJSOnlyExportsDefault.md


┌───────────────────┬───────────────────────┬───────────────────────────────┬──────────────────────────┐
│                   │ "package-a"           │ "package-a/second-entrypoint" │ "package-a/package.json" │
├───────────────────┼───────────────────────┼───────────────────────────────┼──────────────────────────┤
│ node10            │ 🤨 CJS default export │ 🟢                            │ 🟢 (JSON)                │
├───────────────────┼───────────────────────┼───────────────────────────────┼──────────────────────────┤
│ node16 (from CJS) │ 🤨 CJS default export │ 🤨 CJS default export         │ 🟢 (JSON)                │
├───────────────────┼───────────────────────┼───────────────────────────────┼──────────────────────────┤
│ node16 (from ESM) │ 🟢 (ESM)              │ 🟢 (ESM)                      │ 🟢 (JSON)                │
├───────────────────┼───────────────────────┼───────────────────────────────┼──────────────────────────┤
│ bundler           │ 🟢                    │ 🟢                            │ 🟢 (JSON)                │
└───────────────────┴───────────────────────┴───────────────────────────────┴──────────────────────────┘
 ELIFECYCLE  Command failed with exit code 1.
```

I'm also unsure whether creating a `.js` and `.d.ts` barrel to support `"moduleResolution": "Node"` is a good approach or not. I've seen people create folders with only a `package.json`, but I was unable to make it work.
