

//we are violating same origin policty...(SOP)

I will discuss are: JSONP, the use of a server-side proxy and CORS.

There are other alternatives, the most widely used being a technique using iframes and window.postMessage

Since JSONP works by including a script tag (be it in plain HTML or programmatically) which is fetched by a GET request, it only supports Cross-Origin HTTP GETs. If you want to use another HTTP verb (like POST, PUT or DELETE), you cannot use the JSONP approach.


MECHANISM   SUPPORTED HTTP VERBS    SERVER-SIDE MODIFICATIONS REQUIRED? REMARKS
JSONP   GET Yes (return script block containing function call instead of raw JSON)  Requires absolute trust in the server
Proxy   ALL No (but you need an extra proxy component in your origin)   Back-end performs the request instead of the browser. Could prove problematic for authentication
CORS    ALL Yes (return additional HTTP headers)    Not supported on older versions of Internet Explorer. For “complex” requests, needs to make an extra HTTP call (preflighted requests). Some firewalls strip CORS headers.

//https://jvaneyck.wordpress.com/2014/01/07/cross-domain-requests-in-javascript/


Ah, okay, I see. So, normally, JavaScript is not allowed to load stuff from other domains. This is called Same origin policy. But nowadays, you can get around this by configuring CORS or use tricks like JSONP

https://www.eriwen.com/javascript/how-to-cors/

The common ways to get around this are JSON-P, Proxying and message passing via <iframe>s

//http://blog.backand.com/angular-vs-backbone/

Backbone JS is best suited for heavy DOM manipulation.
Angular JS is best suited for very data driven app.


AngularJS offers templating through dynamic HTML attributes added to the document, making representation concise and easy to grasp at a functional level. Backbone.js, on the other hand, builds off of Underscore templates, which gives it a format somewhat similar to Ember. However, the templates offered by Underscore are not nearly as fully-featured as those offered by Angular, meaning that you often need to write custom JavaScript to ensure that your templates are working exactly as they are supposed to.



Angular is more test focused than Backbone....

Angular is a sophisticated framework that provides lot of features by default without the need of any additional plugins. 


Angular is quite an opinionated framework while Backbone is not. It means it has strict rules to follow and provides a clear separation of concerns between Model, View and the Controller.


Angular provides heavy templating features through dynamic HTML attributes that greatly reduces the amount of code we need to write to get our single page appliction up and running. Backbone on the other hand provides templating features using Underscore js but these templating features are not as fully-fledged as Angular. 


//https://www.digitalocean.com/community/tutorials/web-caching-basics-terminology-http-headers-and-caching-strategies
----HTTP caching----------

Caching is supported inherently within the HTTP protocol to eliminate the need for subsequent requests. This ultimately reduces latency and improves performance.  

In HTTP there are set of rules to determine when to serve an object from the cache if it exists. 


Last-Modified: The server will tell the browser what version of the file or resource it is sending. A server returns a Last-modified date along with the file. Next time the browser can check this field and do a special check with the server and can serve the resource from the cache if it has not been modified since. 


ETag : There are cases where using Last-Modified can cause problems like when the server's clock is wrong and may be the time zone is changed at the server location. To eliminate those cases, it is better to use an ETag that is a unique identifier given to every file. So now the client can send the unique identifier to the server to check if the resource has changed. 

Expires : Expires header is probably the oldest approach and also is limited in scope. It sets a time in the future about when the content will expire. At this point, any new request for the same content will go to the server. These days expires is used just for callback for compatability issues. 



