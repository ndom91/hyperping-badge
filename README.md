# 🏓 Custom Badge (WIP)

Cloudflare Worker for generating custom Readme Badges

**Demo**: [hyperping-badge.ndo.workers.dev](https://hyperping-badge.ndo.workers.dev/?left=NT&right=rules&color=67b246/)

## 🏗️ Setup

1. Clone repo `git clone https://github.com/ndom91/hyperping-badge`
2. Install Dependencies `cd hyperping-badge && npm i`  
3. Install `wrangler` (Cloudflare CLI) if you don't have it yet `npm i -g @cloudflare/wrangler`
4. Run `wrangler dev` for local dev env
5. Run `wrangler preview --watch` for cloud/local dev env
6. Run `wrangler publish` to push to your own Worker subdomain

## ⚙️ Usage

Set your `img src` or equivalent to https://yourdomain?left=text&right=text&color=fff

The query parameters are the following:

- `left`: text which will appear in the left half of the badge
- `right`: text which will appear in the right half of the badge
- `color`: color of the right half of the badge

## 🚧 Todo

Integration with Hyperping: The whole idea behind this worker custom badge project was to be able to dynamically create my own badges based on another projects uptime status via [Hyperping](https://hyperping.io). However, after I'd gotten a rudementary prototype working of this badge worker, I realized that hyperping doesn't yet have an API I can query. They do have websockets which fire off events as they happen to your site, but I can't have an SVG listen to websockets and adjust its output based on the content thereof. So I cleaned this little guy up a bit and just published it as a "custom badge creation in a serverless function" thing. If this is of any use to you, let me know!

## 📺 Preview

![Preview Screenshot](https://i.imgur.com/rnHRlYc.png)

## 📃 License

MIT
