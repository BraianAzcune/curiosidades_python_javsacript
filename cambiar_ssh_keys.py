import os
carpeta_usuario = os.environ['USERPROFILE']
ruta_ssh = os.path.join(carpeta_usuario, '.ssh')

braian_id_rsa_presente = False
trabajo_id_rsa_presente = False
id_rsa_presente = False

# Verifica si la carpeta .ssh existe
if os.path.exists(ruta_ssh) and os.path.isdir(ruta_ssh):
    archivos_en_ssh = os.listdir(ruta_ssh)
    
    # Verifica la existencia de cada archivo y actualiza las flags
    for archivo in archivos_en_ssh:
        if archivo == 'braian-id_rsa':
            braian_id_rsa_presente = True
        elif archivo == 'trabajo-id_rsa':
            trabajo_id_rsa_presente = True
        elif archivo == 'id_rsa':
            id_rsa_presente = True
else:
    print("La carpeta .ssh no existe en la ruta proporcionada.")

if id_rsa_presente:
    if braian_id_rsa_presente and not trabajo_id_rsa_presente:
        # Renombrar id_rsa a trabajo-id_rsa
        ruta_id_rsa = os.path.join(ruta_ssh, 'id_rsa')
        ruta_trabajo_id_rsa = os.path.join(ruta_ssh, 'trabajo-id_rsa')
        os.rename(ruta_id_rsa, ruta_trabajo_id_rsa)
        print("Se ha renombrado 'id_rsa' a 'trabajo-id_rsa'.")
        # Renombrar id_rsa.pub a trabajo-id_rsa.pub
        ruta_id_rsa_pub = os.path.join(ruta_ssh, 'id_rsa.pub')
        ruta_trabajo_id_rsa_pub = os.path.join(ruta_ssh, 'trabajo-id_rsa.pub')
        os.rename(ruta_id_rsa_pub, ruta_trabajo_id_rsa_pub)
        print("Se ha renombrado 'id_rsa.pub' a 'trabajo-id_rsa.pub'.")
        
        # Renombrar braian-id_rsa a id_rsa
        ruta_braian_id_rsa = os.path.join(ruta_ssh, 'braian-id_rsa')
        os.rename(ruta_braian_id_rsa, ruta_id_rsa)
        print("Se ha renombrado 'braian-id_rsa' a 'id_rsa'.")
        # Renombrar braian-id_rsa.pub a id_rsa.pub
        ruta_braian_id_rsa_pub = os.path.join(ruta_ssh, 'braian-id_rsa.pub')
        os.rename(ruta_braian_id_rsa_pub, ruta_id_rsa_pub)
        print("Se ha renombrado 'braian-id_rsa.pub' a 'id_rsa.pub'.")

    elif trabajo_id_rsa_presente and not braian_id_rsa_presente:
        # Renombrar id_rsa a braian-id_rsa
        ruta_id_rsa = os.path.join(ruta_ssh, 'id_rsa')
        ruta_braian_id_rsa = os.path.join(ruta_ssh, 'braian-id_rsa')
        os.rename(ruta_id_rsa, ruta_braian_id_rsa)
        print("Se ha renombrado 'id_rsa' a 'braian-id_rsa'.")
        # Renombrar id_rsa_pub a braian-id_rsa_pub
        ruta_id_rsa_pub = os.path.join(ruta_ssh, 'id_rsa.pub')
        ruta_braian_id_rsa_pub = os.path.join(ruta_ssh, 'braian-id_rsa.pub')
        os.rename(ruta_id_rsa_pub, ruta_braian_id_rsa_pub)
        print("Se ha renombrado 'id_rsa.pub' a 'braian-id_rsa.pub'.")

        # Renombrar trabajo-id_rsa a id_rsa
        ruta_trabajo_id_rsa = os.path.join(ruta_ssh, 'trabajo-id_rsa')
        ruta_id_rsa = os.path.join(ruta_ssh, 'id_rsa')
        os.rename(ruta_trabajo_id_rsa, ruta_id_rsa)
        print("Se ha renombrado 'trabajo-id_rsa' a 'id_rsa'.")
        # Renombrar trabajo-id_rsa_pub a id_rsa_pub
        ruta_trabajo_id_rsa_pub = os.path.join(ruta_ssh, 'trabajo-id_rsa.pub')
        ruta_id_rsa_pub = os.path.join(ruta_ssh, 'id_rsa.pub')
        os.rename(ruta_trabajo_id_rsa_pub, ruta_id_rsa_pub)
        print("Se ha renombrado 'trabajo-id_rsa.pub' a 'id_rsa.pub'.")

    else:
        print("o ambos estan presentes o ambos no lo estan, no puedo trabajar asi")
else:
    print("no hay un id_rsa configurado")


estaba_en_modo_trabajo = braian_id_rsa_presente and not trabajo_id_rsa_presente

if estaba_en_modo_trabajo:
    print("configurado modo personal")
else:
    print("configurado modo trabajo")

input("presione enter para cerrar")
