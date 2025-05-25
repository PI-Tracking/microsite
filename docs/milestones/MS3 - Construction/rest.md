---
sidebar_position: 5
---

# Rest APIs

In this project, all the modules communicate between them mainly via REST APIs.

## Main REST API

The main REST API was developed with the Spring Boot framework, in Java, and handles things related to authentication, user management, cameras management, logs, and reports.

### Controllers

#### Cameras Controller

This controller is responsible for registering, listing, editing and toggling a camera.

![Cameras Controller](/img/cameras-controller.png)

#### Users Controller

This controller is responsible for user management

![Users Controller](/img/users-controller.png)

#### Logs Controller

This controller is responsible for the user logs

![Logs Controller](/img/logs-controller.png)

#### Report Controller

This controller is responsible for creating and fetching reports. In this context, a report is basically a set of videos.

![Reports Controller](/img/report-controller.png)

#### Analysis Controller

This controller is responsible for sending an analysis request for a report to the message queue. It is also responsible for starting or stopping a live analysis.

![Analysis Controller](/img/analysis-controller.png)


## Worker API

This module is responsible for applying the machine learning models to the videos and returning the detections and segmentations results.

![Worker Docs](/img/worker-docs.png)

## Broker API

This module is responsible for storing the detections received from the worker(s) in the mongodb database, and sending them to the frontend via websocket. It exposes only a single REST endpoint for receiving the detections from the worker(s).

![Broker Docs](/img/broker-docs.png)
