# Installation et maintenance de Telescoop

La maintenance est toujours faite via Ansible. Il est donc
nécessaire d'installer Ansible sur son PC, en version 2.9.

Pour pouvoir utiliser Ansible, il faut avoir la clé du
"vault" qui contient des informations sensibles.
Cette clé peut être récupérée dans le Lastpass de l'entreprise Telescoop.
Elle doit être copiée en local, à la racine de ce dépôt, dans un fichier
nommé `vault.key`.

Installation du serveur ou mise à jour de tout :

`ansible-playbook all.yml`

### MAJ du frontend

`ansible-playbook frontend.yml`

### BDD et sauvegardes

### Test d'intégration après déploiement
