# Project Overview

This is a JavaScript pairing exercises project. It provides a structured starting point for practising data-fetching and transformation skills in JavaScript. The core challenge is to implement helper functions in `captains-service.js` that read from a local mock REST API (powered by `json-server`) and then sort, filter, transform, and merge the returned data to satisfy a suite of Jest tests.

The mock API (`api/db.json`) exposes two resources — `captains` and `ships` — populated with fictional characters such as Jack Sparrow, Malcolm Reynolds, Jean-Luc Picard, and Han Solo. A pre-built `apiClient.js` wraps `axios` to provide promise-based access to these endpoints, and is not intended to be modified.

