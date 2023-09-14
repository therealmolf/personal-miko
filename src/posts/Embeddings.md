Essentially, it is a way to represent the meaning of text as a list of numbers. This mostly used in natural language processing and [[Large Language Model]]s.

Embeddings allow for semantic search (even with zero lexical overlap), going beyond traditional search. Hence, these are commonly used with similarity techniques such as *Euclidean Distance* and *Cosine Similarity*.

##### Problems with Embeddings
* Generic Embeddings (via APIs such as HuggingFace and Cohere) may not capture domain-specific documents 
* New terms, proper names etc. my not be represented
##### Solution
* Train your own embedding model
* Combine with classic search algos (e.g. keywords, BM25,  TF-IDF, etc.)

##### How To
Here are some platforms that can be used for embeddings:
* [Getting Started With Embeddings - HuggingFace](https://huggingface.co/blog/getting-started-with-embeddings)
* [Embeddings using Cohere Client](https://docs.cohere.com/docs/embeddings)
* PyTorch (Torch Tensors + Dictionary and Tokenization Methods?)
* Numpy