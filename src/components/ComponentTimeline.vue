<template>
  <Timeline :value="timelineData" align="alternate">
    <template #marker="slotProps">
      <div class="animate__animated animate__faster animate__fadeInUp">
        <font-awesome-icon
          :icon="slotProps.item.icon"
          class="custom-marker p-shadow-5"
        ></font-awesome-icon>
      </div>
    </template>
    <template #content="slotProps">
      <div :class="conditionalFade(slotProps.index)">
        <Fieldset class="fieldsetHover" :legend="slotProps.item.title">
          <ul>
            <li class="custom-info">
              {{ slotProps.item.date }}
              <i :class="`${Icons.Box} text-small`"></i>
              {{ slotProps.item.activity }}
            </li>
            <li v-if="hasUrl(slotProps.item.where)">
              <a
                :href="slotProps.item.where"
                :alt="slotProps.item.where"
                target="_"
              >
                {{ slotProps.item.where }}
              </a>
            </li>
            <li v-else>
              {{ slotProps.item.where }}
            </li>
          </ul>
          <Accordion v-if="slotProps.item.stack.length">
            <AccordionTab header="Stack">
              <p class="accordionText">
                {{ slotProps.item.stack }}
              </p>
            </AccordionTab>
          </Accordion>
          <Accordion v-if="slotProps.item.tasks.length">
            <AccordionTab header="Tasks">
              <p
                class="accordionText"
                v-for="task in slotProps.item.tasks"
                :key="task"
              >
                {{ task }}
              </p>
            </AccordionTab>
          </Accordion>
        </Fieldset>
      </div>
    </template>
  </Timeline>
</template>

<script setup lang="ts">
import { Icons } from "@/enums/enums";
import { timelineData } from "@/data/timelineData";

const hasUrl = (value: string) => value.includes("https");
const conditionalFade = (index: number) =>
  index % 2 !== 0
    ? "animate__animated animate__faster animate__fadeInLeft"
    : "animate__animated animate__faster animate__fadeInRight";
</script>
