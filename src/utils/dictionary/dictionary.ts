// stores/useCounterStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { langs } from '@/constants/texts'

export const useDictionaryStore = defineStore('dictionary', () => {
    // state
    const en = {
        homeTitle1: 'HELLO BEAUTY!',
        homeText1: 'My name is Maria.\n' +
            'I am an experienced makeup artist based in \n' +
            'Copenhagen. I am mostly focused on weddings. \n' +
            'Love to make people truly happy and look\n' +
            'beautiful and feel special on their special day.' +
            ' I\'m passionate about\n' +
            'my job and beauty in general. As a professional, \n' +
            'I am very schedule precise and always keep \n' +
            'my kit tidy and clean.',

        homeTitle2: 'BRIDAL \nMAKEUP & HAIR',
        homeText2: 'My main passion is bridal looks. What could be better ' +
            'then helping brides to feel like a princess? After discovering the joy of' +
            'being part of weddings, I dedicated myself to perfecting every detail' +
            'of my work with brides.' +
            'Timing, preparation, materials - it\'s all a small puzzle ' +
            'of hundreds of details. And each and every one of them is important. ',

        homeTitle3: 'How will we do it? ',
        homeText3: 'Lets dive into details. How will we do it? ' +
            'You will send me references and examples of how you want to look, we will ' +
            'discuss details regarding your wishes, your skin tone, what type of photos ' +
            'you expect to get. Lets make sure everything will be perfect, so you ' +
            'will not find a reason to worry about anything on your special day and focus on being ' +
            'happy and the most beautiful bride in the world. ',
        homeText3_2: 'We also can plan a tryout to make sure everything will look the way ' +
            'you see it.',

        homeTitle4: 'LETS IMAGINE...',
        homeText4: 'We agreed on me helping you\n' +
            'on your special day, figured out makeup\n' +
            'and hair style. Lets discuss practical stuff. \n' +
            'What is your checklist before \n' +
            'the wedding day? ',

        homeTitle5: 'WHAT ABOUT THE PRICE?',
        homeText5: 'We have several options, depending on what,' +
            ' where and when we gonna do it.' +
            'Let\'s take a closer look',

        homeTitle6: 'OTHER MAKEUP',
        homeText6: 'I also can prepare you for a big event,\n' +
            'pregnant or commercial photoshoot.',

        seePriceListButtonText: 'Lets see the price list',
        checkForMoreButtonText: 'Check for more works here',
        planCareText: [
            'Hair should be clean and dry. It’s best to wash it in the evening or morning, but make sure it is completely dry.',
            'Avoid using hair masks or oils after washing your hair.',
            'Consider doing a facial mask the day before the event. Not mandatory, but recommended.',
            'Do not perform peeling or any other aggressive facial procedures for at least 3 weeks before the event.',
            'Take good care of your hands. Use moisturizing lotions.'
        ],

        planPlaceText: [
            'Find a well-lit spot, preferably near a window with good natural light.',
            'Ensure the table is clean and organized for makeup and other instruments.'
        ],
        beReady: "Be ready",
        prepareThePlace: "Prepare the place",
        contactMe: "CONTACT ME",
        helpYourBeauty: "Let's help your beauty shine.",
        menu: {
            home: "Home",
            plan: "Plan",
            portfolio: "Portfolio",
            price: "Price",
            contacts: "Contacts"
        },
        brides: "Brides",
        commercial: "Commercial",
        brideIncludes: "Bridal package includes:",
        other: "other",
        eyelashes: "Eyelashes",
        touch: "Touch up kit",
        transit: "My transit to you",
        events: "Events",
        offer: "Special offer",
        studio_photo_shoot_with: "Studio photo shoot with",
        there_is_a: "there is a special price:"
    }
    const dk = {
        homeTitle1: 'HEJ SMUKKE!',
        homeText1: 'Mit navn er Maria.\n' +
            'Jeg er en erfaren makeupartist baseret i\n' +
            'København. Jeg specialiserer mig primært i bryllupper.\n' +
            'Jeg elsker at gøre mennesker virkelig glade,\n' +
            'hjælpe dem med at se smukke ud og føle sig helt særlige på deres store dag. ' +
            'Jeg brænder for mit arbejde og skønhed generelt.\n' +
            'Som professionel er jeg meget punktlig og sørger altid for,\n' +
            'at mit udstyr er rent og velorganiseret.',

        homeTitle2: 'BRUDE \nMAKEUP & HÅR',
        homeText2: 'Min største passion er brudelooks. Hvad kunne være bedre ' +
            'end at hjælpe brude med at føle sig som prinsesser? Efter at have oplevet glæden ved ' +
            'at være en del af bryllupper, har jeg dedikeret mig til at perfektionere hver eneste detalje ' +
            'i mit arbejde med brude. ' +
            'Timing, forberedelse og materialer — det er som et puslespil bestående af hundredevis af små detaljer, ' +
            'og hver eneste af dem er vigtig.',

        homeTitle3: 'Hvordan gør vi?',
        homeText3: 'Lad os dykke ned i detaljerne. ' +
            'Du sender mig inspiration og eksempler på, hvordan du ønsker at se ud, og vi gennemgår ' +
            'alle detaljer — dine ønsker, din hudtone og hvilken type billeder du forventer. ' +
            'Vi sørger for, at alt er perfekt, så du kan nyde din store dag uden bekymringer ' +
            'og bare fokusere på at være glad og føle dig som verdens smukkeste brud.',
        homeText3_2: 'Vi kan også planlægge en prøvemakeup, så vi sikrer, at alt bliver præcis, ' +
            'som du forestiller dig.',

        homeTitle4: 'LAD OS FORESTILLE OS...',
        homeText4: 'Vi har aftalt, at jeg hjælper dig på din store dag,\n' +
            'og vi har valgt makeup og frisure.\n' +
            'Lad os nu tale om de praktiske detaljer.\n' +
            'Hvad skal stå på din tjekliste før\n' +
            'bryllupsdagen?',

        homeTitle5: 'HVAD MED PRISEN?',
        homeText5: 'Jeg tilbyder forskellige muligheder afhængigt af,\n' +
            'hvad, hvor og hvornår behandlingen finder sted.\n' +
            'Lad os tage et nærmere kig.',

        homeTitle6: 'ANDEN MAKEUP',
        homeText6: 'Jeg kan også gøre dig klar til særlige begivenheder,\n' +
            'graviditets- eller kommercielle fotoshoots.',

        seePriceListButtonText: 'Se prisliste',
        checkForMoreButtonText: 'Se flere af mine arbejder',
        planCareText: [
            'Håret skal være rent og tørt. Det er bedst at vaske det om aftenen eller om morgenen, men sørg for, at det er helt tørt.',
            'Undgå at bruge hårmasker eller olier efter hårvask.',
            'Overvej at lave en ansigtsmaske dagen før begivenheden. Det er ikke nødvendigt, men anbefales.',
            'Undgå peeling eller andre aggressive ansigtsbehandlinger i mindst 3 uger før begivenheden.',
            'Pas godt på dine hænder. Brug fugtgivende lotion.'
        ],

        planPlaceText: [
            'Find et sted med godt lys, helst ved et vindue med naturligt dagslys.',
            'Sørg for, at bordet er rent og organiseret til makeup og andre redskaber.'
        ],
        beReady: "Vær klar",
        prepareThePlace: "Forbered stedet",
        contactMe: "KONTAKT MIG",
        helpYourBeauty: "Lad os få din skønhed til at stråle.",
        menu: {
            home: "Hjem",
            plan: "Plan",
            portfolio: "Portfolio",
            price: "Priser",
            contacts: "Kontakt"
        },
        brides: "Brude",
        commercial: "Kommercielt",
        brideIncludes: "Brudepakken inkluderer:",
        other: "andet",
        eyelashes: "Øjenvipper",
        touch: "Touch-up kit",
        transit: "Min transport til dig",
        events: "Begivenheder",
        offer: "Special offer",
        studio_photo_shoot_with: "Studie fotoshoot med",
        there_is_a: "der er en særlig pris:"
    }
    const currentLang = ref(langs.EN)

    // getters
    const isDanish = computed(() => currentLang.value === langs.DK)
    const dict = computed(() => isDanish.value ? dk : en )

    // actions
    const setDict = (lang: string) => { currentLang.value = lang }

    return { currentLang, dict, isDanish,  setDict }
})