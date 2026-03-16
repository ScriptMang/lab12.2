## Reflection

1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?

Its important to reformat the data since in the realword an api can span hundreds of properties. You're not going to use all the fields so use only what you need. T
The benefits of having a clean api is its easy to spot errors in the property values.
The other is it can be expanded upon later if you want build a new feature. Its not as easy 
to build a new feature if you unrelated data included.

2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?

Its better to send a generic error message to the client rather than the actual error
because the error given by axios might include a bunch of other errors unrelated to the ones you want to solve. 

3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?

I would use the query parameter and specifiy the language at the end of current 
api/fun-fact route. Then  I would unwrap the value using req.query.language to serve
the  webpage in the right language.