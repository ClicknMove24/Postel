/* ============================================================================
   POSTEL-EAST - קובץ התוכן היחיד / THE ONLY CONTENT FILE
   ----------------------------------------------------------------------------
   כל מה שצריך לעדכן בדף נמצא כאן. אין צורך לגעת ב-index.html.
   Everything editable lives here. You never need to touch index.html.

   כל שדה טקסט הוא { he: "עברית", en: "English" }.
   Every text field is { he: "Hebrew", en: "English" }.

   חפש  TODO  כדי למצוא את כל מה שעדיין ממלא-מקום.
   Search for  TODO  to find everything still holding a placeholder.
   ========================================================================== */

window.PE = {

  /* ==========================================================================
     1. CONFIG - מספרים, קישורים ומתגים
     ========================================================================== */
  config: {

    /* מצב דמו. כשהתוכן האמיתי נכנס - שנה ל-false והבאנר הצהוב נעלם.
       Demo mode. Flip to false once real content is in; the yellow banner goes away. */
    demoMode: true,                                            // TODO: false לפני עלייה לאוויר

    /* כפתור וואטסאפ. הלקוח ביקש להתחיל בלי, ולהדליק אם הלידים לא זזים.
       WhatsApp button. Client asked to launch OFF and switch it on if leads are slow. */
    whatsapp: {
      enabled: false,                                          // ← המתג. true = הכפתור מופיע
      number: '972586361919',                                  // TODO: לאמת שזה המספר של East
      // ההודעה שנפתחת מוכנה בוואטסאפ. {room} מוחלף בשם החדר, או נמחק אם אין חדר.
      message: {
        he: 'היי, הגעתי מהאתר של Postel-East ואשמח לבדוק זמינות{room}.',
        en: 'Hi, I came from the Postel-East site and I would like to check availability{room}.'
      }
    },

    /* טלפון לחיוג ישיר מהכותרת. השאר ריק ('') כדי להסתיר. */
    phone: '058-636-1919',                                     // TODO: לאמת מספר ל-East
    email: '',                                                 // TODO: מייל לפניות, או '' להסתרה

    /* לאן הליד נשלח. שלושה מצבים:
         'console'  - נשמר ב-localStorage ומודפס לקונסול. טוב לבדיקות, לא לאוויר.
         'whatsapp' - פותח וואטסאפ עם כל פרטי הליד כטקסט מוכן.
         'endpoint' - POST של JSON ל-URL שתשים ב-endpoint (Formspree / Apps Script / CRM).
       הפונקציה עצמה נמצאת ב-index.html תחת submitLead() - נקודת חיבור אחת. */
    lead: {
      mode: 'console',                                         // TODO: לשנות כשיוחלט לאן הלידים הולכים
      endpoint: ''                                             // TODO: ה-URL, אם mode = 'endpoint'
    },

    /* מטבע ותצוגת מחיר */
    currency: '₪',

    /* מיקום ומפה */
    location: {
      street:  { he: 'קריית המלאכה', en: 'Kiryat HaMelacha' },
      area:    { he: 'דרום תל אביב, צמוד לפלורנטין', en: 'South Tel Aviv, next to Florentin' },
      address: { he: 'רחוב ומספר יעודכנו', en: 'Street and number TBD' },   // TODO: כתובת מדויקת
      // כתובת ה-embed של גוגל מפות. להחליף ב-q= בכתובת האמיתית.
      mapEmbed: 'https://maps.google.com/maps?q=Kiryat%20HaMelacha%20Tel%20Aviv&z=15&output=embed',
      mapLink:  'https://maps.google.com/?q=Kiryat+HaMelacha+Tel+Aviv'      // TODO: פין מדויק
    },

    /* וידאו "החיים בבית". שים קישור YouTube/Vimeo embed, או השאר ריק
       והחלק יציג רק תמונות. */
    video: {
      embed: '',                                               // TODO: לדוגמה https://www.youtube.com/embed/XXXX
      poster: 'assets/img/life-rooftop-gathering.jpg'
    }
  },


  /* ==========================================================================
     1b. MARQUEE - הסרט הרץ מתחת לכותרת. משפטים קצרים, בלי נקודה בסוף.
     ========================================================================== */
  marquee: {
    he: ['חדר פרטי ומרוהט','בלי חוזה לשנה','מטבחים גדולים','מרפסת','אינטרנט מהיר',
         'חשבונות כלולים','דקות מפלורנטין','כניסה תוך יומיים','בלי ערבים','בית, לא סאבלט'],
    en: ['Private Furnished Room','No Year-Long Lease','Big Kitchens','A Terrace','Fast Wi-Fi',
         'Bills Included','Minutes from Florentin','Move In Within Days','No Guarantors','A House, Not a Sublet']
  },

  /* ==========================================================================
     2. HERO - החלק הראשון שהגולש רואה
     ========================================================================== */
  hero: {
    /* השורות הקטנות בפינה השמאלית העליונה של ההירו */
    kicker:  { he: 'קו-ליבינג בתל אביב', en: 'Co-Living in Tel Aviv' },
    kicker2: { he: 'קריית המלאכה · חדרים פנויים', en: 'Kiryat HaMelacha / Rooms Open' },
    /* החותמת המסובבת בפינה */
    stamp:   { he: 'חדר<br>פנוי', en: 'Room<br>Open' },
    eyebrow: {
      he: 'קו-ליבינג בקריית המלאכה',
      en: 'Co-living in Kiryat HaMelacha'
    },
    title: {
      he: 'חדר פרטי ומרוהט בתל אביב.<br>בלי להתחייב לשנה.',
      en: 'Your private furnished room in Tel Aviv.<br>Without a year-long lease.'
    },
    sub: {
      he: 'החדר שלך פרטי. הבית משותף - מטבחים גדולים, סלון, מרפסת ואנשים שגרים כאן איתך. נכנסים עם מזוודה, בלי ריהוט ובלי חודשיים של סידורים.',
      en: 'Your room is private. The house is shared - big kitchens, a lounge, a terrace and people who actually live here with you. You move in with a suitcase, no furniture and no two months of paperwork.'
    },
    /* ארבע העובדות שמופיעות מתחת לכותרת. אלה מה שהגולש מחפש בגוגל. */
    facts: [
      { label: { he: 'החל מ-',        en: 'From' },
                        value: { he: '₪2,500 לחודש',  en: '₪2,500 / month' } },   // TODO: מחיר אמיתי
      { label: { he: 'כולל',          en: 'Includes' },
                        value: { he: 'חשבונות ואינטרנט', en: 'Bills & Wi-Fi' } },
      { label: { he: 'מינימום שהות',  en: 'Minimum stay' },
                        value: { he: 'חודש אחד',      en: 'One month' } },        // TODO: לאמת
      { label: { he: 'מיקום',         en: 'Location' },
                        value: { he: 'דקות מפלורנטין', en: 'Minutes from Florentin' } }
    ],
    ctaPrimary:   { he: 'לחדרים הפנויים',  en: 'See available rooms' },
    ctaSecondary: { he: 'לבדיקת זמינות',   en: 'Check availability' },
    /* קולאז' התמונות בהירו. ארבע תמונות. */
    photos: [
      { src: 'assets/img/space-terrace.jpg', alt: { he: 'המרפסת המשותפת', en: 'The shared terrace' } },
      { src: 'assets/img/room-02-a.jpg',     alt: { he: 'חדר פרטי',       en: 'A private room' } },
      { src: 'assets/img/space-kitchen.jpg', alt: { he: 'המטבח המשותף',   en: 'The shared kitchen' } },
      { src: 'assets/img/life-rooftop-dinner.jpg', alt: { he: 'ארוחה על הגג', en: 'Dinner on the roof' } }
    ]
  },


  /* ==========================================================================
     3. ROOMS - החלק המרכזי. זה מה שמייצר את הליד.
     --------------------------------------------------------------------------
     כל חדר צריך: מחיר מדויק, גודל, חלון/בלי חלון, סוג מיטה, קומה,
     מה פרטי ומה משותף, ומועד כניסה. אלה בדיוק הפרטים שמסננים לידים.

     status:  'available' | 'last' | 'taken'
     availableFrom:  'now'  או תאריך בפורמט 'YYYY-MM-DD'
     ========================================================================== */
  roomsSection: {
    eyebrow: { he: '01 - חדרים פנויים', en: '01 - Available rooms' },
    title:   { he: 'החדרים שפנויים עכשיו.', en: 'The rooms that are open right now.' },
    sub: {
      he: 'כל חדר כאן הוא חדר אמיתי בבית, עם המחיר שלו ותאריך הכניסה שלו. בוחרים חדר, לוחצים, ואנחנו חוזרים אליכם לגביו - בלי לחפש מה בדיוק היה בתמונה.',
      en: 'Every room here is a real room in the house, with its own price and its own move-in date. Pick one, tap it, and we get back to you about that room - no guessing which one you saw.'
    },
    note: {
      he: 'המחירים כוללים חשמל, מים, ארנונה, אינטרנט וניקיון של השטחים המשותפים.',
      en: 'Prices include electricity, water, municipal tax, Wi-Fi and cleaning of the shared areas.'
    },
    cta: { he: 'מעוניין בחדר הזה', en: "I'm interested in this room" }
  },

  rooms: [
    {
      id: 'R01',
      name:  { he: 'חדר 1', en: 'Room 1' },
      tag:   { he: 'הכי משתלם', en: 'Best value' },            // תווית קטנה, או null
      price: 2500,                                              // TODO: מחיר אמיתי
      size:  9,                                                 // מ"ר
      window:     false,
      windowNote: { he: 'חלון פנימי למסדרון', en: 'Internal window to the hallway' },
      bed:        { he: 'מיטה יחיד רחבה 120', en: 'Wide single, 120cm' },
      floor:      { he: 'קומה 1', en: '1st floor' },
      private:    { he: 'חדר, ארון, מדפים, מנעול משלך', en: 'Room, wardrobe, shelves, your own lock' },
      shared:     { he: 'מקלחת ושירותים, מטבח, סלון, מרפסת', en: 'Shower & toilet, kitchen, lounge, terrace' },
      availableFrom: 'now',
      status: 'available',
      photos: ['assets/img/room-01-a.jpg']
    },
    {
      id: 'R02',
      name:  { he: 'חדר 2', en: 'Room 2' },
      tag:   null,
      price: 2750,
      size:  11,
      window:     true,
      windowNote: { he: 'חלון לחצר פנימית', en: 'Window onto the inner courtyard' },
      bed:        { he: 'מיטה זוגית 140', en: 'Double, 140cm' },
      floor:      { he: 'קומה 1', en: '1st floor' },
      private:    { he: 'חדר, מתלה בגדים, שולחן צד', en: 'Room, clothing rack, side table' },
      shared:     { he: 'מקלחת ושירותים, מטבח, סלון, מרפסת', en: 'Shower & toilet, kitchen, lounge, terrace' },
      availableFrom: '2026-09-01',
      status: 'available',
      photos: ['assets/img/room-02-a.jpg']
    },
    {
      id: 'R03',
      name:  { he: 'חדר 3', en: 'Room 3' },
      tag:   null,
      price: 3100,
      size:  13,
      window:     true,
      windowNote: { he: 'חלון גדול, אור בוקר', en: 'Large window, morning light' },
      bed:        { he: 'מיטה זוגית 140', en: 'Double, 140cm' },
      floor:      { he: 'קומה 2', en: '2nd floor' },
      private:    { he: 'חדר, ארון, שולחן עבודה', en: 'Room, wardrobe, desk' },
      shared:     { he: 'מקלחת ושירותים, מטבח, סלון, מרפסת', en: 'Shower & toilet, kitchen, lounge, terrace' },
      availableFrom: '2026-09-01',
      status: 'last',
      photos: ['assets/img/room-03-a.jpg']
    },
    {
      id: 'R04',
      name:  { he: 'חדר 4', en: 'Room 4' },
      tag:   null,
      price: 2900,
      size:  12,
      window:     true,
      windowNote: { he: 'חלון לרחוב', en: 'Street-facing window' },
      bed:        { he: 'מיטה זוגית 140', en: 'Double, 140cm' },
      floor:      { he: 'קומה 2', en: '2nd floor' },
      private:    { he: 'חדר, ארון, מדפים', en: 'Room, wardrobe, shelves' },
      shared:     { he: 'מקלחת ושירותים, מטבח, סלון, מרפסת', en: 'Shower & toilet, kitchen, lounge, terrace' },
      availableFrom: '2026-09-15',
      status: 'available',
      photos: ['assets/img/room-04-a.jpg']
    },
    {
      id: 'R05',
      name:  { he: 'חדר 5', en: 'Room 5' },
      tag:   null,
      price: 3300,
      size:  14,
      window:     true,
      windowNote: { he: 'חלון גדול, פינת עבודה', en: 'Large window, work corner' },
      bed:        { he: 'מיטה זוגית 160', en: 'Queen, 160cm' },
      floor:      { he: 'קומה 3', en: '3rd floor' },
      private:    { he: 'חדר, ארון, שולחן עבודה, כיסא', en: 'Room, wardrobe, desk, chair' },
      shared:     { he: 'מקלחת ושירותים, מטבח, סלון, מרפסת', en: 'Shower & toilet, kitchen, lounge, terrace' },
      availableFrom: '2026-10-01',
      status: 'available',
      photos: ['assets/img/room-05-a.jpg']
    },
    {
      id: 'R06',
      name:  { he: 'חדר 6', en: 'Room 6' },
      tag:   { he: 'הגדול בבית', en: 'Biggest in the house' },
      price: 3900,
      size:  18,
      window:     true,
      windowNote: { he: 'שני חלונות', en: 'Two windows' },
      bed:        { he: 'מיטה זוגית 160', en: 'Queen, 160cm' },
      floor:      { he: 'קומה 3', en: '3rd floor' },
      private:    { he: 'חדר, ארון גדול, כיור פרטי, שולחן', en: 'Room, large wardrobe, private sink, desk' },
      shared:     { he: 'מקלחת ושירותים, מטבח, סלון, מרפסת', en: 'Shower & toilet, kitchen, lounge, terrace' },
      availableFrom: 'now',
      status: 'available',
      photos: ['assets/img/room-06-a.jpg']
    }
  ],


  /* ==========================================================================
     4. WHY - למה Postel-East
     ========================================================================== */
  why: {
    eyebrow: { he: '02 - למה כאן', en: '02 - Why here' },
    title:   { he: 'למה Postel-East ולא סאבלט.', en: 'Why Postel-East and not a sublet.' },
    items: [
      { title: { he: 'חדר פרטי עם מפתח משלך', en: 'A private room with your own key' },
                        text:  { he: 'לא מיטה בחדר משותף ולא ספה בסלון. חדר שנסגר מאחוריך.', en: 'Not a bed in a shared dorm and not a couch in the lounge. A room that closes behind you.' } },
      { title: { he: 'מרוהט ומוכן לכניסה', en: 'Furnished and move-in ready' },
                        text:  { he: 'מיטה, מזרן, ארון ומצעים מחכים. אתם מביאים מזוודה.', en: 'Bed, mattress, wardrobe and linen are waiting. You bring a suitcase.' } },
      { title: { he: 'חוזה גמיש, יציאה בהתראה קצרה', en: 'Flexible contract, short notice' },
                        text:  { he: 'בלי להתחייב לשנה. אם התוכניות משתנות, מודיעים ויוצאים.', en: 'No twelve-month lock-in. If your plans change, you give notice and go.' } },
      { title: { he: 'פיקדון נמוך, בלי ערבים', en: 'Low deposit, no guarantors' },
                        text:  { he: 'בלי צ׳קים פתוחים, בלי תלושי שכר ובלי שני ערבים מהארץ.', en: 'No open cheques, no payslips and no two local guarantors.' } },
      { title: { he: 'תשלום פשוט', en: 'Simple payment' },
                        text:  { he: 'הוראת קבע, העברה או ביט. חשבון אחד בחודש, בלי חישובי חשמל.', en: 'Standing order, transfer or Bit. One bill a month, no splitting the electricity.' } },
      { title: { he: 'שטחים משותפים גדולים', en: 'Large shared spaces' },
                        text:  { he: 'מטבחים, סלון, פינות ישיבה ומרפסת גדולה שכולם משתמשים בה.', en: 'Kitchens, a lounge, seating corners and a big terrace people actually use.' } },
      { title: { he: 'אנשים, לא דירה ריקה', en: 'People, not an empty flat' },
                        text:  { he: 'תמיד יש מישהו במטבח. משתתפים כמה שבא לכם - או לא.', en: "There's always someone in the kitchen. Join in as much as you feel like - or don't." } },
      { title: { he: 'צוות שמטפל בתקלות', en: 'A team that fixes things' },
                        text:  { he: 'מזגן, נזילה, אינטרנט - כותבים לצוות והם מטפלים.', en: 'AC, a leak, the Wi-Fi - you message the team and it gets handled.' } }
    ]
  },


  /* ==========================================================================
     5. LIFE - החיים בבית
     ========================================================================== */
  life: {
    eyebrow: { he: '03 - החיים בבית', en: '03 - Life at Postel-East' },
    title:   { he: 'החדר פרטי.<br>הבית גדול ומשותף.', en: 'Your room is private.<br>Your home is shared.' },
    sub: {
      he: 'רוב הזמן לא מבלים בחדר. מבלים במטבח, על המרפסת ובסלון - וזה בדיוק ההבדל בין לגור לבד בסאבלט לבין לגור בבית.',
      en: "Most of the time you're not in your room. You're in the kitchen, on the terrace, in the lounge - and that's exactly the difference between living alone in a sublet and living in a house."
    },
    photos: [
      { src: 'assets/img/space-lounge.jpg',           alt: { he: 'הסלון המשותף', en: 'The shared lounge' },
        caption: { he: 'הסלון', en: 'The lounge' } },
      { src: 'assets/img/life-cooking.jpg',           alt: { he: 'מבשלים יחד במטבח', en: 'Cooking together in the kitchen' },
        caption: { he: 'ערב במטבח', en: 'An evening in the kitchen' } },
      { src: 'assets/img/space-terrace.jpg',          alt: { he: 'המרפסת', en: 'The terrace' },
        caption: { he: 'המרפסת', en: 'The terrace' } },
      { src: 'assets/img/life-rooftop-gathering.jpg', alt: { he: 'ארוחה משותפת', en: 'A shared meal' },
        caption: { he: 'ארוחה משותפת', en: 'A house dinner' } },
      { src: 'assets/img/space-common.jpg',           alt: { he: 'פינת ישיבה', en: 'Seating corner' },
        caption: { he: 'פינת ישיבה', en: 'A place to sit' } },
      { src: 'assets/img/life-games.jpg',             alt: { he: 'ערב משחקים', en: 'Games night' },
        caption: { he: 'ערב בבית', en: 'A night in' } }
    ]
  },


  /* ==========================================================================
     6. TRANSPARENCY - מה זה כן ומה זה לא. זה מה שמסנן לידים גרועים.
     ========================================================================== */
  transparency: {
    eyebrow: { he: '04 - לפני שמשאירים פרטים', en: '04 - Before you leave your details' },
    title:   { he: 'בלי הפתעות בביקור.', en: 'No surprises at the viewing.' },
    yes: {
      title: { he: 'מה זה כן', en: 'What this is' },
      items: {
        he: ['חדר פרטי בבית קו-ליבינג', 'מקלחות, מטבחים וסלון משותפים לדיירים', 'חוזה חודשי גמיש', 'מחיר אחד שכולל את החשבונות', 'בית עם דיירים אחרים שגרים בו'],
        en: ['A private room in a co-living house', 'Showers, kitchens and a lounge shared with residents', 'A flexible monthly contract', 'One price that includes the bills', 'A house with other residents living in it']
      }
    },
    no: {
      title: { he: 'מה זה לא', en: 'What this is not' },
      items: {
        he: ['לא דירת חדר ולא סטודיו פרטי', 'לא דירה שלמה לעצמכם', 'לא מלון ולא הוסטל לתיירים', 'לא מקום שקט לגמרי - יש כאן אנשים'],
        en: ['Not a studio and not a private one-room flat', 'Not a whole apartment to yourself', 'Not a hotel and not a tourist hostel', 'Not a completely silent place - there are people here']
      }
    },
    included: {
      title: { he: 'כלול במחיר', en: 'Included in the price' },
      items: {
        he: ['חשמל', 'מים', 'ארנונה', 'אינטרנט', 'ניקיון שטחים משותפים', 'ריהוט ומצעים'],
        en: ['Electricity', 'Water', 'Municipal tax', 'Wi-Fi', 'Cleaning of shared areas', 'Furniture and linen']
      }
    },
    notIncluded: {
      title: { he: 'לא כלול', en: 'Not included' },
      items: {
        he: ['אוכל', 'ביטוח אישי', 'חניה', 'ניקיון החדר הפרטי'],
        en: ['Food', 'Personal insurance', 'Parking', 'Cleaning of your own room']
      }
    },
    terms: {
      title: { he: 'תנאים', en: 'Terms' },
      items: [
        { k: { he: 'פיקדון',        en: 'Deposit' },        v: { he: 'שכר דירה של חודש', en: 'One month of rent' } },       // TODO
        { k: { he: 'מינימום שהות',  en: 'Minimum stay' },   v: { he: 'חודש אחד',         en: 'One month' } },               // TODO
        { k: { he: 'הודעת יציאה',   en: 'Notice period' },  v: { he: '30 יום',           en: '30 days' } },                 // TODO
        { k: { he: 'ערבים',         en: 'Guarantors' },     v: { he: 'לא נדרשים',        en: 'Not required' } }
      ]
    }
  },


  /* ==========================================================================
     7. FAQ
     ========================================================================== */
  faq: {
    eyebrow: { he: '05 - שאלות', en: '05 - Questions' },
    title:   { he: 'מה שאנשים שואלים לפני שהם מגיעים.', en: 'What people ask before they come.' },
    items: [
      { q: { he: 'אפשר לבוא לראות לפני שמחליטים?', en: 'Can I come see it before deciding?' },
        a: { he: 'כן, וזה מה שאנחנו ממליצים. משאירים פרטים, מתאמים ביקור, מסתובבים בבית ורואים את החדר עצמו.',
             en: 'Yes, and we recommend it. Leave your details, we set a time, you walk through the house and see the actual room.' } },
      { q: { he: 'מה מינימום השהות?', en: 'What is the minimum stay?' },
        a: { he: 'חודש אחד. משם ממשיכים חודש בחודשו - אין חוזה שנתי.',
             en: 'One month. After that it rolls month to month - there is no annual lease.' } },       // TODO: לאמת
      { q: { he: 'כמה זמן לוקח להיכנס?', en: 'How fast can I move in?' },
        a: { he: 'אם החדר פנוי, אפשר להיכנס תוך יום-יומיים. אין ועד בית, אין תיווך ואין המתנה לאישורים.',
             en: 'If the room is free, a day or two. No building committee, no agent fee and no waiting on approvals.' } },
      { q: { he: 'מי עוד גר בבית?', en: 'Who else lives here?' },
        a: { he: 'תערובת של ישראלים ואנשים מחו״ל, רובם בשנות העשרים והשלושים - עובדים, סטודנטים ואנשים שעברו לתל אביב.',
             en: 'A mix of Israelis and people from abroad, mostly in their twenties and thirties - working, studying, or newly moved to Tel Aviv.' } },
      { q: { he: 'אפשר להיכנס בזוג?', en: 'Can we move in as a couple?' },
        a: { he: 'בחלק מהחדרים כן, לפי הגודל וסוג המיטה. כתבו לנו לאיזה חדר התכוונתם ונגיד בדיוק.',
             en: 'In some rooms yes, depending on size and bed. Tell us which room you had in mind and we will tell you exactly.' } },
      { q: { he: 'יש חניה?', en: 'Is there parking?' },
        a: { he: 'אין חניה בבניין. יש חניה עירונית באזור, ורוב הדיירים כאן על אופניים או קורקינט.',
             en: 'No parking in the building. There is city parking around, and most residents here get by on a bike or a scooter.' } }
    ]
  },


  /* ==========================================================================
     8. FORM - הטופס
     ========================================================================== */
  form: {
    eyebrow: { he: '06 - בדיקת זמינות', en: '06 - Check availability' },
    title:   { he: 'נבדוק מה פנוי בשבילכם.', en: "Let's check what's open for you." },
    sub: {
      he: 'משאירים פרטים ואנחנו חוזרים באותו יום עם מה שפנוי בתאריכים שלכם ועם תיאום ביקור.',
      en: 'Leave your details and we come back the same day with what is open on your dates, and a time to come see it.'
    },
    fields: {
      name:     { he: 'שם מלא',                 en: 'Full name' },
      phone:    { he: 'טלפון / וואטסאפ',        en: 'Phone / WhatsApp' },
      email:    { he: 'אימייל',                 en: 'Email' },
      moveIn:   { he: 'תאריך כניסה רצוי',       en: 'Preferred move-in date' },
      duration: { he: 'לכמה זמן',               en: 'For how long' },
      room:     { he: 'חדר שמעניין אתכם',       en: 'Room you are interested in' }
    },
    durations: [
      { value: '1-3',  label: { he: 'חודש עד שלושה', en: '1-3 months' } },
      { value: '3-6',  label: { he: 'שלושה עד חצי שנה', en: '3-6 months' } },
      { value: '6-12', label: { he: 'חצי שנה עד שנה', en: '6-12 months' } },
      { value: '12+',  label: { he: 'שנה ומעלה', en: 'A year or more' } },
      { value: 'open', label: { he: 'עדיין לא בטוח', en: 'Not sure yet' } }
    ],
    roomAny:  { he: 'עדיין לא בחרתי - שתמליצו', en: "Haven't picked - recommend one" },
    submit:   { he: 'לבדיקת זמינות',  en: 'Check availability' },
    sending:  { he: 'שולח...',        en: 'Sending...' },
    success:  { he: 'קיבלנו. נחזור אליכם היום עם מה שפנוי.', en: 'Got it. We will come back to you today with what is open.' },
    error:    { he: 'משהו נתקע. אפשר פשוט להתקשר או לכתוב לנו.', en: 'Something got stuck. You can just call or message us.' },
    privacy:  { he: 'הפרטים משמשים רק כדי לחזור אליכם לגבי חדר. בלי דיוור ובלי העברה לצד שלישי.',
                en: 'Your details are used only to get back to you about a room. No newsletter, nothing passed on.' }
  },


  /* ==========================================================================
     9. FOOTER
     ========================================================================== */
  footer: {
    tagline: { he: 'חדר פרטי. בית משותף. תל אביב.', en: 'A private room. A shared house. Tel Aviv.' },
    parent:  { he: 'חלק מ-Postel', en: 'Part of Postel' },
    parentUrl: 'https://posteltlv.com/'
  },


  /* ==========================================================================
     10. UI - מחרוזות ממשק קטנות
     ========================================================================== */
  ui: {
    nav: {
      rooms: { he: 'חדרים',    en: 'Rooms' },
      why:   { he: 'למה כאן',  en: 'Why here' },
      life:  { he: 'הבית',     en: 'The house' },
      faq:   { he: 'שאלות',    en: 'FAQ' },
      cta:   { he: 'בדיקת זמינות', en: 'Check availability' }
    },
    filters: {
      all:      { he: 'הכל',            en: 'All' },
      window:   { he: 'עם חלון',        en: 'With a window' },
      noWindow: { he: 'בלי חלון',       en: 'No window' },
      now:      { he: 'כניסה מיידית',   en: 'Available now' },
      sort:     { he: 'מיון לפי מחיר',  en: 'Sort by price' },
      empty:    { he: 'אין חדר שעונה לסינון הזה. נסו סינון אחר או השאירו פרטים ונעדכן כשמתפנה.',
                  en: 'No room matches that filter. Try another, or leave your details and we will tell you when one opens.' }
    },
    room: {
      perMonth:  { he: 'לחודש',        en: '/ month' },
      size:      { he: 'גודל',         en: 'Size' },
      window:    { he: 'חלון',         en: 'Window' },
      hasWindow: { he: 'יש',           en: 'Yes' },
      noWindow:  { he: 'אין',          en: 'No' },
      bed:       { he: 'מיטה',         en: 'Bed' },
      floor:     { he: 'קומה',         en: 'Floor' },
      private:   { he: 'פרטי',         en: 'Private' },
      shared:    { he: 'משותף',        en: 'Shared' },
      available: { he: 'כניסה',        en: 'Move-in' },
      now:       { he: 'מיידית',       en: 'Now' },
      from:      { he: 'מ-',           en: 'From' },
      statusAvailable: { he: 'פנוי',            en: 'Available' },
      statusLast:      { he: 'החדר האחרון',     en: 'Last one' },
      statusTaken:     { he: 'נתפס',            en: 'Taken' }
    },
    demoBanner: {
      he: 'תצוגת דמו - התמונות, המחירים ופרטי החדרים הם ממלאי מקום ויוחלפו בתוכן אמיתי של Postel-East.',
      en: 'Demo preview - photos, prices and room details are placeholders and will be replaced with real Postel-East content.'
    },
    langToggle: { he: 'EN', en: 'עב' },
    close:      { he: 'סגירה', en: 'Close' }
  }
};
