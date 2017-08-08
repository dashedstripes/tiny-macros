# Tiny Macros

Tiny Macros is an editor app that will allow you to easily search, edit, and apply information pulled from Zendesk.

## Getting Started

Install Zendesk Apps Tools on your development machine: https://developer.zendesk.com/apps/docs/apps-v2/getting_started#zendesk-app-tools

Make sure you have yarn installed:
```
$ npm install -g yarn
```

Install dependencies

```
$ yarn install
```

In your first shell start the ZAT Server

```
$ yarn serve
```

In a second shell watch for changes...

```
$ yarn watch
```

## Building for production

Build the `bundle.js` file.

```
$ yarn build
```

Then archive the folder into `tiny-macros.zip`, this will then allow you to install it on your Zendesk instance.
