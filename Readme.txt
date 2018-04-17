******Workout Tracker Single Page Application*******
1. Open the WorkoutTracker.sln.
2. Need to change the Connection String in the following folders:
	WorkoutTracker.API - Web.config
	WorkoutTracker.Tests - App.config
	Connection String:
	<add name="WorkoutTrackerContext" connectionString="Data Source=DELL\SQLEXPRESS;Initial Catalog=WorkoutTrackerDemo;Integrated Security=True;" providerName="System.Data.SqlClient" />
3. Build the solution
4. I have used Code First Migration of Entity Framework. If the connection string is correct, accessing the application should automatically
   create the database and execute the SQL Stored Procedures.
5. If the above does not work, I have placed the SQL scripts in the "WorkoutTracker.StoredProcedures" folder. Please run "SQL_Init_Script.sql" script first
   and then execute the SPs.
6. I have used Repository Pattern with Entity framework for data access.
7. The WebAPI project used "IISExpress" so make sure to run that before executing the below steps for Angular project
8. The Angular project is under "WorkoutTracker.SPA" folder. Open it in Visual Studio Code and run "npm install" to download the node modules.
9. If there is any change in the WebAPI URL (port), please configure in the environment.ts file of the Angular project which
		Location: ..WorkoutTracker.SPA\src\environments\environment.ts
		Change the "baseApiUrl" below
		export const environment = {
			production: false,
			baseApiUrl: 'http://localhost:51865/api/'
		};
10. Run "ng serve" and access browse to "http://localhost:4200" (This should create the database automatically with all tables provided the connection string is correct"
11. I have used MSTest for creating the Unit tests which is under "WorkoutTracker.Tests" folder.
12. Please let me know if you have any trouble accessing the application at Nakash.Sheikh@cognizant.com


