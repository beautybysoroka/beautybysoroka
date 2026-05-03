const __VLS_props = defineProps({
    title: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "text-block" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
(__VLS_ctx.title);
// @ts-ignore
[title,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
(__VLS_ctx.text);
// @ts-ignore
[text,];
/** @type {__VLS_StyleScopedClasses['text-block']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        }
    },
});
export default {};
