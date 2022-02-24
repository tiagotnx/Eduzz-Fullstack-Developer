Comando para listar
Windows - dir;
Linux - ls;


Comando para navegar entre os diretórios
Windows - cd; cd .. para voltar um nível na navegação.
Linux - cd; cd .. para voltar um nível na navegação.


Comando para limpar a tela do terminal
Windows - cls;
Linux - clear; também é possível utilizar Ctrl + L para limpar a tela do terminal.


Tecla para autocompletar
Windows - Tab;
Linux - Tab;


Comando para criar uma pasta 
Windows - mkdir nome-da-pasta;
Linux - mkdir nome-da-pasta;


Comando para criar arquivo
Windows - echo nome-do-arquivo > nome-do-arquivo.txt;
Linux - echo nome-do-arquivo > nome-do-arquivo.txt;


Comando para deletar arquivos de entro de um diretório
Windows - del nome-da-pasta;


Comando para remover diretório e todo o seu conteúdo
Windows - rmdir nome-da-pasta /S /Q;
Linux - rm -rf nome-da-pasta;  O R da flag significa recursivo, removerá o diretório e tudo o há dentro dele e o F é de force, para aparecer nenhum tipo de confirmação.


######

Utilizando o GIT bach para gerar uma chave ssh
$ ssh-keygen -t ed25519 -C tiagotnx@gmail.com


Comando para exibir chave SSH pública 
$ cat id_ed25519.pub


comando para inicializar o SSH agent
$ eval $(ssh-agent -s)

Comando para passar a chave privada para o agent
$ ssh-add id_ed25519
