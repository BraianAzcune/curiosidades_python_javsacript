#!/usr/bin/env bash

echo "primer directorio"
read -r dir1
echo "segundo directorio"
read -r dir2

diff --brief -r "${dir1}"/ "${dir2}"/ > logoutputtoafile.log



