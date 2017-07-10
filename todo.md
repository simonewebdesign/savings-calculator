# Things I could have done:

- caching users' requests, i.e. when someone calculated something already, fetch it from memory instead of making an HTTP call (I think it would speed things up quite a lot)
- displaying a spinner when a request is made, but a response hasn't been received yet. I didn't do it because I didn't feel like it was necessary. It would make sense only for very slow internet connections
- a more structured API, with separate endpoints for each of interest types, paid 'Monthly', 'Quarterly' or 'Annually'
- API param
- documenting the API in a better way, maybe using apiDoc
s validation, e.g. checking for presence of all parameters and type validation
- debounce
