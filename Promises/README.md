## Instructions
Download readyState-start.zip in the downloadables section.

Set network throttling so that the page isn't ready instantly.
(Also, it's generally a good practice to have some throttling when testing sites. It'll help you see your site's performance from your users' perspectives.)
Wrap an event listener for readystatechange in a Promise.
If document.readyState is not 'loading', resolve().

Test by chaining wrapperResolved(). If all goes well, you should see "Resolved" on the page!