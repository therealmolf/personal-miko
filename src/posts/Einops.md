A better way to perform flexible and powerful tensor operations for readable and reliable code. Supports JAX, Numpy, PyTorch, etc.

#### Why learn Einops?

> Slowly but surely, einops is seeping in to every nook and cranny of my code. If you find yourself shuffling around bazillion dimensional tensors, this might change your life [Nasim Rahaman, MILA (Montreal)](https://twitter.com/nasim_rahaman/status/1216022614755463169)

### How to use Einops
##### einops.repeat
* Args:
	* tensor
	* string rearrangement pattern
	* *
* `repeat(image_tensor, 'h w -> h w c', c=3).shape`


#### References
* [Find some tutorials here](https://einops.rocks)