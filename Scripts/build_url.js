var query = execution.getVariable("query");
var cuisine = execution.getVariable("cuisine");
var intolerances = execution.getVariable("intolerances");
var includeIngredients = execution.getVariable("includeIngredients");
var excludeIngredients = execution.getVariable("excludeIngredients");
var type = execution.getVariable("type");
var number = execution.getVariable("number");

var baseUrl =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=adfa3bc73a4948beb76d5982063adbdc&";

function addParam(url, key, value) {
  if (value != "" && value != null) {
    url += key + "=" + String(value) + "&";
  }
  return url;
}

var apiUrl = baseUrl;
apiUrl = addParam(apiUrl, "query", query);
apiUrl = addParam(apiUrl, "cuisine", cuisine);
apiUrl = addParam(apiUrl, "intolerances", intolerances);
apiUrl = addParam(apiUrl, "includeIngredients", includeIngredients);
apiUrl = addParam(apiUrl, "excludeIngredients", excludeIngredients);
apiUrl = addParam(apiUrl, "type", type);
apiUrl = addParam(apiUrl, "number", number);

print("API URL: " + apiUrl);

execution.setVariable("apiUrl", apiUrl);
