# ExplorableGraph interface

Basic shape:

```js


{
  // Return keys we want to make public.
  keys() {},

  // Return the value for a given key.
  get(key) {},
};


```

Use `async` functions as a lowest-common denominator:

```js


{
  async keys() {},
  async get(key) {},
};


```

Use a generator to cover more cases and for language integration:

```js


{
  async *keys() {},
  async get(key) {},
};


```

Use a JavaScript symbol for language integration:

```js


{
  async *[Symbol.asyncIterator]() {},
  async get(key) {},
};


```

Later: support hierarchical graphs:

```js


{
  async *[Symbol.asyncIterator]() {},
  async get(...keys) {},
};


```

Later: support writing data to a graph:

```js


{
  async *[Symbol.asyncIterator]() {},
  async get(...keys) {},
  async set(...keys, value) {}
};


```
