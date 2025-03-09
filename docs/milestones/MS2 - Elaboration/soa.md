---
sidebar_position: 1
--- 

# State of the Art

There are some studies related to computer vision and object detection. Our starting point will be the result of Pedro Monteiro's [MSc thesis "_Real-Time Weapon Detection in Surveillance Video
Footages_"](https://ria.ua.pt/handle/10773/42918). In his work, he successfully trained a ML model using [YOLOv5](https://github.com/ultralytics/yolov5) to detect weapons and knives with a large dataset of collected images. The performance metrics of his trained model are reasonably good, compared to other alternatives in that area. \
Since its work, newer models of YOLO have been released, such as [YOLOv8](https://docs.ultralytics.com/models/yolov8/) and [YOLO11](https://docs.ultralytics.com/models/yolo11/), that contains various improvements and support instance segmentation and pose estimation. We can use this to detect and segment the person that is holding a weapon detected by the weapons detection model. This newer versions also support object tracking, for example with the [ByteTrack](https://github.com/ifzhang/ByteTrack) tracker. Its results are heavily degraded when the subject leaves and re-enters the field of view of a camera, but we can look it up and by tuning the model parameters see if we can achieve a good result.
