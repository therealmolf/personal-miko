---
title: "Bullet points on the differences of Capability and Alignment Evaluation Methods"
subtitle: "Briefly Highlights the Advantages and Disadvantages of Capabilities and Alignment Eval Methods"
date: "2023-9-14"
tags:
- deeplearning
- mechinterp
- alignment
---

## Capability
Focuses on whether a model is **capable of performing a task**
* Advantages
	* Fairly simple
	* Enough for now
* Disadvantages
	* Susceptible to deceptive models
	* May not be enough in the future
	* Easy for us to lock ourselves in a particular eval framework that becomes mainstream -- but is insufficient


## Alignment
Focuses on the **propensity** of a model to use dangerous capabilities. 
* Disadvantages
	* Generally difficult to implement since misalignment/failure modes for alignment are elusive
* Note/s
	* Does not necessarily mean mechanistic interpretability
* Understanding-based Evaluations that are currently insufficient, but may be starting points:
	* [Causal Scrubbing](https://www.lesswrong.com/posts/JvZhhzycHu2Yd57RN/causal-scrubbing-a-method-for-rigorously-testing)
		* A principled approach to evaluating the quality of mechanistic interpretations 
		* A systematic **Ablation** method for testing precisely stated hypotheses about how a particular neural network implements a behavior on a dataset.
	* Auditing Games
		* technique for evaluating interpretability tools, not a technique for evaluating the extent to which we understand a model  
	* Prediction-based Evaluation

&nbsp;

### Reference/s
* [When can we trust model evaluations](https://www.lesswrong.com/posts/dBmfb76zx6wjPsBC7/when-can-we-trust-model-evaluations)
* [Towards understanding-based safety evaluations](https://www.lesswrong.com/posts/uqAdqrvxqGqeBHjTP/towards-understanding-based-safety-evaluations)
* [AI Testing Resources](https://alignmentjam.com/aitest)