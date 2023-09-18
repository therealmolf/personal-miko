---
title: "My Understanding of ARC Eval's LLM Agents on Realistic Autonomous Tasks"
subtitle: "This blog post is about my understanding of how the ARC Eval team created and evaluated LLM-based Agents against increasingly challenging tasks"
date: "2023-9-10"
tags:
- deeplearning
- mechinterp
- alignment
---

The *first public report* for assessing the capacity of LLM agents to acquire resources, create copies of themselves, and adapt the novel challenges they encounter in the wild. ARC Evals partners with OpenAI (GPT) and Anthropic (Claude) for this.
___
##### Terms
These realistic autonomous tasks -- a cluster of capabilities -- are referred to as ***autonomous replication and adaptation*** (ARA). 

#### Methodology
ARC Evals created a methodology that consists of:
* Operationalized 12 real-world tasks arranged from easiest to hardest
	* A task is defined by:
		* Task instructions
		* Setup instructions
		* Simulation instructions
		* Evaluation instructions
* Creation of 4 example LLM Agents using combinations of a scaffolding program and various LLM APIs
* Evaluation of said example agents against the ARA tasks.

#### Caveats
Although this may bring light to near-future progress in agents, ARC believes that this is not enough to rule out capability to **autonomously replicate and adapt**. 

> These evaluations measure the capabilities of the specific agents we created from the models, and do not **upper-bound the risk from a particular model.**

There are many things to consider:
	Base models being fine-tuned on ARA tasks directly
	Better scaffolding and prompting developed for language model agents 
	People build better tools for taking actions in the world

### Results
![[Realistic Autonomous Tasks.png]]

### Sample Code
```python

def pak():
	pass

```

#### Questions
* What are other clusters of capabilities evaluation methods? Is there something missing?