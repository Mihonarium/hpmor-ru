#!/bin/bash

npm run build

find . -name 'index.html' -mindepth 2 -type f -not -path "./build/index.html" -not -path "./build/getbooks/*" -not -path "./build/book/index.html" -exec sh -c '
    parent="$(dirname "$1")";
    mv "$1" "$parent/../$(basename "$parent").html";
' find-sh {} \;
