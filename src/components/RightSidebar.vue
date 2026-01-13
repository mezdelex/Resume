<template>
  <Sidebar
    class="sidebar-bg sidebar-width"
    :visible="isVisible"
    @update:visible="(value: boolean) => $emit('update:isVisible', value)"
    :baseZIndex="1"
    position="right"
  >
    <ul class="custom-link-wrapper">
      <li class="custom-list-item">
        <router-link to="/">
          <font-awesome-icon
            :icon="Icons.Folder"
            class="custom-projects"
          ></font-awesome-icon>
          Projects
        </router-link>
      </li>
      <li class="custom-list-item">
        <router-link to="/timeline">
          <font-awesome-icon
            :icon="Icons.List"
            class="custom-timeline"
          ></font-awesome-icon>
          Timeline
        </router-link>
      </li>
    </ul>
  </Sidebar>
</template>

<script setup lang="ts">
import { Icons } from "@/enums/enums";
defineProps({ isVisible: Boolean });
</script>
