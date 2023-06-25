# How Parent Component Communicate with child Component:

In this case we have a login phase in the child component Suppose we want to implement the loggin mechanisim in the all the component of the app. so for that we need a central system that can acess all the login mechanisim in one place.

**child-component**

```html
<h2>child Component</h2>

<p *ngIf="loggedIn">Welcome Back</p>
<p *ngIf="!loggedIn">Please Logged In</p>
```

**app component**

```html
<h1>Parent Child RelationShip</h1>
<app-child></app-child>
```
