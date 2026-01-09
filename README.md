# Test project to show problems after unit tests

This project is designed to demonstrate and troubleshoot issues that arise during unit testing. 
It includes various code snippets and configurations 
that are used in our production project. The source code is stripped down on a basic base which shows the issues.

## To run the tests:
```bash
npm install
node_modules/@angular/cli/bin/ng.js test --watch=false --browsers=ChromeHeadless
```

## Errors seen:
```
uites and tests results:

 - AppComponent :
   * should create the app : ok

Browser results:

 - Chrome Headless 143.0.0.0 (Windows 10): 1 tests
   - ok
Elapsed Time: 0:2:183 min/sec/ms

06 01 2026 10:43:47.285:DEBUG [karma-server]: Run complete, exiting.
06 01 2026 10:43:47.286:DEBUG [launcher]: Disconnecting all browsers
06 01 2026 10:43:47.286:DEBUG [launcher]: BEING_FORCE_KILLED -> BEING_FORCE_KILLED
06 01 2026 10:43:47.287:DEBUG [proxy]: Destroying proxy agents
06 01 2026 10:43:47.298:DEBUG [coverage]: Writing coverage to C:/Source/example/coverage/cobertura
06 01 2026 10:43:47.300:DEBUG [coverage]: Writing coverage to C:/Source/example/coverage/html
06 01 2026 10:43:47.312:DEBUG [reporter.junit]: JUnit results written to "C:\Source\example\build\reports\Chrome_Headless_143.0.0.0_(Windows_10)\karma.xml".
06 01 2026 10:43:47.454:DEBUG [launcher]: Process ChromeHeadless exited with code null and signal SIGTERM
06 01 2026 10:43:47.454:DEBUG [temp-dir]: Cleaning temp dir C:\Users\ANDREA~1\AppData\Local\Temp\karma-85745944
06 01 2026 10:43:47.482:DEBUG [launcher]: Finished all browsers
06 01 2026 10:43:47.483:DEBUG [launcher]: BEING_FORCE_KILLED -> FINISHED
06 01 2026 10:43:47.483:DEBUG [launcher]: FINISHED -> FINISHED
06 01 2026 10:43:47.484:DEBUG [karma-server]: Received stop event, exiting.
06 01 2026 10:43:47.485:DEBUG [launcher]: Disconnecting all browsers
06 01 2026 10:43:47.485:DEBUG [launcher]: FINISHED -> BEING_FORCE_KILLED
06 01 2026 10:43:47.485:DEBUG [proxy]: Destroying proxy agents
node:net:2359
        cb(new ERR_SERVER_NOT_RUNNING());
           ^

Error [ERR_SERVER_NOT_RUNNING]: Server is not running.
    at Server.close (node:net:2359:12)
    at Object.onceWrapper (node:events:622:28)
    at Server.emit (node:events:520:35)
    at Server.emit (node:domain:489:12)
    at emitCloseNT (node:net:2419:8)
    at process.processTicksAndRejections (node:internal/process/task_queues:88:21) {
  code: 'ERR_SERVER_NOT_RUNNING'
}
```

## Solution:
Ha! I do not understand the solution, but it seems to work in our production code and in this example repo:

In angular.json change
```
"builder": "@angular-devkit/build-angular:karma",
```
to 
```
"builder": "@angular/build:karma",
```
and make the polyfills string an array: 
```
"polyfills": [ "src/polyfills.ts" ],
```
