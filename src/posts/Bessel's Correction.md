---
title: "The definition of Bessel's Correction"
subtitle: "The definition of Bessel's Correction"
date: "2023-9-11"
tags:
- stat
- pytorch
- deeplearning
---

If Bessel's Correction is 1/True/Imposed:
	Then you are getting the sample variance or std. You are using an unbiased estimator
Else:
	You are getting the population variance or std. You are using a biased estimator.


This can be found as a keyword arg in PyTorch Tensor methods such as `Tensor.var()` and `Tensor.std()`
