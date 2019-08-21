---
title: Zeitgeist
excerpt: Zeitgeist is a google chrome extension which helps you find out what other people are thinking.
skills: ['vuejs', 'chrome extension', 'dynamodb', 'ci-cd']
---

![zeitgeist](./images/zeitgeist.jpeg){height=110}

# [Zeitgeist](https://github.com/ZeitgeistOrg)

Zeitgeist is a google chrome extension which helps you find out what other people are thinking. The core idea is simple: whenever you open a new tab, a survey question appears. Once you answer the survey question, you get to see the survey results. That's it. In my opinion, there's a certain beauty in its simplicity.

## Background

The idea was born during a hackathon I attended a few months ago run by Jeff Meyerson, the host of the [software engineering daily podcast ](https://softwareengineeringdaily.com/category/all-episodes/exclusive-content/Podcast/)(highly recommend that podcast). It was simple enough to do in one 8-hour session, but it also had the potential to grow into something much bigger than a survey taking tool. (Spoiler alert: Zeitgeist didn't win the hackathon, but we did receive 3rd place and free sweaters! :coat::coat::coat:)

## The Process

I and my partner, Echo Wu, split the tasks up like this:

1. find out the requirements for creating a google chrome extension
2. write the front end 
3. set up the backend infrastructure
4. write the back end 

Echo is great at logistics and I'm good at execution so we were a match made in heaven. I took on the front end work and the infrastructure and she took the backend work.

## Today

I'm still sometimes working on zeitgeist today. I've recruited my good friend, [Chrisopher](http://www.chris-squared.xyz/) to help finally get it into a production-like state. I'm hoping to get the following finished before that happens:

* some kind of voting system in order to moderate user-submitted questions
* some kind of login system so users can see old answers they've submitted

## Demo

[right here!](/under-construction)

## Technologies Used

### Front end: 

* VueJs: I wanted to use VueJS because I was learning it at the time. I also used it at [aerserv](/portfolio/aerserv). It's one of the most fun uses of javascript I've ever encountered. Vue CLI helped save a boatload of time in boilerplate setup code.

### Back end: 

* Python: Echo and I both love python and it runs really fast on AWS Lambda. We both used it at [aerserv](/portfolio/aerserv).
* AWS Lambda: We didn't want to waste time setting up ec2 instances and running an http server, so we chose lambda. Python runs really fast on it as well.
* Dynamo DB: Neither of knew DynamoDB, but we were all in on AWS and we wanted to learn something new during the hackathon, so there ya' go.

### Infrastructure: 

* CloudFormation: I've been extremely interested to learn about infrastructure as code. I had never used it before and the idea of everything being in code was so appealing that I had to include it in this project somehow
* AWS: AWS is the backbone of everything! Plus it was easy to show off a demo using an s3 bucket.

