import { homeTitle5 } from '@/constants/texts';
const prices = [
    { title: 'Makeup', price: '700 dkk' },
    { title: 'Makeup plus hair', price: '1000 dkk' },
    { title: 'Arrival before 8am', price: '200 dkk' },
    { title: '+ Bridesmaid makeup ', price: '500 dkk' },
    { title: '+ Bridesmaid makeup & hair.', price: '800 dkk' },
    { title: 'Areas not in greater CPH', price: 'DM me' },
    { title: 'Other cities in Europe', price: 'Depends on distance' }
];
const makeup = [
    { title: 'Classic makeup', price: '700 dkk' },
    { title: 'Artistic makeup', price: '1000 dkk' }
];
const other = [
    { title: 'Brows', price: '350 dkk' },
    { title: 'Eyelashes', price: '250 dkk' }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "price__wrapper" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
(__VLS_ctx.homeTitle5);
// @ts-ignore
[homeTitle5,];
__VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({});
for (const [price, index] of __VLS_getVForSourceType((__VLS_ctx.prices))) {
    // @ts-ignore
    [prices,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "price-block" },
        key: (index),
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "price-block__title" },
    });
    (price.title);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "price-block__price" },
    });
    (price.price);
}
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "price__bridal-includes" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
__VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({});
for (const [price, index] of __VLS_getVForSourceType((__VLS_ctx.makeup))) {
    // @ts-ignore
    [makeup,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "price-block" },
        key: (index),
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "price-block__title" },
    });
    (price.title);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "price-block__price" },
    });
    (price.price);
}
__VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({});
for (const [price, index] of __VLS_getVForSourceType((__VLS_ctx.other))) {
    // @ts-ignore
    [other,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "price-block" },
        key: (index),
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "price-block__title" },
    });
    (price.title);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "price-block__price" },
    });
    (price.price);
}
/** @type {__VLS_StyleScopedClasses['price__wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['price-block']} */ ;
/** @type {__VLS_StyleScopedClasses['price-block__title']} */ ;
/** @type {__VLS_StyleScopedClasses['price-block__price']} */ ;
/** @type {__VLS_StyleScopedClasses['price__bridal-includes']} */ ;
/** @type {__VLS_StyleScopedClasses['price-block']} */ ;
/** @type {__VLS_StyleScopedClasses['price-block__title']} */ ;
/** @type {__VLS_StyleScopedClasses['price-block__price']} */ ;
/** @type {__VLS_StyleScopedClasses['price-block']} */ ;
/** @type {__VLS_StyleScopedClasses['price-block__title']} */ ;
/** @type {__VLS_StyleScopedClasses['price-block__price']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
