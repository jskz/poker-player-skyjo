#!/bin/bash

set -e

npm test
git add .
git commit -m "next iteration"
git push