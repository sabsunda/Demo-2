@echo off

echo "cleaning the repository....."
call mvn clean
echo "compiling ...."
call mvn package
echo "Deleting webapps from tomcat"
del C:\apache-tomcat-8.0.33\webapps\CMADWebApp.war
echo"Copying webapps to tomcat"
xcopy C:\Jeyagopal_data\GitView\Demo\target\CMADWebApp.war C:\apache-tomcat-8.0.33\webapps\
echo "stop the tomcat server...."
call shutdown.bat
echo "Started the tomcat server...."
call startup.bat