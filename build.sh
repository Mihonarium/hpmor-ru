#!/bin/bash

npm run build

find . -name 'index.html' -mindepth 2 -type f -exec sh -c '
    parent="$(dirname "$1")";
    mv "$1" "$parent/../$(basename "$parent").html";
' find-sh {} \;
