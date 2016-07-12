VolunteerApp

User login:
route = POST, path = "/login", data = name, password

User logout:
route = POST, path = "/logout"

Show Events:
route = GET, path = "/events"
service = getting events in event service
controller = rendered with available controller

Add an event
route = POST, path = "/add-event", data = event object
service = posting events added for the volunteer in event service
controller = rendered with registered controller

Delete an event:
route = POST, path = "/delete-event", data = event object
service = deleting events added for the volunteer in event service
controller = rendered with registered controller
