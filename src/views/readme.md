# Views

* In this folder should be all views shared by routes 

```javascript
// Route example

  <Route path={'/'} component={MainView}>
    <Route path={'home'} component={Home}/> This route is passed to Children prop of MainView
  </Route>


// View Class example
class MainView extends React.Component {

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    ); 
  }
}
```