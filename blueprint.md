# **App Name**: AquaGuard Dashboard

## Core Features:

- Live Vitals Dashboard: Display real-time data (Heart Rate, SpO₂, Body Temperature, Acceleration, Motor Speed, Battery Level, Connectivity Status) received from the ESP32.
- GPS Tracking: Display GPS Coordinates on Google Maps with an auto-updating marker to show the vehicle's location.
- Distress Alert System: Show a prominent, visually distinct 'DISTRESS ALERT' banner when Firebase receives a distress signal or when manually triggered from the dashboard. Use logic as a tool to determine which type of distress is being signalled and customize alert output based on this.
- Rescue Tracking & Victim Registry: Maintain a record of rescued individuals including name/ID, time/date of rescue, GPS location, and vital stats. Display the total number of rescued people and a scrollable list of rescue records. Connect this website with an ESP32 where it stores all the data for each rescuer which can be later used later for reference.
- Data Visualization: Use Chart.js to display Heart rate trends, Temperature variations and Speed over time. Use color indicators for battery and connectivity health.
- Firebase Integration: Use Firebase Realtime Database for storing live ESP32 readings, rescue logs, and distress signals. Use Realtime Database listeners for instant updates.
- Mobile-Friendly Design: A mobile interface with a button to trigger a distress signal, view live data, and check the number of rescued victims. The UX should also be really interactive

## Style Guidelines:

- Primary color: Teal (#008080) to evoke a sense of the ocean, safety, and reliability.
- Background color: Light teal (#E0F8F8), providing a calming and unobtrusive backdrop.
- Accent color: Light Blue (#ADD8E6) to indicate clickable elements and provide feedback in charts, as a reminder of the aquatic setting and 'help' status.
- Body and headline font: 'Roboto' (sans-serif) for a modern, readable interface suitable for both desktop and mobile viewing. Consider 'Source Code Pro' (monospace) as code font, should such a need arise.
- Use clear and easily recognizable icons for data visualization and alerts. Use filled icons from a consistent set (e.g., Material Icons).
- Responsive grid layout that adapts to different screen sizes. Prioritize key metrics on the dashboard for quick information access.
- Subtle transitions and animations to provide visual feedback (e.g., when data updates or a distress signal is triggered). Use animations to make the UI more appealing to the users