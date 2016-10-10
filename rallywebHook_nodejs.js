var request = require("request");

var options = { method: 'POST',
  url: 'https://rally1.rallydev.com/notifications/api/v2/webhook',
  headers: 
   { 
     'content-type': 'application/json',
     zsessionid: 'PLEASE_FILL_WITH_YOUR_ZSESSIONID' },
  body: 
   { AppName: 'My Sample App',
     AppUrl: 'http://requestb.in/12ig65n1',
     Name: 'My Sample webhook',
     TargetUrl: 'http://requestb.in/12ig65n1',
     ObjectTypes: [ 'Defect' ],
     Expressions: 
      [ { AttributeName: 'PlanEstimate', Operator: '>', Value: 10 },
        { AttributeName: 'Workspace',
          Operator: '=',
          Value: '31685839-67fe-4f9d-9470-da56c222998b' } ] },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

