# Introduction to JS

## JavaScript? or ES?

JavaScript is created by Netscape(now Mozilla). but "JavaScript" is technically a trademark licensed by Sun Microsystems(now Oracle).
So Netscape submitted the language for standardization to **ECMA** (the European Computer Manufacture's Association).
In practice, everyone just calls the language JavaScript. This book (also this document) uses the name **ECMAScript** (or **ES**).

## Compatibility Issues

For most of the 2010s, version 5 of the ES standard has been supported by all web browsers.
In order to maintain backward compatibility, ES5 couldn't remove legacy features, no matter how flawed.
So JavaScript's *strict mode* does not allow you to use the old, flawed features.

## What is Node?

Instead of constraining JavaScript to work with the APIs provided by a web browser, Node gives JavaScript access to the entire operating system, allowing JavaScript programs to read and write files, send and recieve data over the network, and make and serve HTTP requests.
Node is a popular choice for implementing web services or writing simple utility scripts as an alternative to shell scripts.

## You want to know what ES can do?

please try charfreq.js. This program requres `node` command for execution, and take one argument.

```shell
node charfreq.js < charfreq.js
```

It reads text from standard input, computes a character frequency histogram from that text, and then prints out the histogram.

```shell
T: ########### 11.00
E: ######### 9.07
R: ####### 6.69
S: ###### 6.05
A: ##### 5.13
N: ##### 4.95
O: #### 4.49
I: #### 3.76
L: #### 3.76
(: ### 3.21
): ### 3.21
U: ### 3.12
.: ### 2.93
C: ### 2.75
H: ### 2.57
;: ## 2.20
F: ## 1.92
{: ## 1.83
}: ## 1.83
=: ## 1.74
D: ## 1.65
G: ## 1.65
M: ## 1.56
1: # 1.19
P: # 1.19
Y: # 1.19
[: # 1.10
]: # 1.10
```
