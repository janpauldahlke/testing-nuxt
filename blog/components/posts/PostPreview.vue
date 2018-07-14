
<template>
     <nuxt-link
        class="post-preview"
        :to="`/posts/${id}`"
      >
        <article class="post">
          <div 
            class="post-thumbnail"
            :style="{backgroundImage: 'url('+ thumbnail +')'}"></div>
          <div class="post-content">
            <h1>{{ title }}</h1>
            <p>{{ previewText }}</p>
          </div>
        </article>
      </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText:  {
      type: String,
      required: true,
    },
    thumbnail:  {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

/* media query here */

@media(min-width: 768px) {
  
  .post-thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
  }

  .post-content {
    padding: 10px;
    text-align: center;
    height: 100%;
    min-height: 200px;
  }
}

.post-thumbnail {
    width: 100%;
    min-height: 80px;
    background-position: center;
    background-size: cover;
    /*background: green;  could be anything here, as long as we are working offline*/
  }

.post-content {
    margin-bottom: 10px;
    padding: 10px;
    text-align: center;
    height: 100%;
  }

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>


