---
sidebar_position: 2
---

# Project Presentation

## Context

- TBD

## Problem

Nowadays, in the context of a crime investigation process, the police officers may have to watch thousands of hours of CCTV footage to track a potential suspect, for example a person holding a weapon in the middle of a crowd. This is a very time-consuming task, and under certain conditions, it can be very hard to track a person. \
For the real-time CCTV systems, a police officer may have to watch hundreds of cameras simultaneously, monitoring thousands of people. This is a difficult task and in the case of a crime, it is very important to quickly track and detain the suspect, before he escapes the CCTV areas.

## Related Work

Pedro Monteiro, in its MSc thesis "Real-Time Weapon Detection in Surveillance Video Footages", successfully trained a ML model using [YOLOv5](https://github.com/ultralytics/yolov5), with a large dataset (22977 images), containing images of handguns and knives. This model has a pretty good accuracy and precision values. However, this work only allows to detect weapons in the images, it does not detect or segment the subject holding them. Nonetheless, it gave us a good starting point for this project, because the first task of detecting weapons is almost done. \
Newer versions of YOLO [YOLOv8](https://docs.ultralytics.com/models/yolov8/) support image [segmentation](https://docs.ultralytics.com/tasks/segment/), allowing us to draw an outline of the subject holding the weapons. With that in mind, we may have to re-train the dataset collected by Pedro Monteiro with this new version of YOLO.

## Goals

- Re-train the collected dataset with YOLOv8
- Create a web-based user interface
- Solve the problem of associating a detected weapon to a person
- Solve the problem of detecting and storing people characteristics
- Track the flagged people and draw a path in a map
- Collect performance and accuracy metrics
- Test the application in different environmental conditions


## Expected Results

- Frontend web-based demonstrator that allows seeing the system in action
- Not a 100% bulletproof detection and tracking model, but with a reasonably amount of accuracy that might help a crime investigation
- An application that can be scalable
