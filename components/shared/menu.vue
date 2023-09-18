<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="py-1.5 rounded-sm text-gray-700 border border-gray-300 px-9 hover:bg-gray-200 bg-gray-100 flex items-center text-2xl font-normal"
        v-bind="buttonProps"
      >
        <slot name="label">
          <Icon name="iconamoon:arrow-down-2-duotone" />
          <p class="leading-[1.8]">ahmed1@</p>
        </slot>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-[257px] border border-gray-200 rounded-[12px] px-[32px] py-[28px] bg-gray-100"
        v-bind="menuProps"
      >
        <div class="py-1">
          <MenuItem
            v-slot="{ active }"
            v-for="(item, index) in items"
            :key="index"
          >
            <slot name="item" :data="item">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                >Edit</a
              >
            </slot>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
defineProps(["items", "buttonProps", "menuProps"]);
</script>
