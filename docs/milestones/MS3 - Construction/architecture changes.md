---
sidebar_position: 2
---

# Architecture Changes

During the development of the workers, which would process any analysis request to detect weapons and track suspects, our team concluded that a separate pre/post-processing was unnecessary, since the main purpose of the pre-processor would be better executed by each individual worker and there was no longer a need to divide videos from the same report into different workers. With that, some changes were made, including adding a database to store detection logs.

## New Architecture Diagram

![Architecture Diagram](/img/new-architecture-diagram.jpg)

