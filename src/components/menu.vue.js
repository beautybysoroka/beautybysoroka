import { ref } from "vue";
import routeNames from '@/constants/routeNames';
const props = defineProps({
    menuItems: {
        type: Array,
        default: () => [
            { to: routeNames.MAIN, label: "Home" },
            { to: routeNames.PLAN, label: "plan" },
            { to: routeNames.PORTFOLIO, label: "Portfolio" },
            { to: routeNames.PRICE, label: "Price" },
            { to: routeNames.QUASTIONNAIRE, label: "Questionnaire" },
            { to: routeNames.MAIN, hash: '#contacts', label: "Contacts" }
        ],
    },
});
const isOpen = ref(false);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['burger-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['burger-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['burger-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
/** @type {__VLS_StyleScopedClasses['burger-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
/** @type {__VLS_StyleScopedClasses['burger-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-link']} */ ;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "burger-menu" },
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.isOpen = !__VLS_ctx.isOpen;
            // @ts-ignore
            [isOpen, isOpen,];
        } },
    ...{ class: "burger-icon" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: ({ open: __VLS_ctx.isOpen }) },
});
// @ts-ignore
[isOpen,];
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: ({ open: __VLS_ctx.isOpen }) },
});
// @ts-ignore
[isOpen,];
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: ({ open: __VLS_ctx.isOpen }) },
});
// @ts-ignore
[isOpen,];
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
Transition;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "slide",
}));
const __VLS_2 = __VLS_1({
    name: "slide",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
if (__VLS_ctx.isOpen) {
    // @ts-ignore
    [isOpen,];
    __VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({
        ...{ class: "menu" },
    });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
        // @ts-ignore
        [menuItems,];
        const __VLS_5 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
        // @ts-ignore
        RouterLink;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
            ...{ 'onClick': {} },
            key: (item.to),
            to: ({ name: item.to, hash: item?.hash }),
            ...{ class: "menu-link" },
        }));
        const __VLS_7 = __VLS_6({
            ...{ 'onClick': {} },
            key: (item.to),
            to: ({ name: item.to, hash: item?.hash }),
            ...{ class: "menu-link" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        let __VLS_9;
        let __VLS_10;
        const __VLS_11 = ({ click: {} },
            { onClick: (...[$event]) => {
                    if (!(__VLS_ctx.isOpen))
                        return;
                    __VLS_ctx.isOpen = false;
                    // @ts-ignore
                    [isOpen,];
                } });
        const { default: __VLS_12 } = __VLS_8.slots;
        (item.label);
        var __VLS_8;
    }
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['burger-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['burger-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-link']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    setup: () => ({
        ...props,
        ...{},
    }),
});
export default {};
