### Validations

```js
// get data into db
req.body
req.params
req.query

```

```js
router.post('/', (req, res)=> {
  knex('todo')
    .insert(req.body, 'id')
    .then(()=> {

    })
})
```
