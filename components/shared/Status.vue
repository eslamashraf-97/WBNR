<script setup>
import { orderStatus } from "@/constants";

defineProps({
  status: String,
  statuses: {
    default: orderStatus,
    type: Object,
  },
});
</script>

<template>
  <span :class="status" class="text-2xl font-normal leading-normal">{{
    statuses[status]
  }}</span>
</template>

<style scoped>
.pending {
  color: theme("colors.status.yellow400");
}
.confirmed {
  color: theme("colors.status.primary300");
}
.processing {
  color: theme("colors.status.yellow400");
}
.cancelled {
  color: theme("colors.status.error400");
}
.shipping {
  color: theme("colors.status.yellow400");
}
.rejected {
  color: theme("colors.status.error400");
}
.delivered {
  color: theme("colors.status.primary300");
}
.accepted {
  color: theme("colors.status.primary300");
}
.denied {
  color: theme("colors.status.error400");
}
</style>
