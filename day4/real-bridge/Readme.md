# Figure out your own IP subnet

On linux:

```bash
ip a
```

or

```bash
ifconfig
```

# Create a mcvlan network using the subnet found above

```bash
docker network create \
  -d macvlan \
  --subnet=192.168.0.0/24 \
  --gateway=192.168.0.1 \
  -o parent=enp2s0 my-network
```


# Add containers to this network

```bash
docker run -d --network my-network nginx
```
