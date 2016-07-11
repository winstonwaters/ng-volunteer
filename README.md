VolunteerApp

User login:
route = POST, path = "/login", data = name, password

User logout:
route = POST, path = "/logout"

Show Events:
route = GET, path = "/events"
-getting events in event service
-rendered with available controller

Add an event
route = POST, path = "/add-event", data = event object
-posting events added for the volunteer in event service
-rendered with registered controller

Delete an event:
route = POST, path = "/delete-event", data = event object
-deleting events added for the volunteer in event service
-rendered with registered controller
