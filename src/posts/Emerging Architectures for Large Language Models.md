Emerging Architecture for [[Large Language Model]]s. The Design Pattern used for this is [[In-context Learning]]. 
Essentially, this arch allows for *data-freshness* and *hallucination* problems, while not having to need parameter-heavy fine-tuning.


> In-context learning solves this problem with a clever trick: instead of sending all the documents with each LLM prompt, it sends only a handful of the most relevant documents. And the most relevant documents are determined with the help of . . . you guessed it . . . LLMs.


##### Different Methodologies
* OPL Stack for In-context Learning
	* Data Preprocessing
	* Prompt Construction/Retrieval
	* Prompt Execution/Inference
* Open-source Pretrained LLM --> Create Instruction Dataset ---> Fine-tune  (LoRA) --> Optional: Other Domain Adaptation Methods (e.g. Prompt Tuning, Distillation, etc.) --> Add RLHF or IHF --> Prompt Construction --> Inference


#### Question
* When do I use the fine-tuning approach over the in-context learning approach?
	* I believe the fine-tuning approach is used on top of the in-context learning approach for improvements in efficiency and accuracy (smaller yet more accurate model).

##### From WandB LLM-powered application course
![[OPL Arch from WandB LLM Course.png]]

##### Source
* [A16z's Emerging LLM Archs](https://a16z.com/2023/06/20/emerging-architectures-for-llm-applications/)
* [OPL Stack]()
* [LLM in Production by Chip Huyen](https://huyenchip.com/2023/04/11/llm-engineering.html)
* 