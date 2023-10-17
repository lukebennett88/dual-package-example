import { a, default as b } from "package-a";
import { c, default as d } from "package-a/second-entrypoint";

console.log(a(), b(), c(), d());
