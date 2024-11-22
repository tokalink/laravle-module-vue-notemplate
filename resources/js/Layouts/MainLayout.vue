<template>
    <div>
      <header>
        <h1>My Application</h1>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </template>

  <script>
  export default {
    name: 'MainLayout'
  };
  </script>
