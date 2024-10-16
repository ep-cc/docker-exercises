# Overlay Union FS demo

Background material: [Deep Dive into Docker Internals - Union Filesystem](https://martinheinz.dev/blog/44)

## How to run:

```bash
sudo mount -t overlay \
  -o lowerdir=./lower,upperdir=./upper,workdir=./workdir \
  overlay ./merged
```

## How to verify:

Check the content of `./merged`.

Also check the output of `mount` (shows currently active mounts).

## How to undo:

```bash
sudo umount overlay
```
