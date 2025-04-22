---
sidebar_position: 4
--- 

# System Architecture

![Architecture Diagram](/img/architecture-diagram.jpg)

## Modules

**Frontend:** A web-based client for interacting with the system.

**REST API:** The main API that will interact with the front-end. It will handle the things related to authentication, cameras registration, video uploads, etc.

**Workers:** Module responsible for ingesting the live/uploaded videos, doing a pre-processing for extracting the frames and deciding which ones to forward. The load balancer will evenly distribute the work among the workers. Each worker will apply the YOLO algorithms (and others to be decided) to the video frame sent by the pre-processor. Finally, the post-processor will take the results of the workers, update the global workers state (for example suspect characteristics, etc) and send the results to the broker.

**Results Broker:** This broker will process the analysis result for the video frames, construct a video with the frames, store in the database the analysis result (eg. the detected polygons, timestamps, etc) and send to the client, via websocket the results to be displayed.

**Live camera entrance API:** API for consuming the live cameras videos, transforming it and redirecting them to the message queue.

**Message Queue:** A message queue for handling the live-videos or uploaded videos queues. It will be consumed by the workers module.

## Databases

**Relational Database:** For storing the user's data, cameras information and videos' metadata.

**Document-based Database:** For storing the logs related to the users' actions and the detections of the videos. We've decided to use a database like this because the detections polygons and detection boxes information may not be suitable for storing in a regular relation database.

**File Storage:** A data module for storing the videos themselves. A file-system based storage or a Amazon S3-like service could be used.
