---
sidebar_position: 3
---

# Machine Learning Models

## Weapon Detection

For weapon detection, we re-trained the YOLO model with a larger dataset, based in the yolo11s pre-trained model. We've managed to achieve better results, and less false positives, which was our main issue in the beginning.

### Results

#### Confusion Matrix with the new dataset

![Confusion Matrix Final](/img/confusion_matrix_final.png)

Here, we can see that the model achieved a good accuracy values for both weapon and knife detection (0.86 and 0.90 respectively)

#### Confusion Matrix with the old dataset and re-trained model with yolo11s

![Confusion Matrix Old yolo11s](/img/confusion_matrix_old_dataset.png)

Here, we can see that this model has some difficulty in identifying knives, compared to the new one, and the weapon detection accuracy is also lower.

#### Confusion Matrix with the old dataset and old model based in yolov5s

![Confusion Matrix Old yolo11s](/img/confusion_matrix_old_dataset_yolov5.png)

This is the confusion matrix of the model trained by Pedro Monteiro validated against our new dataset. As we can see, it has some difficulty in identifying knives, but still achieves a good accuracy regarding weapon detection.

## Person Segmentation

For person segmentation, we used the model YOLO11n-seg, that was already trained with the COCO dataset for the segmentation task. This model already supports person segmentation, so we didn't perform any additional training, and we used this model as is.

## Pose Model

We also used a pose model from yolo, yolo11n-pose, for detecting key points in people. We needed this for detecting which person is holding a weapon, so when a weapon is identified, we run this model to detect the wrist that is closer to the weapon, thus detecting the suspect, and start tracking him.

## Tracker

We need to use a tracker for keeping track of the same person in consecutive frames, because the models mentioned above, only detect or segment objects in a single frame, and do not keep any state between the frames analyzed. 

To keep that state between frames, and effectively track some object, or a person, we must use a tracker.

We used the default tracker that has an integration with YOLO, the [BoTSORT](https://github.com/NirAharon/BoT-SORT) tracker, that allow us to give unique identifiers to objects or people and keep them in consecutive frames. However, when a person leaves the field of view of the camera, or walks behind an obstacle, the tracker loses that person, and gives it a new identifier.

## Re-identification

As mentioned in the previous point, we need a model that is able to re-identify people, for example when a person walks from one camera FOV to another, the tracker would give him a new identifier, but we must detect that those identifiers belong to the same person.

That being said, for the re-identification task, we did a research in the current State Of the Art, and we found an article that successfully trained a re-identification model that is lightweight, and outperforms most large-sized models, often by a clear margin. [Paper Ref](https://arxiv.org/abs/1905.00953)

We use this model as a feature extractor to extract features from the cropped images of the suspect, and compare them against the features of another detected people, in order to re-identify the suspects.
