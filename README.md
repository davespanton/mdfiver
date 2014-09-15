# mdfiver

Small web application that calculated the MD5 digest of the body of provided urls.

## Usage

### Dependencies

Requires [Node.js](nodejs.org) v0.10.x (tested on v0.10.31). Requires [Docker](www.docker.com) to build and run docker images.

### Install

Install Node dependencies by running `npm install` from the project root.

### Test

Run `npm test` from the project root.

### Use

To use locally run `npm start` from the project root.

This will start the server on `localhost:3000` by default. To change the ip or port, set environment variables `IP` and/or `PORT` before running.

To start the latest image in a docker container, run for example:

    docker run --rm -p 3000:3000 quay.io/davespanton/mdfiver node app/app.js
        
## License

The MIT License (MIT)

Copyright (c) [2014] [David Spanton]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.