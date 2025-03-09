---
sidebar_position: 3
---

# Use Cases

## Use Cases UML Diagram

![Use Cases UML Diagram](/img/use-cases.png)

## Personas

### Persona 1

- **Name:** Stuart Little
- **Age:** 43 years old
- **Role:** Chief of Police Department
- **City:** Coimbra
- **Background:**: Stuart is the Chief of the Police Department at a PSP station based in Coimbra who is responsible for supervising, coordinating and leading police teams for whose results he is responsible.
- **Problem:** With the recent rise in crime rates, Stuart’s department is overwhelmed with investigations that require extensive surveillance footage review. This process is extremely time-consuming, even with multiple police agents assigned to it, leading to delays in solving cases. 
- **Needs:** A software that helps both Stuart and his police agents keep track of suspects and their movements more efficiently. As a high-ranking official, he also wants to be able to control who has access to the software to avoid abuse of power.

### Persona 2

- **Name:** Robin Hood
- **Age:** 30 years old
- **Role:** Police Agent
- **City:** Coimbra
- **Background:**: Robin is a PSP agent working in Coimbra. He is married and has two children with whom he cherishes spending quality time.
- **Problem:** Since Robin works mainly on investigations, many times he ends up having to check surveillance cameras videos to track criminals and their movements. With the high number of city cameras and possible escape routes, this ends up being very time-consuming and Robin ends up doing extra hours, missing his so-regarded family time. 
- **Needs:** A tool that automates the suspect-tracking process, allowing him to follow a suspect's movement with the click of a button, making his job easier and faster.

## Scenarios

### Scenario 1: The Shop Robbery

Robin is investigating a crime involving a shop robbery. While reviewing footage from a surveillance camera outside the commercial establishment, he spots the suspect holding a weapon while fleeing the crime scene. To gather further evidence, he needs to track the suspect’s movement across the city using available traffic cameras. This manual process could take hours if he is unlucky. Instead, Robin opens our Tracking App and selects the timestamp and registered city camera where the suspect was last seen. Leveraging the system’s built-in automatic weapon detection, the software quickly identifies the suspect and begins scanning other registered city cameras. As soon as the suspect moves out of the initial camera’s frame, the system continues tracking the suspect across the city. Once the tracking process is complete, Robin can access a detailed movement log showing every known location the suspect passed through, significantly improving evidence collection and accelerating the investigation.

### Scenario 2: The new agent
Stuart has just admitted a new investigation agent to its unit and wants him to start working on a recent case where a suspect was tracked using our Tracking App. However, since the agent is new, Stuart wants to ensure that he does not have unrestricted access to all city cameras right away. To provide the necessary information while maintaining security, Stuart logs into the app and downloads the **investigation logs** related to the case. He then shares these logs with the new agent, allowing him to analyze important findings without direct access to the surveillance system. In the future, if necessary, he can register a new account for him, granting appropriate access permissions so he can use the system autonomously.

## Use Cases

### UC1. Registering a new user

As an administration official (Chief of Police), I want to register a new user, so that they can access the system and perform their duties.  

#### Acceptance Criteria:  
**Scenario:** Registering a new user  
- Given that I am an authenticated administration official  
- When I navigate to the user management panel and enter the required information  
- Then the system should successfully create a new user account  
- And the new user should receive appropriate access permissions 
 
**Priority:** 4 \
**Difficulty:** 2 

### UC2. Unregistering a user 
As an administration official (Chief of Police), I want to unregister a user, so that they no longer have access to the system. 

#### Acceptance Criteria: 
**Scenario:** Removing a user from the system 
- Given that I am an authenticated administration official 
- When I navigate to the user management panel and select a user to remove 
- Then the system should revoke the user’s access 
- And all their assigned permissions should be removed 
 
**Priority:** 3 \
**Difficulty:** 2 
 
### UC3. Registering a new camera 
As an administration official (Chief of Police), I want to register a new surveillance camera, so that it can be used for suspect tracking. 

#### Acceptance Criteria: 
**Scenario:** Adding a new camera to the system 
- Given that I am an authenticated administration official 
- When I enter the camera details and register it in the system 
- Then the camera should be available for video processing and suspect tracking 
- And it should be listed among the registered cameras in the system 
 
**Priority:** 4 \
**Difficulty:** 3 
 
### UC4. Unregistering a camera 
As an administration official (Chief of Police), I want to remove a surveillance camera, so that it is no longer used in the system. 

#### Acceptance Criteria: 
**Scenario:** Removing a camera from the system 
- Given that I am an authenticated administration official 
- When I select a registered camera and choose to remove it 
- Then the camera should be removed from the system 
- And it should no longer be used for tracking 
 
**Priority:** 4 \
**Difficulty:** 3 
 
### UC5. Uploading a video to a registered camera 
As a police agent, I want to upload a video to a registered camera, so that I can analyze it using the system. 

#### Acceptance Criteria: 
**Scenario:** Uploading a video to a camera 
- Given that I am an authenticated police agent 
- When I select a registered camera and upload a video 
- Then the system should associate the video with that camera 
- And the video should be available for suspect tracking 
 
**Priority:** 5 \
**Difficulty:** 3 
 
### UC6. Checking for weapons and suspects across all cameras 
As a police agent, I want to check for weapons and suspects in all registered cameras, so that I can identify potential threats. 

#### Acceptance Criteria: 
**Scenario:** Detecting weapons and suspects 
- Given that I am an authenticated police agent 
- When I initiate a system-wide scan for weapons and suspects 
- Then the system should process video feeds and highlight any identified weapons or suspects 
- And provide a summary of all detections, including timestamps and locations 

**Priority:** 5 \
**Difficulty:** 5 
 
### UC7. Checking for weapons and suspects in uploaded videos 
As a police agent, I want to check for weapons and suspects in uploaded videos, so that I can analyze past footage. 

#### Acceptance Criteria: 
**Scenario:** Detecting weapons and suspects in an uploaded video 
- Given that I am an authenticated police agent 
- When I select an uploaded video for analysis 
- Then the system should process the video and identify any weapons or suspects 
 
**Priority:** 4 \
**Difficulty:** 4 
 
### UC8. Selecting a suspect in a video frame for tracking 
As a police agent, I want to manually select a suspect in a camera frame, so that I can track his movement across other cameras. 

#### Acceptance Criteria: 
**Scenario:** Marking a suspect for tracking 
- Given that I am an authenticated police agent viewing a video frame 
- When I select a person to mark as a suspect 
- Then the system should initiate tracking of that suspect across registered cameras 
 
**Priority:** 5 \
**Difficulty:** 5 
 
### UC9. Downloading video clips where a suspect appears 
As a police agent, I want to download surveillance video segments where a suspect appears, so that I can have visual support on what that suspect did while on camera. 

#### Acceptance Criteria: 
**Scenario:** Exporting video clips of a suspect 
- Given that I am an authenticated police agent 
- When I select a suspect and request a video export 
- Then the system should generate and provide video segments where the suspect is detected 
 
**Priority:** 3 \
**Difficulty:** 3 
 
### UC10. Retrieving tracking logs for a suspect 
As a police agent, I want to retrieve the tracking logs of a suspect, so that I can analyze his movements. 

#### Acceptance Criteria: 
**Scenario:** Accessing suspect tracking logs 
- Given that I am an authenticated police agent 
- When I search for a suspect’s tracking history 
- Then the system should display a detailed movement log 
- And provide an option to visualize the suspect’s path on a map 
 
**Priority:** 4 \
**Difficulty:** 3 

