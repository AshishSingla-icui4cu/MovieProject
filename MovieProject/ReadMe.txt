
Prerequisite:
- npm should be installed and added to environment valriables
- if node_module folder is not there in repo the perform "npm install" form the 
directory where package.json is present
- dotnet core run time should be there


Steps: How to host and run the solution?
- Navigate to the root folder and open cmd
- perform  "dotnet run" command on the command line
- it will host both angular and dot net server 
- copy the url which is shown on the command line
- use that URl to make request form the browser.

**Note******************
Please follow below sequence command, if on chrome data is not visible because of trust certificate issue:
dotnet dev-certs https --clean
dotnet dev-certs https --trust
dotnet run
**********************************
E.g Below are the logs which you can refer for running dotnet run command and picking up the url to check
the applicaiton in the browser   open your browser on http://localhost:62201/ **

C:\Users\user\source\repos\MovieProject\MovieProject>dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\user\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
info: Microsoft.AspNetCore.SpaServices[0]
      Starting @angular/cli on port 62201...
Hosting environment: Development
Content root path: C:\Users\user\source\repos\MovieProject\MovieProject
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
info: Microsoft.AspNetCore.SpaServices[0]
      > MovieProject@0.0.0 start C:\Users\user\source\repos\MovieProject\MovieProject\ClientApp
> ng serve "--port" "62201"

** NG Live Development Server is listening on localhost:62201, open your browser on http://localhost:62201/ **

info: Microsoft.AspNetCore.SpaServices[0]
      Date: 2021-06-18T14:14:31.151Z

info: Microsoft.AspNetCore.SpaServices[0]
      Hash: b4b8ec3ba95d4b29513e
Time: 16488ms
chunk {inline} inline.bundle.js (inline) 3.85 kB [entry] [rendered]
chunk {main} main.bundle.js (main) 76.5 kB [initial] [rendered]
chunk {polyfills} polyfills.bundle.js (polyfills) 597 kB [initial] [rendered]
chunk {styles} styles.bundle.js (styles) 366 kB [initial] [rendered]
chunk {vendor} vendor.bundle.js (vendor) 9.57 MB [initial] [rendered]


info: Microsoft.AspNetCore.SpaServices[0]
      webpack: Compiled successfully.


