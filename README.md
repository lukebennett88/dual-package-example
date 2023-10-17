# Dual Package Example

This is a demo project that compiles a package with [tsup](https://github.com/egoist/tsup), using named and default exports, as well as a subpath export.

It showcases an error related to the usage of default exports.

```shell
cd packages/package-a
pnpm check
```

I'm also unsure whether creating a `.js` and `.d.ts` barrel to support `"moduleResolution": "Node"` is a good approach or not. I've seen people create folders with only a `package.json`, but I was unable to make it work.
