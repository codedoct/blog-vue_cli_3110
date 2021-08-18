<template>
    <active v-if="status === 'active'"></active>
    <inactive v-else-if="status === 'inactive'"></inactive>
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
