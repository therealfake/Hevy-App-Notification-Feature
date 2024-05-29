# Hevy-App-Notification-Feature
I frequently hear conversations where people say they’re going back to the gym, they want to be more fit. But, after the first few visits life happens and some stop going, which is a crucial part of staying healthy and meeting their health goals. With that mind, how do you motivate more people to consistently exercise? This takes me back to a TEDTalk I watched a while back where the CEO of Duolingo, Luis von Ahn on how to make learning a language as addicting as social media: [How to Make Learning as Addictive as Social Media | Luis Von Ahn | TED](https://www.youtube.com/watch?v=P6FORpg0KVo&t=304s). At timestamp 5:04, Luis explains that for Duolingo it came down to two things, daily streaks and notifications to come back to the app to learn. Currently HEVY has streaks, but no such notifications that I’m aware of to remind you to work out.


This brings me to my motivation to add a notification reminder feature to workout. I plan to implement a simple version of this feature as I don’t have full access to this app. How this notification system will work:
-  remind you (via email) 24 hours after your last workout to workout again (“What a very sophisticated millions of dollars of AI found was that if you were free yesterday at 3pm, you’re probably free at 3pm today as well” - Luis von Ahn).
- The method is email as I have no access to the app right now, but ideally would also be done via in-app notification
after 7 days of inactivity you will be issued a final reminder that the reminders will stop.
Manually input email and mock api response coherent to current schema at https://api.hevyapp.com/docs/#/Workouts/get_v1_workouts   


Limitations:
- What if a user deletes their most recent workout?
- API Key to make API requests
- Not having the user’s email


Related opportunities for growth:
- Widgets on home screen of phones to display streaks
- Better algorithm (maybe AI powered?) on when to remind people to workout
- User’s being able to set goals for how many days they want to work out or fitness goals through a survey upon signing up (later adjustable in the settings menu)
