# Commit 1
- Add WizardComponent sample code to the Main View.
- Dynamically render WizardSteps based on an array in TS.

# Add echo server to the application
- It supports a POST request for /echo and return the same response as received in the request's body.
- This allows us to control the api response from the UI itself.

# Multiple pages and routing
- Add new view and controller for post login.
- Add route for post login page.
- To route to page, you can either use Link tag in xml or this.getRouter().navTo('path') inside the controller.
## Steps for creating a new route
- Create PageName.view.xml and PageName.controller.ts. They must have same prefix.
- Update manifest.json for new routes, mapping /url-path to view_name which is PageName in this case.