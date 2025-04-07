var url = execution.getVariable("apiUrl");

var URL = Java.type("java.net.URL");
var Scanner = Java.type("java.util.Scanner");

var connection = new URL(url).openConnection();
connection.setRequestMethod("GET");

var scanner = new Scanner(connection.getInputStream(), "UTF-8");
var apiResponse = scanner.useDelimiter("\\A").next();
scanner.close();

execution.setVariable("apiResponse", apiResponse);

print("API Response: " + apiResponse);
