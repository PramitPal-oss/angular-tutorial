# Data Binding In Angular

##### Binding

1. **InterPolation** {{}} : It is called string interpoletion. It is one way data binding from the comoponent class to Template .

2. **Property Binding** [] : It is also one way data binding from the component class to a property of an HTMLK element.

3. **Event Binding** () : It is also one way data boinding from HTML template to the component Class. With Event binding we can execute handlers wth user interactions.

4. **Two-way Binding** [()] : In ensures that model and view always in sync. It combine property and event bindging with a single notetation which i banana in a box or parenthesis inside the square bnracket.

5. _How to access an DOM element In the template from the component class_ :
   Lets say we want to focus the input field on the page load. In that case we use viewChild decorator to access the dom element in the template.

   ```js
   @viewChild('nameref')
   ```

It is used for which of the dom element it has to reference. Fo that we use viewChild decorator.
