
An abstraction that contains an embedding function, the [[Embeddings]], etc. to simplify what we normally do for LLM-powered applications.


##### Chroma
* An open-source embeddings store

#### When Should I use one?
* Data is large enough
	* Computing distances to each embedding can get slow or expensive.
	* Rule of Thumb: 10k+ embeddings
* Development Velocity is important

#### How are embeddings store fast?
* They use approximate nearest neighbors (ANN) as opposed to exact nearest neighbors. Exact nearest neighbors takes ***O(n)*** since it has to search through the whole list of embeddings, while ANN takes ***O(log(n))*** -- sublinear!
* ANN essentially exploits the structure of the data; They also trade *recall* for *speed*
* Commonly used ANNs include: inverted file indexes, locality-sensitive hashing, hierarchical navigable small-world graphs (HNSW). HNSW works well with LLMs.