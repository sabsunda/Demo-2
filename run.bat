@echo off

echo "cleaning the repository....."
call mvn clean
echo "compiling ...."
call mvn package

echo"Copying webapps to tomcat....."
xcopy C:\Jeyagopal_data\GitView\Demo\target\CMADWebApp.war C:\apache-tomcat-8.0.33\webapps\
