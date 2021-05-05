const SET_FAQ = 'SET_FAQ';
const initialState = {
  partOfState: {
    id: 'FAQ',
    name: 'Про нас',
    t1: 'Чим займається Фонд?',
    p1: '«Фонд рятування дітей та підлітків України від наркотиків» займається профілактикою наркоманії. Ми проводимо просвітницьку роботу, мета якої – щоб діти ніколи не починали вживати наркотиків і залишались здоровими.\nБільш детально про роботу Фонду ви можете прочитати в розділі «Про нас».',
    t2: 'Що таке профілактика наркоманії і як вона працює?',
    p2: 'Профілактика (походить від грецького слова «профілактікос» - запобігати) – заходи, що запобігають виникненню й поширенню хвороб, сприяють охороні здоров’я населення. (Словник української мови в 11 т за ред І.К. Білодіда).\nТобто профілактика наркоманії – це зробити так, щоб людина не стала наркоманом.\nНайдієвіший спосіб профілактики наркоманії – це надання дитині в ранньому віці зрозумілої і правдивої інформації щодо небезпеки вживання наркотиків.\nКожна людина приймає рішення «пробувати чи не пробувати», виходячи з відомої їй інформації, яку вона вважає правдивою. Якщо, умовно кажучи, на терезах переважає неправдива інформація про наркотики («Один раз – нічого не станеться», «Сто грам для апетиту навіть корисно», «Це легкий наркотик – від нього нічого не страшного не буває», «Всі курять, і нічого» та інше), то велика ймовірність, що людина почне пити, курити, вживати наркотики.\nЯкщо ж завдяки правильно проведеним профілактичним заходам на терезах переважають правдиві аргументи проти: «Наркотики – отруйні речовини», «Будь-які наркотики викликають залежність і шкодять здоров’ю” та інші, - то ризик, що людина почне вживати наркотики, мінімальний.\nСаме тому профілактика працює, і це найдешевший і найдієвіший спосіб боротьби з поширенням наркоманії.',
    t3: 'Чи правда, що дітей потрібно лякати страшними наслідками вживання наркотиків, щоб вони ніколи не починали вживати?',
    p3: 'Залякування – показувати страшні шокуючі фото і відео – небезпечна й неефективна, на нашу думку, практика. По-перше, перегляд таких кадрів може бути дуже стресовим для дитини, вона може злякатися і більше не захоче говорити на тему наркоманії і шкідливих звичок і не зможе засвоїти правдиву інформацію (перелякані люди не думають логічно). По-друге, це створює оманливе враження у дитини, що небезпечними є тільки такі люди, яких вона побачила на фото чи відео – обдерті, брудні, з гнилими зубами і темними колами під очима, виразками на руках, синіми обколотими венами. Тоді як у підлітковому віці до вживання наркотиків дитину найчастіше залучає «добрий друг», «класний знайомий», «найкрутіший хлопець із компанії», і дитина просто не розпізнає небезпеку, адже ці люди виглядають зовсім не так, як «закінчені наркомани».\nТак само не ефективні словесні залякування типу «Спробуєш – помреш». Так, подібні випадки не рідкість, коли підлітки отримують тяжкі наслідки для здоров’я чи навіть гинуть, вперше спробувавши наркотик, але в більшості випадків шлях від "першого разу" до смерті займає кілька років, все відбувається досить плавно і поступово, тому життєво важливо, щоб дитина знала повну картину – від початку до кінця, і розуміла, чому так відбувається. Саме тому ми в лекціях не використовуємо методи залякувань. Лише достовірна інформація, простою мовою, без перебільшень і недомовок, у цікавій формі, щоб у підлітків сформувалось чітке розуміння, що таке наркотики і власне освідомлене рішення – залишатись здоровим і ніколи не вживати наркотиків.',
    t4: 'Чи правда, що чим більше говорити з дітьми про шкідливі звички, тим їм ставатиме цікавіше спробувати? Може, треба взагалі про це не говорити?',
    p4: 'Ми переконані, що обов’язок дорослих – вберегти дітей від небезпек, які існують у житті. Ми вчимо дітей правильно переходити дорогу, мити руки, вибирати корисну їжу, попереджаємо, які гриби або ягоди в лісі отруйні, розповідаємо, чому не можна ходити по тонкій кризі або підходити до обірваних електричних дротів. Так само ми повинні дати дітям правдиву інформацію щодо наркотиків. Якщо чесно і відкрито не говорити з дітьми про це, то існує величезна ймовірність, що вони дізнаються про наркотики на вулиці, від сумнівних знайомих, в інтернеті, і немає жодної гарантії, що ця інформація буде правдою.',
    t5: 'Чи правда, що колишніх наркоманів не буває?',
    p5: 'На жаль, за статистикою української наркології, вилікувати вдається близько 3% тих, хто звернувся до клініки.\nРізноманітні програми реабілітації заявляють більші відсотки тих, кому вдалося подолати залежність. Але в будь-якому разі, правдою є те, що лікування наркоманії – це довго, дорого і дуже часто не ефективно. Колишні наркомани бувають. Хоча дуже часто незворотні наслідки для психічного та фізичного здоров’я можуть залишатися з людиною на все життя. І тих, кому вдалося подолати залежність, дуже мало.',
    t6: 'Алкоголь і сигарети – не наркотики?',
    p6: 'З точки зору законодавства України – ні. Тобто алкогольні напої та тютюнові вироби не включені до переліку наркотичних засобів, які заборонені на території нашої держави.\nАле з точки зору здорового глузду алкоголь і сигарети – наркотики, адже містять отрути (етиловий спирт в алкогольних напоях та нікотин у сигаретах), шкодять здоров’ю і викликають залежність.',
    t7: 'Чи правда, що існують безпечні і легальні наркотики?',
    p7: 'Не варто плутати поняття «легальний» (дозволений законом) і «безпечний» (не шкідливий для здоров’я). Всі наркотики небезпечні і шкідливі, незалежно від того, дозволені вони офіційним законодавством чи ні.',
    t8: 'Куди звертатись по допомогу, якщо моя дитина/родич/друг вживає наркотики?',
    p8: 'Ви можете отримати безкоштовну анонімну консультацію з питань, які стосуються вживання наркотиків, за нашим телефоном (057)714-31-77 або за адресою fondnn.ukr@gmail.com.',

  }
}

const faqPagereducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAQ: {
      return { visibility: true, partOfState: initialState[action.id] };
    }
    default:
      return { ...state };
  }
};

export const setFaqAC = id => ({ type: SET_FAQ, id });

export default faqPagereducer;