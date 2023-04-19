# Metadata Example
This is a directory of metadata that is set as an example for default deployments of the Legitimate Phygital NFT v3 NFT contract.

Legitimate supports the ERC721 Metadata and a subset of the OpenSea specification.

* name - title of your item
* description - description of your item, supports markdown format
* image - the HTTP/ URL to your hosted image
* animation_url - the HTTP/S URL to your hosted video (animation will display instead of image when available)

Files should be named with just the token ID and no extensions. A `locked` file must be provided for when the NFT has not been claimed and revealed.

```
1
2
3
...
locked
```
