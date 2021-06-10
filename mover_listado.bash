#!/usr/bin/env bash
dirname="$(dirname $(readlink -f $0))"

exec 2>>"$dirname"/LOG_"${0##*/}"_"$(date '+%Y-%m')".log
#exec 2>&1
date

nueva_carpeta="respuesta"
listados="$dirname"/"ordenado.log"


adonde="$dirname"/"$nueva_carpeta"
mkdir -p "$adonde"

echo "ingrese carpeta donde se busca:"
read -r donde

#echo $dirname $file $adonde $donde

while IFS= read -r line
do    
    cp "$donde"/"$line" "$adonde"/"$line"
done < "$listados"



