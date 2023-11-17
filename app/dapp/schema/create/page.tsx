const SchemaCreatePage = () => {
  return (
    <div>
      <h1>Schema Create Page</h1>

      <form>
        <input type="text" placeholder="Schema ID" />
        <input type="text" placeholder="Schema Address" />
        <input type="text" placeholder="Schema Params" />
        <input type="text" placeholder="Resolver" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SchemaCreatePage;