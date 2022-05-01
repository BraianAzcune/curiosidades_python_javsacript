# en python todo es una referencia
values = [1,2,3]
# en este momento, se creo una lista y values es su referencia
print(values[1])
# que pasa si hacemos una refencia de la lista values?
values[1] = values
print(values)
print(values[1])
print(values[1][1][1][1][0])

# si quisieramos que la respuesta fuera [1, [1, 2, 3], 3]
# tenemos que usar la operacion copia superficial
values = [1,2,3]
values[1] = values[:]
print(values)


"""en caso de que necesite asegurarse que se realiza una copia de valor, tanto a objetos mutables como inmutables utilice
el metodo 
"""