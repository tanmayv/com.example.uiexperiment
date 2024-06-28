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


# Guarding our homepage so that we can view it only if post login workflow is not required.
- This was such a PITA. 
- Navigation is so fragile. If any of the component you are trying to render is not 100% perfect, your navigation is fucked.
- No good logs to figure what is the actual issue.
- Currently we render Main component first, it checks for post login state and then navigate accordingly.
- Ideally you would want to have a check before navigation, but UI5 has no concept of blocking the navigation, so while you are checking for post login it will render the home page. Dumb bitch!
- Only good way to solve this would to setup multiple targets in UI5. https://sapui5.hana.ondemand.com/sdk/#/topic/2c5c84d207d246bc9f733f29df1ff892. Or maybe using nested routing. Basic idea is to have a common component being initialized/render before the actual content. We can then check for post login in that common component. This would allows us to Guard the contents without actually writing post login check in every component. This is all theoretical as I cant bother with navigation anymore. I miss angular. 
