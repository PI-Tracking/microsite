---
sidebar_position: 5
---

# Data Domain Model

There were several problems that we, as a team, had to address during both the architecture and database planning to reach the project’s main goals. Specifically in the database, there was a need to find secure, persistent and efficient ways to store everything from users and their actions (for security purposes), uploaded videos, detection frames and even suspect data (for ML purposes). Our solution ended up using different databases for different purposes.
Firstly, for user registration and authentication, we used a simple SQL database, since we were accustomed to setting up authentication processes with an SQL database from previous courses.

### Users database diagram

![Users database diagram](/img/users-db.png)

To keep track of each user’s actions, we created a MongoDB database with a collection called action_logs, since it will not have rewrites, and its reads are extremely fast due to being document based. It follows this schema:
Collection: action_logs
```json
{
  "_id": ObjectId, // Unique identifier for each log entry
  "user_cc": String,  // Reference to User (cc)
  "user_name": String,  // User full name
  "action": Enum,  // Action type (LOGIN, UPLOAD_VIDEO, START_DETECTION, LOGOUT, ACCESS_LOGS, SELECT_SUSPECT)
  "log_accessed": Int,  // Id of the accessed log (this field is only needed when action is ACCESS_LOGS)	
  "timestamp": Timestamp, // The date and time the action occurred
}
```

The storage for each camera, images and videos is made in two steps, first, the metadata for videos and detections are saved in another SQL database, which saves references for the true location of each file. The files then are stored in a minIO container to ensure fast access and storage. 

### Cameras database diagram

![Cameras database diagram](/img/cameras-db.png)

Lastly, to support our segmentation, detection and tracking algorithms during an analysis over several cameras we used a Redis database that would store in-memory information related to the suspect to track characteristics. This would ensure that the algorithm performance would not be damaged due to slow reads and writes. (Schema to be decided)
