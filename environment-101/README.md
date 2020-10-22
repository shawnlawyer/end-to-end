# Environment 101

## Getting to know your way around linux 

## Setup
```

cp .env.example .env   
  
docker-compose up -d --build
  
docker exec -it environment-101_app_1 bash

```


## OS: Fedora Linux
Fedora is a Linux distribution developed by the community-supported Fedora Project which is sponsored primarily by Red Hat, a subsidiary of IBM, with additional support from other companies. - Wikipedia


## Tool Manuals and Info

####Show manual for a command
```
man <Command>
```

####Show info about the command (Can be secondary to man)
```
info <Command>
```

## Package Management

####Install a package or packages on your system
```
dnf install -y <Package> <Package> ...
```

####Upgrade a package or packages on your system
```
dnf upgrade
```

####Search packages
```
dnf search <Package>
```

####Remove a package or packages from your system
```
dnf remove <Package>
```

## Networking

####Show all network interfaces and more
```
ifconfig -a
```

####Show network connections
```
netstat
```

## File manipulation

####Update the file last modifi­cation date, if the file does not exist, touch will create a new file
```
touch <File Name>
```

####Copy files
```
cp  <File or Directory Name>  <New File or Directory Name>
```

####Move files, also used to rename a file
```
mv  <File or Directory Name>  <New File or Directory Name>
```

####Delete files or direct­ories ( can be used with -r for recursive)
```
rm  <Directory Name>
```

####Create new directory
```
mkdir <Directory Name>
```
