
A Diffusion model is a deep [[Generative Model]] that work by gradually adding Gaussian noise to available training data (forward diffusion process) and then reversing the process (denoising or reverse diffusion process) to recover the data. If I am not mistaken, this has a U-net architecture that resembles an Autoencoder.

___

##### How does it work?
* To implement a forward diffusion process, the authors applied a [[Markov Chains]] that progressively adds Gaussian Noise
  ![[Training Diffusion Image.png]]
* This is then gradually denoised
![[Sampling Diffusion Image.png]]

##### Useful Applications
Readily available text-to-image web applications:
* [Dall-E 2](https://labs.openai.com)
* [DreamStudio](https://beta.dreamstudio.ai/generate)
* Midjourney

In addition, Stability AI has also open-sourced the model weights and source code of Stable Diffusion.

##### Papers
* The earliest paper on diffusion models was from [Deep Unsupervised Learning using Nonequilibrium Thermodynamics](https://arxiv.org/abs/1503.03585), which was cryptically named due to it being inspired by statistical physics.
* 

##### References
1. [Diffusion Models: A Practical Guide](https://scale.com/guides/diffusion-models-guide#diffusion-model-prompt-engineering)
