def lista_con_valor(valor = 0, lista= []):
	lista.append(valor)
	return lista



if __name__ == '__main__':

	for i in range (10):
		lista = lista_con_valor(i)
		print(lista)


#ejecucion esperada
[0]
[1]
[2]
[3]
[4]
[5]
[6]
[7]
[8]
[9]
#ejecucion real
[0]
[0, 1]
[0, 1, 2]
[0, 1, 2, 3]
[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4, 5]
[0, 1, 2, 3, 4, 5, 6]
[0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 2, 3, 4, 5, 6, 7, 8]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
#info 
#https://docs.quantifiedcode.com/python-anti-patterns/correctness/mutable_default_value_as_argument.html