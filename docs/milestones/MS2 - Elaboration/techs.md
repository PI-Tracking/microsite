---
sidebar_position: 7
---

# Technologies

**Frontend:** ReactJS, a powerful javascript library for building dynamic and interactive UIs.

**Load Balancer:** Nginx, a powerful load balancer and reverse proxy that can be used to distribute the work among the multiple GPU Workers.

**Message Queue:** RabbitMQ, a reliable and mature message and streaming broker, is easy to use and has multiple support libraries for python and java.

**Main REST API:** Spring boot, a Java framework that simplifies the development of a web app, its easy to setup and has high support. Because all the team members know how to work with this framework, we opted for using it for the main REST API of this project.

**Image and file storage:** MinIO, a powerful and versatile object storage solution that can be used to store, manage, and retrieve large amounts of data.

**Workers Database:** Redis, a fast in-memory database that we can use to temporarily store the data from each GPU Worker, like a person features, etc. that is shared between all the GPU Workers.

**Relational database:** PostgreSQL, a powerful, open source object-relational database management system (ORDBMS) known for its reliability, data integrity, and extensive feature set. Mainly used for storing the user accounts and the detection logs.

**Database for storing logs:** MongoDB, a document-based database, assuring fast read/write operations.

**GPU Workers:** Python/FastAPI, a modern, fast web framework for building APIs with python that supports asynchronous endpoints. We use Python for the GPU Workers because of the large Machine Learning library support and the YOLO library. To integrate this with the rest of the system, we use a RESTful API with FastAPI.

**Results Broker:** Python/FastAPI
