curl --request POST \
  --url https://rally1.rallydev.com/notifications/api/v2/webhook \
  --header 'content-type: application/json' \
  --header 'zsessionid: PLEASE FILL WITH YOUR ZSESSION  ID' \
  --data '\n{\n  "AppName":     "My Sample App",\n  "AppUrl":      "http://requestb.in/12ig65n1",\n  "Name":        "My Sample webhook",\n  "TargetUrl":   "http://requestb.in/12ig65n1",\n  "ObjectTypes": ["Defect"],\n  "Expressions": [\n    {\n      "AttributeName": "PlanEstimate",\n      "Operator":      ">",\n      "Value":         10\n    },\n    {\n      "AttributeName": "Workspace",\n      "Operator":      "=",\n      "Value":         "31685839-67fe-4f9d-9470-da56c222998b"\n    }\n  ]\n}'
