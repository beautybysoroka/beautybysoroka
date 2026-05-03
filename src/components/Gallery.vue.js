const photos = [];
for (let i = 1; i < 11; i++) {
    photos.push(`/assets/img/photos/${i.toString()}.jpg`);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['gallery']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery']} */ ;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "gallery" },
});
for (const [path] of __VLS_getVForSourceType((__VLS_ctx.photos))) {
    // @ts-ignore
    [photos,];
    __VLS_asFunctionalElement(__VLS_elements.img, __VLS_elements.img)({
        src: (path),
        alt: "img",
    });
}
/** @type {__VLS_StyleScopedClasses['gallery']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
