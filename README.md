# Hyperping Badge (WIP)

Cloudflare Worker for custom Readme Badge

**Demo**: [hyperping-badge.ndo.workers.dev](https://hyperping-badge.ndo.workers.dev/?left=NT&right=rules&color=67b246/)

## Setup

1. Clone repo `git clone https://github.com/ndom91/hyperping-badge`
2. Install Dependencies `cd hyperping-badge && npm i`
   2.5. Install Wrangler (Cloudflare CLI) if you don't have it yet `npm i -g @cloudflare/wrangler`
3. Run `wrangler dev` for local dev env
4. Run `wrangler preview --watch` for cloud/local dev env
5. Run `wrangler publish` to push to your own Worker subdomain

## Usage

Set your `img src` or equivalent to https://yourdomain?left=text&right=text&color=fff

The query parameters are the following:

- `left`: text which will appear in the left half of the badge
- `right`: text which will appear in the right half of the badge
- `color`: color of the right half of the badge

## Preview

![Preview Screenshot](http://i.imgur.com/rnHRlYc.png)

## License

MIT
