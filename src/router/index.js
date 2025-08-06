import { createRouter, createWebHistory, viewDepthKey } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '@/views/BlogView.vue'
import SingleBlogView from '@/views/SingleBlogView.vue'
import RightSidebarView from '@/views/RightSidebarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: BlogView,
    // },
    {
      path: '/blog',
      name: 'blog',
      components: {
        default : BlogView,
        'right-sidebar': RightSidebarView, 
      }
    },
    {
      path: '/blog/tags/:tag',
      name: 'tag',
      components: {
        default: BlogView,
        'right-sidebar': RightSidebarView,
      },
    },
    {
      path: '/blog/:id',
      name: 'single-blog-view',
      component: SingleBlogView,
    }
  ],
})

export default router
