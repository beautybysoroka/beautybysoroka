import { useRouter } from 'vue-router';
import routeNames from '@/constants/routeNames';
import Menu from '@/components/menu.vue';
const router = useRouter();
const routeToMain = () => { router.push({ name: routeNames.MAIN }); };
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "web-header" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "web-header__empty-block" },
});
__VLS_asFunctionalElement(__VLS_elements.img, __VLS_elements.img)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.routeToMain();
            // @ts-ignore
            [routeToMain,];
        } },
    ...{ class: "web-header__logo" },
    src: "/assets/img/base/logo.svg",
    alt: "",
});
/** @type {[typeof Menu, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Menu, new Menu({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {__VLS_StyleScopedClasses['web-header']} */ ;
/** @type {__VLS_StyleScopedClasses['web-header__empty-block']} */ ;
/** @type {__VLS_StyleScopedClasses['web-header__logo']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
