<template>
  <Header />
  <component-timeline />
  <Footer />
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import ComponentTimeline from "@/components/ComponentTimeline.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>
:root {
  --custom-background: #282828;
  --custom-blue: #7daea3;
  --custom-green: green;
  --custom-orange: orange;
}

.p-fieldset {
  border-radius: 0.5rem;
}

.fieldsetHover {
  transition: transform 0.2s ease;
  transform: scale3d(1, 1, 1);
  margin: 0.5rem 0 0.5rem 0;
}

.fieldsetHover:hover {
  transform: scale3d(1.03, 1.03, 1.03);
}

.p-fieldset .p-fieldset-legend {
  color: var(--custom-green);
  padding: 0.2rem 0 0.4rem 0;
  padding-inline: 1rem;
}

.p-fieldset-legend-text {
  color: var(--custom-green);
}

.p-fieldset .p-fieldset-content {
  padding: 0;
  font-size: small;
}

.p-accordion .p-accordion-header .p-accordion-header-link {
  color: var(--custom-green);
}

.p-accordion .p-accordion-header .p-accordion-header-link:hover {
  background: var(--custom-orange);
}

.p-accordion
  .p-accordion-header:not(.p-disabled).p-highlight
  .p-accordion-header-link {
  background: var(--custom-orange);
  border-color: var(--custom-orange);
}

.accordionText {
  color: var(--custom-orange);
}

.custom-marker {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
  color: var(--custom-blue);
  border-radius: 5rem;
  padding: 0.5rem;
  z-index: 1;
  background-color: var(--custom-background);
}

.custom-info {
  font-size: x-small;
  font-weight: 600;
  color: var(--custom-blue);
}

.text-small {
  font-size: xx-small;
  margin-inline: 0.1rem;
}

@media screen and (max-width: 960px) {
  .p-timeline-event:nth-child(even) {
    flex-direction: row !important;
  }

  .p-timeline-event-content {
    text-align: left !important;
  }

  .p-timeline-event-opposite {
    flex: 0 !important;
    padding: 0 !important;
  }
}
</style>
