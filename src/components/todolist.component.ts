import { Component } from '@angular/core';

@Component({
  selector: 'todolist',
  styles:['div {text-align: center}'],
  template: `
     <!--App-->
<section class="todoapp">

  <!--Header-->
  <header class="header">

    <!-- Header Title-->
    <h1>todos</h1>

    <!--Header Form-->
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus>
  </header>

  <!-- Content -->
  <section class="main">

    <!-- Toggle-->
    <input class="toggle-all"
           type="checkbox">

    <!-- List -->
    <ul class="todo-list">

      <!-- Item -->
      <li>

        <div class="view">
          <input class="toggle"
                 type="checkbox">

          <label>Todo Tittle</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>

      <!-- Completed -->
      <li class="completed">

        <div class="view">
          <input class="toggle"
                 type="checkbox"
                 checked>

          <label>Todo Tittle</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>

      <!-- Editing Item -->
      <li class="editing">

        <div class="view">
          <input class="toggle"
                 type="checkbox">

          <label>Todo Tittle</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>

      <!-- /Item-->
    </ul>
    <!-- /List-->
  </section>
  <!-- /Content-->

  <!--Footer-->
  <footer class="footer">
    <span class="todo-count">
      <strong>1</strong>
      item left
    </span>
    <button class="clear-completed">Clear completed</button>
  </footer>
  <!--End Footer-->

</section>
<!--/App-->
    `,
})

export class TodolistComponent {}
