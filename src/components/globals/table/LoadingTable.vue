<template>
    <tbody>
        <tr>
            <td :colspan="colspan" class="uk-text-center"><div uk-spinner></div></td>
        </tr>
    </tbody>
</template>

<script>
export default {
    props: {
        colspan: {
            required: true,
            type: Number
        }
    }
};
</script>
