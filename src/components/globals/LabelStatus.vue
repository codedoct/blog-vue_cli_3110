<template>
    <active v-if="status === 1"></active>
    <inactive v-else-if="status === 0"></inactive>
</template>

<script>
import Active from '@/components/globals/label/Active';
import Inactive from '@/components/globals/label/Inactive';

export default {
    props: {
        status: { required: true }
    },
    components: {
        Active,
        Inactive
    }
};
</script>
