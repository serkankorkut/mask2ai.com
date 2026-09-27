import { readFileSync } from "node:fs";

const key = "f06db16ff4a7f53263e1f8f5ed0ca40c";
const urlList = [...readFileSync("public/sitemap.xml", "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: "mask2ai.com", key, keyLocation: `https://mask2ai.com/${key}.txt`, urlList })
});
console.log(res.status, res.statusText, urlList.length, "urls");