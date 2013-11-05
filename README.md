# MIM [![Build Status](https://travis-ci.org/mediapeers/mim.png?branch=master)](https://travis-ci.org/mediapeers/mim) [![NPM version](https://badge.fury.io/js/mim.png)](http://badge.fury.io/js/mim) [![Code Climate](https://codeclimate.com/github/mediapeers/mim.png)](https://codeclimate.com/github/mediapeers/mim)

A simple MIME type recognition library that works in both browser and Node.js apps

## Installation

### Node.js


Install MIM with npm:

```bash
npm install mim
```

And then require it in your node app:

```javascript
var MIM = require('mim');
```

### Browser

Install MIM with bower:

```bash
bower install mim
```

Or download desired version from on the [Releases](https://github.com/mediapeers/mim/releases) page

Then add the HTML script tag to include MIM in your global Javascript namespace:

```html
<script src="wherever/mim.js"></script>
```

## Usage


### MIME type lookup

```javascript
var mimeType;

mimeType = MIM.getMIMEType('nonexistent');
console.log(mimeType); // displays null

mimeType = MIM.getMIMEType('mkv');
console.log(mimeType); // displays 'video/x-matroska'

mimeType = MIM.getMIMEType('.jpeg');
console.log(mimeType); // displays 'image/jpeg'

mimeType = MIM.getMIMEType('long_file-name.ecma');
console.log(mimeType); // displays 'application/ecmascript'

mimeType = MIM.getMIMEType('/etc/default/whatever.mif');
console.log(mimeType); // displays 'application/vnd.mif'

mimeType = MIM.getMIMEType('/folder with spaces/and file with space.xspf');
console.log(mimeType); // displays 'application/xspf+xml'

mimeType = MIM.getMIMEType('../../discobolos.xyz');
console.log(mimeType); // displays 'chemical/x-xyz'

mimeType = MIM.getMIMEType('https://mediapeers.com/products/12.json');
console.log(mimeType); // displays 'application/json'

mimeType = MIM.getMIMEType('https://s3.amazonaws.com/mpx-ah-ftp/archive_2.zip?token=hello-world');
console.log(mimeType); // displays 'application/zip'
```

### MIME type lookup with default

```javascript
var mimeType;

mimeType = MIM.getMIMEType('nonexistent', 'application/octet-stream');
console.log(mimeType); // displays 'application/octet-stream'
```

# License

MIM is released under the [MIT License](./LICENSE.md).
