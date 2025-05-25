---
sidebar_position: 4
---

# Worker Module

The worker module is one of the most important modules of our architecture, as it is responsible for executing all the machine learning models and effectively return the results of weapon detections or suspect segmentations.

This module has two main features:

- Analyzing(*) uploaded videos
- Analyzing(*) frames from live cameras

(*) Analyzing refers to applying the model for weapon detection, and track the suspects among the videos.

## Uploaded Videos Analysis

For the analysis of uploaded videos, we have two possible paths:

1. Detect weapons and track the people holding them
2. Track a suspect manually

### Detect Weapons and track the people holding them

In this mode, the weapon detection model runs 1 frame per second of video, for each uploaded video, looking for weapons. We consider a threshold of 70% to be considered a true positive.

After detecting a weapon, the pose model runs to detect the closest person whose wrist is closest to the detected weapon.

After detecting the person, we run the segmentation model and the tracker to track the person, while running the re-id feature extractor in the cropped images of the person, for storing the suspect features. For this task, we increase the frames per second analyzed from 5 to 10 (because of the tracker).

When the tracker loses the person, the re-id feature extractor is ran for all the detected people of all videos, and that features are compared against the previously collected features from the suspect, using a cosine similarity function (it returns a value between -1 and 1, while 1 is perfect match, and -1 is completely opposite). If the distance between one of the suspect's features vector and one of the detected person is greater than 0.80, we assume that this person is our suspect, and start tracking him again, using the tracker.

If a suspect is detected in the middle of a video, the process of tracking and re-identifying the suspect runs until all the videos end, after that, the weapon detection model continues to run where it stopped when detected the first suspect.

**Note:** We also use the tracker with the weapon detection model, for preventing the process of suspect tracking from happening to the same weapon more than once.

### Track a suspect manually

In this mode, we receive as input the selected video id, the video timestamp, and the selected coordinates within the video. When receiving this request, we use the segmentation model to detect all the people in the frame at the timestamp provided, and check if the coordinates provided are in the segmentation mask of any person.

If that happens, the tracking and re-identification process is the same as before, and the segmentation masks of the suspect are returned as response.

## Live Video Analysis

**NOTE:** For simplification purposes, for live analysis, we only consider one suspect (we track the last person that appeared in a camera holding a weapon).

For the live analysis, we implemented a small script in python (camera-adaptor) that captures a frame in a computer webcam every 200ms (5 fps), and publishes it to a RabbitMQ queue.

This frames are consumed by the worker, and ran through the weapon detection model. If a weapon is detected, we start tracking the person holding it. If the person leaves the camera FOV, or the tracker loses him, the re-id model starts extracting features from the people in the received frames from all cameras, in a similar way described before. Here, each camera has its own tracker.
