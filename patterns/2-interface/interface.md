# ExplorableGraph interface

```js
{
  // Return keys we want to make public.
  keys() {},

  // Return the value for a given key.
  get(key) {},
};
```

```js
{
  async keys() {},
  async get(key) {},
};
```

```js
{
  async *keys() {},
  async get(key) {},
};
```

```js
{
  async *[Symbol.asyncIterator]() {},
  async get(key) {},
};
```
