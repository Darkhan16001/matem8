
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title:"Иррационал өрнектерді түрлендіру",
  goal:"Түбірі бар өрнектерді ықшамдау, көбейткішті түбір сыртына шығару, ұқсас түбірлерді біріктіру, түбірлерді көбейту және бөлшектің бөлімін иррационалдықтан босату."
};

// 5 ТОЛЫҚ ТҮСІНДІРМЕ
const theory = [
  {
    title:"Иррационал өрнек дегеніміз не?",
    definition:"Иррационал өрнек — құрамында айнымалысы немесе саны түбір таңбасының астында болатын өрнек. Кейбір өрнектердің мәні иррационал сан болуы мүмкін.",
    explain:"Түбірі бар өрнекті түрлендіру дегеніміз — оның мәнін өзгертпей, қарапайым әрі есептеуге ыңғайлы түрге келтіру. Мысалы, жетпіс екінің квадрат түбірін ықшамдауға болады. Ол үшін түбір астындағы санды отыз алты мен екінің көбейтіндісі ретінде жазамыз.",
    rule:"Түбірі бар өрнекті түрлендіргенде теңдік сақталуы тиіс. Түбір қасиеттерін олардың анықталу шарттарына сәйкес қолданамыз.",
    formula:M`\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2`,
    warning:"Әрбір түбірі бар өрнек міндетті түрде иррационал санға тең болмайды. Мысалы, жиырма бестің квадрат түбірі беске тең.",
    worked:[
      M`\sqrt{48}`,
      M`=\sqrt{16\cdot3}`,
      M`=4\sqrt3`
    ],
    self:[
      {
        q:M`\sqrt{75}`,
        steps:[M`=\sqrt{25\cdot3}`,M`=5\sqrt3`],
        answer:M`\boxed{5\sqrt3}`
      },
      {
        q:M`\sqrt{32}`,
        steps:[M`=\sqrt{16\cdot2}`,M`=4\sqrt2`],
        answer:M`\boxed{4\sqrt2}`
      }
    ]
  },
  {
    title:"Көбейткішті түбір сыртына шығару",
    definition:"Түбір астындағы сан толық квадратқа бөлінсе, сол квадраттың түбірін есептеп, көбейткішті түбір сыртына шығаруға болады.",
    explain:"Мысалы, жүз сегіз саны отыз алты мен үштің көбейтіндісіне тең. Отыз алтының квадрат түбірі алты болғандықтан, жүз сегіздің квадрат түбірі алты көбейтілген үштің квадрат түбіріне тең.",
    rule:"Түбір астындағы санды толық квадрат пен қалған көбейткішке жіктейміз. Толық квадраттың түбірін түбір сыртына шығарамыз.",
    formula:M`\sqrt{a^2b}=|a|\sqrt b,\qquad b\geq0`,
    warning:"Айнымалы таңбасы белгісіз болса, модульді ұмытпаңдар. Квадрат түбірдің мәні теріс болмайды.",
    worked:[
      M`\sqrt{108}`,
      M`=\sqrt{36\cdot3}`,
      M`=6\sqrt3`
    ],
    self:[
      {
        q:M`\sqrt{147}`,
        steps:[M`=\sqrt{49\cdot3}`,M`=7\sqrt3`],
        answer:M`\boxed{7\sqrt3}`
      },
      {
        q:M`\sqrt{200}`,
        steps:[M`=\sqrt{100\cdot2}`,M`=10\sqrt2`],
        answer:M`\boxed{10\sqrt2}`
      }
    ]
  },
  {
    title:"Ұқсас түбірлерді қосу және азайту",
    definition:"Түбір астындағы сандары және түбір дәрежелері бірдей мүшелер ұқсас түбірлі мүшелер деп аталады. Оларды қосқанда немесе азайтқанда тек коэффициенттері біріктіріледі.",
    explain:"Мысалы, үш көбейтілген екі түбірі мен бес көбейтілген екі түбірін қоссақ, сегіз көбейтілген екі түбірі шығады. Түбірдің астындағы сан өзгермейді. Егер түбірлер әртүрлі болса, алдымен оларды ықшамдап көреміз.",
    rule:"Ұқсас түбірлердің коэффициенттерін қосамыз немесе азайтамыз. Түбірлі бөлігін өзгертпейміз.",
    formula:M`a\sqrt b+c\sqrt b=(a+c)\sqrt b`,
    warning:"Квадрат түбірлерді жай сандар сияқты қосуға болмайды. Мысалы, екі түбірі мен үш түбірінің қосындысы бес түбіріне тең емес.",
    worked:[
      M`2\sqrt3+5\sqrt3-\sqrt3`,
      M`=(2+5-1)\sqrt3`,
      M`=6\sqrt3`
    ],
    self:[
      {
        q:M`4\sqrt5+3\sqrt5`,
        steps:[M`=(4+3)\sqrt5`,M`=7\sqrt5`],
        answer:M`\boxed{7\sqrt5}`
      },
      {
        q:M`9\sqrt2-4\sqrt2`,
        steps:[M`=(9-4)\sqrt2`,M`=5\sqrt2`],
        answer:M`\boxed{5\sqrt2}`
      }
    ]
  },
  {
    title:"Түбірлі өрнектерді көбейту",
    definition:"Теріс емес сандардың квадрат түбірлерін көбейткенде түбір астындағы сандарды бір түбірдің астына көбейтіп жазуға болады.",
    explain:"Мысалы, үштің квадрат түбірін он екінің квадрат түбіріне көбейтсек, отыз алтының квадрат түбірі шығады. Отыз алтының квадрат түбірі алты болады. Егер түбір алдында коэффициенттер болса, оларды жеке көбейтеміз.",
    rule:"Түбір астындағы сандарды бір-біріне көбейтеміз, соңында шыққан нәтижені ықшамдаймыз.",
    formula:M`\sqrt a\cdot\sqrt b=\sqrt{ab},\qquad a,b\geq0`,
    warning:"Көбейту қасиетін қосу амалына қолдануға болмайды. Түбір астындағы қосындыны жеке түбірлерге бөлу жалпы жағдайда дұрыс емес.",
    worked:[
      M`\sqrt6\cdot\sqrt{24}`,
      M`=\sqrt{144}`,
      M`=12`
    ],
    self:[
      {
        q:M`\sqrt5\cdot\sqrt{20}`,
        steps:[M`=\sqrt{100}`,M`=10`],
        answer:M`\boxed{10}`
      },
      {
        q:M`2\sqrt3\cdot3\sqrt{12}`,
        steps:[M`=6\sqrt{36}`,M`=36`],
        answer:M`\boxed{36}`
      }
    ]
  },
  {
    title:"Бөлшектің бөлімін иррационалдықтан босату",
    definition:"Бөлшектің бөліміндегі түбірді жою үшін алымы мен бөлімін бірдей нөлден өзгеше өрнекке көбейтеміз. Бұл бөлшектің мәнін өзгертпейді.",
    explain:"Мысалы, бес бөлінген бестің квадрат түбірін қарастырайық. Алымы мен бөлімін бестің квадрат түбіріне көбейтеміз. Бөлімде бес шығады, ал алымда бес көбейтілген бес түбірі пайда болады. Беске қысқартқанда бестің квадрат түбірі қалады.",
    rule:"Бөлім бір ғана квадрат түбірден тұрса, сол түбірге көбейтеміз. Бөлім қосынды немесе айырма болса, түйіндес өрнекті қолданамыз.",
    formula:M`\frac1{\sqrt a}=\frac{\sqrt a}{a},\qquad a>0`,
    warning:"Алымы мен бөлімін бірдей өрнекке көбейту қажет. Бөлім нөлге тең болмауы тиіс.",
    worked:[
      M`\frac5{\sqrt5}`,
      M`=\frac{5\sqrt5}{\sqrt5\cdot\sqrt5}`,
      M`=\frac{5\sqrt5}{5}`,
      M`=\sqrt5`
    ],
    self:[
      {
        q:M`\frac3{\sqrt3}`,
        steps:[M`=\frac{3\sqrt3}{3}`,M`=\sqrt3`],
        answer:M`\boxed{\sqrt3}`
      },
      {
        q:M`\frac2{1+\sqrt3}`,
        steps:[
          M`=\frac{2(1-\sqrt3)}{(1+\sqrt3)(1-\sqrt3)}`,
          M`=\frac{2(1-\sqrt3)}{-2}`,
          M`=\sqrt3-1`
        ],
        answer:M`\boxed{\sqrt3-1}`
      }
    ]
  }
];

// 10 КОНСПЕКТ: АНЫҚТАМА, ФОРМУЛА, МЫСАЛ
const notes = [
  {
    title:"Иррационал өрнек",
    text:"Құрамында түбір таңбасы болатын математикалық өрнек түбірлі өрнек деп аталады. Түбірлі өрнектерді ықшамдағанда олардың мәні өзгермеуі тиіс.",
    formula:M`\sqrt{ab}=\sqrt a\sqrt b,\qquad a,b\geq0`,
    example:[M`\sqrt{18}=\sqrt{9\cdot2}`,M`=3\sqrt2`]
  },
  {
    title:"Квадрат түбірдің мәні",
    text:"Теріс емес санның арифметикалық квадрат түбірі — квадраты сол санға тең теріс емес сан. Квадрат түбірдің мәні теріс болмайды.",
    formula:M`\sqrt{a^2}=|a|`,
    example:[M`\sqrt{(-8)^2}`,M`=\sqrt{64}=8`]
  },
  {
    title:"Көбейткішті түбір сыртына шығару",
    text:"Түбір астындағы санды толық квадрат пен қалған көбейткішке жіктейміз. Толық квадраттың түбірін түбір сыртына шығарамыз.",
    formula:M`\sqrt{a^2b}=|a|\sqrt b,\quad b\geq0`,
    example:[M`\sqrt{50}=\sqrt{25\cdot2}`,M`=5\sqrt2`]
  },
  {
    title:"Көбейткішті түбір астына енгізу",
    text:"Теріс емес көбейткішті түбір астына енгізу үшін оны квадраттап, түбір астындағы санға көбейтеміз.",
    formula:M`a\sqrt b=\sqrt{a^2b},\quad a,b\geq0`,
    example:[M`4\sqrt3=\sqrt{16\cdot3}`,M`=\sqrt{48}`]
  },
  {
    title:"Ұқсас түбірлі мүшелер",
    text:"Түбір астындағы сандары бірдей мүшелердің коэффициенттері қосылады немесе азайтылады. Түбірлі бөлік өзгермейді.",
    formula:M`a\sqrt c+b\sqrt c=(a+b)\sqrt c`,
    example:[M`3\sqrt5+4\sqrt5`,M`=7\sqrt5`]
  },
  {
    title:"Әртүрлі түбірлерді ықшамдау",
    text:"Алдымен әр түбірді мүмкіндігінше ықшамдаймыз. Егер түбір астындағы сандары бірдей болса, ұқсас мүшелерді біріктіреміз.",
    formula:M`\sqrt8+\sqrt{18}=2\sqrt2+3\sqrt2`,
    example:[M`\sqrt8+\sqrt{18}`,M`=5\sqrt2`]
  },
  {
    title:"Түбірлерді көбейту",
    text:"Екі теріс емес санның квадрат түбірлерін көбейту үшін олардың көбейтіндісінің квадрат түбірін табуға болады.",
    formula:M`\sqrt a\sqrt b=\sqrt{ab}`,
    example:[M`\sqrt3\sqrt{12}`,M`=\sqrt{36}=6`]
  },
  {
    title:"Түбірлерді бөлу",
    text:"Теріс емес a және оң b сандары үшін квадрат түбірлердің бөліндісі түбір астындағы сандардың бөліндісінің квадрат түбіріне тең.",
    formula:M`\frac{\sqrt a}{\sqrt b}=\sqrt{\frac ab},\qquad a\geq0,\ b>0`,
    example:[M`\frac{\sqrt{72}}{\sqrt2}`,M`=\sqrt{36}=6`]
  },
  {
    title:"Бөлімді иррационалдықтан босату",
    text:"Бөлімдегі бір квадрат түбірді жою үшін алымы мен бөлімін сол түбірге көбейтеміз. Алынған бөлшекті ықшамдаймыз.",
    formula:M`\frac1{\sqrt a}=\frac{\sqrt a}{a},\qquad a>0`,
    example:[M`\frac2{\sqrt2}`,M`=\frac{2\sqrt2}{2}=\sqrt2`]
  },
  {
    title:"Түйіндес өрнектер",
    text:"Қосынды мен айырмадан тұратын екі өрнек түйіндес деп аталады. Олардың көбейтіндісі квадраттардың айырмасына тең.",
    formula:M`(a+b)(a-b)=a^2-b^2`,
    example:[
      M`\frac1{\sqrt3+1}`,
      M`=\frac{\sqrt3-1}{(\sqrt3+1)(\sqrt3-1)}`,
      M`=\frac{\sqrt3-1}{2}`
    ]
  }
];

// 4 ДЕҢГЕЙ, БАРЛЫҒЫ 20 ЕСЕП
// Жауап енгізу үшін сандық нәтиже алынады.
// Шешу жолында дәл математикалық түрі көрсетіледі.
const levels = [
  {
    name:"I деңгей — Жеңіл",
    points:5,
    items:[
      {
        q:M`\sqrt{64}`,
        answer:8,
        exact:M`8`,
        steps:[M`\sqrt{64}=8`]
      },
      {
        q:M`\sqrt{25}+\sqrt{16}`,
        answer:9,
        exact:M`9`,
        steps:[M`5+4=9`]
      },
      {
        q:M`\sqrt{100}-\sqrt{36}`,
        answer:4,
        exact:M`4`,
        steps:[M`10-6=4`]
      },
      {
        q:M`\sqrt3\cdot\sqrt{12}`,
        answer:6,
        exact:M`6`,
        steps:[M`\sqrt{36}=6`]
      },
      {
        q:M`\frac{\sqrt{50}}{\sqrt2}`,
        answer:5,
        exact:M`5`,
        steps:[M`\sqrt{25}=5`]
      }
    ]
  },
  {
    name:"II деңгей — Орташа",
    points:10,
    items:[
      {
        q:M`\sqrt{18}\cdot\sqrt2`,
        answer:6,
        exact:M`6`,
        steps:[M`\sqrt{36}=6`]
      },
      {
        q:M`2\sqrt3\cdot\sqrt{12}`,
        answer:12,
        exact:M`12`,
        steps:[M`2\sqrt{36}=12`]
      },
      {
        q:M`\frac{\sqrt{98}}{\sqrt2}`,
        answer:7,
        exact:M`7`,
        steps:[M`\sqrt{49}=7`]
      },
      {
        q:M`\sqrt{(-9)^2}`,
        answer:9,
        exact:M`9`,
        steps:[M`|-9|=9`]
      },
      {
        q:M`(\sqrt5)^2+\sqrt{49}`,
        answer:12,
        exact:M`12`,
        steps:[M`5+7=12`]
      }
    ]
  },
  {
    name:"III деңгей — Қиын",
    points:15,
    items:[
      {
        q:M`(\sqrt8+\sqrt{18})\sqrt2`,
        answer:10,
        exact:M`10`,
        steps:[
          M`(2\sqrt2+3\sqrt2)\sqrt2`,
          M`=5\sqrt2\cdot\sqrt2=10`
        ]
      },
      {
        q:M`(\sqrt{27}-\sqrt3)\sqrt3`,
        answer:6,
        exact:M`6`,
        steps:[
          M`(3\sqrt3-\sqrt3)\sqrt3`,
          M`=2\sqrt3\sqrt3=6`
        ]
      },
      {
        q:M`\frac6{\sqrt3}\cdot\sqrt3`,
        answer:6,
        exact:M`6`,
        steps:[M`\frac{6\sqrt3}{\sqrt3}=6`]
      },
      {
        q:M`(\sqrt5+\sqrt2)(\sqrt5-\sqrt2)`,
        answer:3,
        exact:M`3`,
        steps:[M`5-2=3`]
      },
      {
        q:M`\sqrt{75}\cdot\sqrt3-\sqrt{16}`,
        answer:11,
        exact:M`11`,
        steps:[M`\sqrt{225}-4`,M`=15-4=11`]
      }
    ]
  },
  {
    name:"IV деңгей — Өте қиын",
    points:20,
    items:[
      {
        q:M`(\sqrt{50}-\sqrt8)\sqrt2`,
        answer:6,
        exact:M`6`,
        steps:[
          M`(5\sqrt2-2\sqrt2)\sqrt2`,
          M`=3\sqrt2\cdot\sqrt2=6`
        ]
      },
      {
        q:M`\frac{(\sqrt7+\sqrt3)(\sqrt7-\sqrt3)}2`,
        answer:2,
        exact:M`2`,
        steps:[M`\frac{7-3}{2}=2`]
      },
      {
        q:M`\frac1{\sqrt3-1}\cdot(\sqrt3-1)`,
        answer:1,
        exact:M`1`,
        steps:[M`\frac{\sqrt3-1}{\sqrt3-1}=1`]
      },
      {
        q:M`\frac{\sqrt{192}}{\sqrt3}+\sqrt{16}`,
        answer:12,
        exact:M`12`,
        steps:[M`\sqrt{64}+4=8+4=12`]
      },
      {
        q:M`(\sqrt{12}+\sqrt3)^2`,
        answer:27,
        exact:M`27`,
        steps:[M`(2\sqrt3+\sqrt3)^2`,
          M`=(3\sqrt3)^2=27`]
      }
    ]
  }
];

// 3 ТОПҚА 15 СҰРАҚ, ДҰРЫС ЖАУАП ӘРТҮРЛІ ОРЫНДА
const quiz = [
  {
    q:"√72 өрнегінің ықшам түрі?",
    a:["3√8","6√2","2√6","9√2"],
    correct:1
  },
  {
    q:"√3 · √12 нәтижесі?",
    a:["3","12","6","9"],
    correct:2
  },
  {
    q:"√50 өрнегі неге тең?",
    a:["5√2","2√5","10√5","25√2"],
    correct:0
  },
  {
    q:"3√5 + 2√5 нәтижесі?",
    a:["5√10","6√5","√25","5√5"],
    correct:3
  },
  {
    q:"√(−7)² неге тең?",
    a:["−7","7","49","−49"],
    correct:1
  },
  {
    q:"√8 + √18 нәтижесі?",
    a:["√26","4√2","5√2","5√3"],
    correct:2
  },
  {
    q:"√20 · √5 нәтижесі?",
    a:["10","25","5","20"],
    correct:0
  },
  {
    q:"5/√5 өрнегін ықшамдасақ?",
    a:["5√5","1/5","√25","√5"],
    correct:3
  },
  {
    q:"√98 өрнегінің ықшам түрі?",
    a:["9√2","7√2","2√7","14√2"],
    correct:1
  },
  {
    q:"(√5+√2)(√5−√2) мәні?",
    a:["7","√3","3","5"],
    correct:2
  },
  {
    q:"√a² жалпы жағдайда неге тең?",
    a:["|a|","a","−a","a²"],
    correct:0
  },
  {
    q:"√75/√3 мәні?",
    a:["15","3","25","5"],
    correct:3
  },
  {
    q:"√48 ықшам түрі?",
    a:["3√4","4√3","2√8","6√2"],
    correct:1
  },
  {
    q:"Түйіндес өрнектердің көбейтіндісі?",
    a:["Қосынды","Кубтардың айырмасы","Квадраттардың айырмасы","Екі еселенген көбейтінді"],
    correct:2
  },
  {
    q:"(√3)² неге тең?",
    a:["3","9","√6","6"],
    correct:0
  }
];

const homework = [
  {
    title:"1. Өрнектерді ықшамдау",
    text:"Түбір астындағы толық квадраттарды бөліп алып, төмендегі үш өрнекті ықшамдаңдар. Барлық қадамдарын жазыңдар.",
    formulas:[
      M`\sqrt{288}`,
      M`\sqrt{147}+\sqrt{75}`,
      M`\sqrt{200}-\sqrt{32}`
    ]
  },
  {
    title:"2. Бөлшектің бөлімін иррационалдықтан босату",
    text:"Бөлшектің алымы мен бөлімін қажетті өрнекке көбейтіп, бөлімдегі түбірді жойыңдар.",
    formulas:[
      M`\frac7{\sqrt7}`,
      M`\frac3{\sqrt5+2}`,
      M`\frac4{\sqrt3-1}`
    ]
  },
  {
    title:"3. Түсіндіру және мысал",
    text:"«Иррационал өрнектерді түрлендіру не үшін қажет?» тақырыбында 8–10 сөйлем жазыңдар. Көбейткішті түбір сыртына шығару мен түйіндес өрнекке көбейтудің әрқайсысына бір мысал келтіріңдер.",
    formulas:[]
  }
];

// =======================================
// СЛАЙДТАРДЫ ҚҰРАСТЫРУ
// =======================================

const slides=[{type:"intro",name:"Кіріспе"}];

theory.forEach((_,i)=>{
  slides.push({
    type:"theory",index:i,
    name:`Түсіндірме ${i+1}`
  });
});

notes.forEach((_,i)=>{
  slides.push({
    type:"note",index:i,
    name:`Конспект ${i+1}`
  });
});

levels.forEach((_,i)=>{
  slides.push({
    type:"level",index:i,
    name:`${i+1}-деңгей`
  });
});

quiz.forEach((_,i)=>{
  slides.push({
    type:"game",index:i,
    name:`${i%3+1}-топ • ${i+1}-сұрақ`
  });
});

slides.push(
  {type:"homework",name:"Үй жұмысы"},
  {type:"finish",name:"Қорытынды"}
);

let currentPage=0;
let individualScore=0;
let teamScores=[0,0,0];

const solved=new Set();
const chosenAnswers=new Map();

let secondsLeft=4800;
let timerInterval=null;
let timerEndAt=0;

function safe(s){
  return String(s).replace(/[&<>"']/g,c=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[c]));
}

function math(tex){
  return `<div class="math-box">\\[${tex}\\]</div>`;
}

function card(color,title,body){
  return `
    <section class="card ${color}">
      <h3>${safe(title)}</h3>
      ${body}
    </section>`;
}

function stepsHTML(items){
  return items.map((item,i)=>`
    <div class="step">
      <strong>${i+1}-қадам</strong>
      ${math(item)}
    </div>
  `).join("");
}

function workHTML(items,prefix){
  return items.map((item,i)=>{
    const id=prefix+"_"+i;

    return `
      <section class="self-task">
        <h3>✏️ Өзіндік жұмыс — ${i+1}-есеп</h3>

        ${math(item.q)}

        <p>
          Алдымен дәптерге өз бетіңмен шығар.
          Кейін шешімді ашып, тексер.
        </p>

        <button class="action"
          data-toggle="${id}">
          Шешу жолы мен жауапты көрсету
        </button>

        <div class="solution" id="${id}" hidden>
          ${stepsHTML(item.steps)}
          <p class="solution-label">
            Дұрыс жауап:
          </p>
          ${math(item.answer)}
        </div>
      </section>`;
  }).join("");
}

function renderIntro(){
  return `
    <div class="slide">
      <div class="eyebrow">
        МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
      </div>

      <h1 class="gradient">
        §7. Иррационал өрнектерді түрлендіру
      </h1>

      ${card("blue","Сабақтың мақсаты",`
        <p>${safe(lesson.goal)}</p>
      `)}

      ${card("yellow","Бүгінгі мысал",`
        ${math(M`\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2`)}
      `)}

      ${card("green","Сабақ жоспары",`
        <p>5 түсіндірме және 10 өзіндік есеп</p>
        <p>10 конспект, әр бетінде шығарылған мысал</p>
        <p>4 деңгей бойынша 20 есеп</p>
        <p>3 топқа арналған 15 сұрақ</p>
        <p>Үй жұмысы және қорытынды</p>
      `)}

      ${card("purple","80 минуттық жоспар",`
        <p>Кіріспе — 5 минут</p>
        <p>Теория және өзіндік жұмыс — 20 минут</p>
        <p>Конспект — 15 минут</p>
        <p>Деңгейлік тапсырмалар — 20 минут</p>
        <p>Топтық ойын — 15 минут</p>
        <p>Үй жұмысы және қорытынды — 5 минут</p>
      `)}
    </div>`;
}

function renderTheory(index){
  const t=theory[index];

  return `
    <div class="slide">
      <div class="eyebrow">
        ТҮСІНДІРМЕ ${index+1} / 5
      </div>

      <h2>${safe(t.title)}</h2>

      ${card("blue","Анықтама",
        `<p>${safe(t.definition)}</p>`)}

      ${card("purple","Қарапайым түсіндірме",
        `<p>${safe(t.explain)}</p>`)}

      ${card("green","Ереже",
        `<p>${safe(t.rule)}</p>`)}

      ${card("yellow","Формула",math(t.formula))}

      ${card("red","Назар аударыңдар!",
        `<p>${safe(t.warning)}</p>`)}

      ${card("green","Шығарылған мысал",
        stepsHTML(t.worked))}

      <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>
      <h2>✏️ Түсіндірмені бекіту</h2>

      ${workHTML(t.self,"theory_"+index)}
    </div>`;
}

function renderNote(index){
  const n=notes[index];

  return `
    <div class="slide">
      <div class="eyebrow">
        КОНСПЕКТ ${index+1} / 10
      </div>

      <h2>${safe(n.title)}</h2>

      <div class="notebook">
        <p>✍ ДӘПТЕРГЕ ЖАЗЫП АЛЫҢДАР</p>
        <p>${safe(n.text)}</p>
      </div>

      ${card("yellow","Негізгі формула",
        math(n.formula))}

      ${card("green","Шығарылған мысал",
        stepsHTML(n.example))}

      ${card("blue","Ауызша түсіндіру",`
        <p>
          Осы мысалдың шешу жолын
          өз сөздеріңмен түсіндіріңдер.
        </p>
      `)}
    </div>`;
}

function renderLevel(index){
  const level=levels[index];

  return `
    <div class="slide">
      <div class="eyebrow">
        ДЕҢГЕЙЛІК ТАПСЫРМАЛАР ${index+1} / 4
      </div>

      <h2>📐 ${safe(level.name)}</h2>

      <div class="level-header">
        <span>5 есеп</span>
        <span>Әр дұрыс жауап: +${level.points} ұпай</span>
      </div>

      <p>
        Жауапты сан немесе математикалық өрнек
        түрінде енгізуге болады.
        Мысалы: 6, 3/2 немесе sqrt(2).
      </p>

      <div class="level-grid">
        ${level.items.map((task,i)=>{
          const key=index+"_"+i;
          const done=solved.has(key);

          return `
            <div class="level-task">
              <h3>${i+1}-есеп</h3>
              ${math(task.q)}

              <div class="answer-row">
                <input
                  id="answer_${key}"
                  type="text"
                  placeholder="Жауабыңды енгіз"
                  ${done?"disabled":""}
                >

                <button data-check="${key}"
                  ${done?"disabled":""}>
                  ${done?"✓ Дұрыс":"Тексеру"}
                </button>
              </div>

              <p id="feedback_${key}"
                class="feedback ${done?"correct":""}">
                ${done
                  ?`✓ Дұрыс! +${level.points} ұпай`
                  :"Жауапты есептеп енгіз."}
              </p>

              <button class="action"
                data-toggle="solution_${key}">
                Шешу жолын көрсету
              </button>

              <div id="solution_${key}"
                class="solution" hidden>
                ${stepsHTML(task.steps)}
                <p class="solution-label">
                  Дұрыс жауап:
                </p>
                ${math(task.exact)}
              </div>
            </div>`;
        }).join("")}
      </div>
    </div>`;
}

function renderGame(index){
  const q=quiz[index];
  const team=index%3;
  const answer=chosenAnswers.get(index);

  return `
    <div class="slide">
      <div class="eyebrow">
        ТОПТЫҚ ОЙЫН • ${index+1} / 15
      </div>

      <h2>🏆 ${team+1}-топ жауап береді</h2>

      <div class="scores">
        ${teamScores.map((points,i)=>`
          <div class="team ${i===team?"current":""}">
            ${i+1}-топ
            <strong>${points}</strong>
          </div>
        `).join("")}
      </div>

      ${card("yellow",`${index+1}-сұрақ`,`
        <p>${safe(q.q)}</p>

        <div class="answers">
          ${q.a.map((option,i)=>{
            let style="";

            if(answer!==undefined){
              if(i===q.correct) style="correct";
              else if(i===answer) style="wrong";
            }

            return `
              <button data-choice="${i}"
                class="${style}"
                ${answer!==undefined?"disabled":""}>
                ${"ABCD"[i]}. ${safe(option)}
              </button>`;
          }).join("")}
        </div>

        <p>
          ${answer===undefined
            ?"Бір дұрыс жауапты таңдаңдар."
            :answer===q.correct
              ?"✓ Дұрыс! Командаға 10 ұпай қосылды."
              :"Дұрыс жауап: "+safe(q.a[q.correct])}
        </p>
      `)}

      ${card("blue","Ойын ережесі",`
        <p>Әр дұрыс жауап — 10 ұпай.</p>
        <p>Кезек: 1-топ → 2-топ → 3-топ.</p>
        <p>Жауаптан кейін «Келесі» батырмасын басыңдар.</p>
      `)}
    </div>`;
}

function renderHomework(){
  return `
    <div class="slide">
      <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
      <h2>📚 Үй жұмысы</h2>

      ${homework.map((item,i)=>card(
        ["blue","yellow","green"][i],
        item.title,
        `<p>${safe(item.text)}</p>`+
        item.formulas.map(math).join("")
      )).join("")}

      ${card("red","Ескерту",`
        <p>
          Түбірлерді толық ықшамдап,
          әрбір математикалық теңдікті дұрыс жазыңдар.
        </p>
      `)}
    </div>`;
}

function renderFinish(){
  const max=Math.max(...teamScores);
  const winners=teamScores
    .map((v,i)=>v===max?`${i+1}-топ`:null)
    .filter(Boolean);

  return `
    <div class="slide">
      <div class="eyebrow">ҚОРЫТЫНДЫ</div>
      <h1 class="gradient">Сабақ аяқталды!</h1>

      <div class="scores">
        ${teamScores.map((points,i)=>`
          <div class="team">
            ${i+1}-топ
            <strong>${points}</strong>
          </div>`).join("")}
      </div>

      ${card("green","Топтық ойын нәтижесі",`
        <p>
          ${winners.join(", ")}
          ${winners.length===1
            ?"— жеңімпаз!"
            :"— бірдей ұпай жинады!"}
        </p>
      `)}

      ${card("blue","Деңгейлік тапсырма",`
        <p>Дұрыс жауаптар: ${solved.size} / 20</p>
        <p>Жеке ұпай: ${individualScore}</p>
      `)}

      ${card("yellow","Не үйрендік?",`
        <p>Түбірлі өрнектерді ықшамдадық.</p>
        <p>Ұқсас түбірлерді біріктірдік.</p>
        <p>Бөлімді иррационалдықтан босаттық.</p>
      `)}

      <h2>Сау болыңыздар!</h2>
    </div>`;
}

// =======================================
// БЕТТІ КӨРСЕТУ
// =======================================

let mathQueue=Promise.resolve();

function renderMath(){
  if(!window.MathJax)return;

  mathQueue=mathQueue.then(async()=>{
    await MathJax.startup.promise;

    if(typeof MathJax.typesetPromise==="function"){
      await MathJax.typesetPromise([$("content")]);
    }
  }).catch(error=>console.warn("Формула:",error));
}

function render(){
  const slide=slides[currentPage];
  let html="";

  switch(slide.type){
    case "intro": html=renderIntro();break;
    case "theory": html=renderTheory(slide.index);break;
    case "note": html=renderNote(slide.index);break;
    case "level": html=renderLevel(slide.index);break;
    case "game": html=renderGame(slide.index);break;
    case "homework": html=renderHomework();break;
    case "finish": html=renderFinish();break;
  }

  // Алдыңғы беттегі формулаларды тазарту
  if(window.MathJax?.typesetClear){
    MathJax.typesetClear([$("content")]);
  }

  $("content").innerHTML=html;
  $("content").scrollTop=0;

  $("pageCounter").textContent=
    `${currentPage+1} / ${slides.length}`;

  $("pageTitle").textContent=slide.name;

  $("pageProgress").style.width=
    ((currentPage+1)/slides.length*100)+"%";

  $("totalScore").textContent=
    individualScore+teamScores.reduce((a,b)=>a+b,0);

  $("prevPage").disabled=currentPage===0;
  $("nextPage").disabled=currentPage===slides.length-1;

  document.querySelectorAll("[data-section]").forEach(btn=>{
    btn.classList.toggle(
      "active",
      btn.dataset.section===slide.type
    );
  });

  renderMath();
}

function nextPage(){
  if(currentPage<slides.length-1){
    currentPage++;
    render();
  }
}

function prevPage(){
  if(currentPage>0){
    currentPage--;
    render();
  }
}

function jumpTo(type){
  const index=slides.findIndex(s=>s.type===type);
  if(index!==-1){
    currentPage=index;
    render();
  }
}

$("nextPage").addEventListener("click",nextPage);
$("prevPage").addEventListener("click",prevPage);

document.querySelectorAll("[data-section]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    jumpTo(btn.dataset.section);
  });
});

// =======================================
// ЖАУАПТЫ КӨРСЕТУ ЖӘНЕ ТЕКСЕРУ
// =======================================

$("content").addEventListener("click",event=>{
  const toggle=event.target.closest("[data-toggle]");

  if(toggle){
    const block=$(toggle.dataset.toggle);
    if(block){
      block.hidden=!block.hidden;
      renderMath();
    }
    return;
  }

  const check=event.target.closest("[data-check]");
  if(check){
    checkAnswer(check.dataset.check);
    return;
  }

  const choice=event.target.closest("[data-choice]");
  if(choice){
    chooseGameAnswer(Number(choice.dataset.choice));
  }
});

function checkAnswer(key){
  if(solved.has(key))return;

  const [levelIndex,taskIndex]=key.split("_").map(Number);
  const level=levels[levelIndex];
  const task=level.items[taskIndex];

  const input=$("answer_"+key);
  const feedback=$("feedback_"+key);

  if(!input.value.trim()){
    feedback.textContent="Алдымен жауапты енгіз.";
    return;
  }

  let value;

  try{
    value=calculate(input.value);
  }catch(error){
    feedback.textContent=
      "Санды немесе дұрыс математикалық өрнекті енгіз.";
    return;
  }

  const tolerance=
    0.00001*Math.max(1,Math.abs(task.answer));

  if(Math.abs(value-task.answer)<=tolerance){
    solved.add(key);
    individualScore+=level.points;

    input.disabled=true;
    const btn=document.querySelector(`[data-check="${key}"]`);
    if(btn){
      btn.disabled=true;
      btn.textContent="✓ Дұрыс";
    }

    feedback.classList.add("correct");
    feedback.textContent=`✓ Дұрыс! +${level.points} ұпай`;
    $("totalScore").textContent=
      individualScore+teamScores.reduce((a,b)=>a+b,0);
  }else{
    feedback.textContent="Жауап қате. Қайта есептеп көр.";
  }
}

function chooseGameAnswer(choice){
  const slide=slides[currentPage];

  if(slide.type!=="game")return;
  if(chosenAnswers.has(slide.index))return;

  chosenAnswers.set(slide.index,choice);

  if(quiz[slide.index].correct===choice){
    teamScores[slide.index%3]+=10;
  }

  render();
}

$("resetGame").addEventListener("click",()=>{
  teamScores=[0,0,0];
  chosenAnswers.clear();
  render();
});

// =======================================
// ТОЛЫҚ ЭКРАН ЖӘНЕ УАҚЫТ
// =======================================

$("fullscreenBtn").addEventListener("click",async()=>{
  try{
    if(document.fullscreenElement){
      await document.exitFullscreen();
    }else{
      await document.documentElement.requestFullscreen();
    }
  }catch(error){
    console.warn(error);
  }
});

function formatTime(seconds){
  return String(Math.floor(seconds/60)).padStart(2,"0")+
    ":"+String(seconds%60).padStart(2,"0");
}

function updateTimer(){
  $("remaining").textContent=formatTime(secondsLeft);
  $("elapsed").textContent=formatTime(4800-secondsLeft);
  $("timeProgress").style.width=
    ((4800-secondsLeft)/4800*100)+"%";
}

function startTimer(){
  if(timerInterval!==null || secondsLeft<=0)return;

  timerEndAt=Date.now()+secondsLeft*1000;

  timerInterval=setInterval(()=>{
    secondsLeft=Math.max(
      0,Math.ceil((timerEndAt-Date.now())/1000)
    );

    updateTimer();
    if(secondsLeft===0)pauseTimer();
  },250);
}

function pauseTimer(){
  if(timerInterval!==null)clearInterval(timerInterval);
  timerInterval=null;
}

function resetTimer(){
  pauseTimer();
  secondsLeft=4800;
  updateTimer();
}

$("timerStart").addEventListener("click",startTimer);
$("timerPause").addEventListener("click",pauseTimer);
$("timerReset").addEventListener("click",resetTimer);

function updateClock(){
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

updateClock();
setInterval(updateClock,1000);

// =======================================
// ҚАРАПАЙЫМ ЖӘНЕ ҒЫЛЫМИ КАЛЬКУЛЯТОР
// =======================================

const calcValues={basic:"",science:""};

const calcKeys={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],
  science:[
    "C","⌫","(",")",
    "sin","cos","tg","ctg",
    "√","∛","x²","xʸ",
    "log","ln","π","e",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ]
};

const calcMap={
  "×":"*","÷":"/","−":"-",
  "sin":"sin(","cos":"cos(",
  "tg":"tan(","ctg":"ctg(",
  "√":"sqrt(","∛":"cbrt(",
  "log":"log(","ln":"ln(",
  "π":"pi",
  "x²":"^2","xʸ":"^"
};

function createCalculator(type){
  const grid=$("keys-"+type);

  calcKeys[type].forEach(key=>{
    const btn=document.createElement("button");

    btn.type="button";
    btn.textContent=key;

    if(key==="C")btn.classList.add("clear");
    if(key==="=")btn.classList.add("equal");

    if(["sin","cos","tg","ctg","log","ln"].includes(key)){
      btn.classList.add("trig");
    }

    if(["+","−","×","÷","√","∛","x²","xʸ"].includes(key)){
      btn.classList.add("operator");
    }

    btn.addEventListener("click",()=>pressCalc(type,key));
    grid.appendChild(btn);
  });
}

function pressCalc(type,key){
  let value=calcValues[type];

  if(key==="C"){
    value="";
  }else if(key==="⌫"){
    value=value.slice(0,-1);
  }else if(key==="="){
    try{
      value=String(Number(calculate(value).toPrecision(12)));
    }catch(error){
      value="Қате";
    }
  }else{
    if(value==="Қате")value="";
    value+=calcMap[key]??key;
  }

  calcValues[type]=value;
  const display=$("display-"+type);
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// =======================================
// ҚАУІПСІЗ ЕСЕПТЕУ ЖҮЙЕСІ
// =======================================
// sin, cos, tg, ctg — градуспен.
// eval() пайдаланылмайды.

function calculate(input){
  const text=String(input)
    .replace(/\s+/g,"")
    .replace(/,/g,".");

  let pos=0;

  const rad=x=>x*Math.PI/180;

  const funcs={
    sin:x=>Math.sin(rad(x)),
    cos:x=>Math.cos(rad(x)),
    tan:x=>{
      if(Math.abs(Math.cos(rad(x)))<1e-12){
        throw Error("Тангенс анықталмаған");
      }
      return Math.tan(rad(x));
    },
    ctg:x=>{
      if(Math.abs(Math.sin(rad(x)))<1e-12){
        throw Error("Котангенс анықталмаған");
      }
      return Math.cos(rad(x))/Math.sin(rad(x));
    },
    sqrt:Math.sqrt,
    cbrt:Math.cbrt,
    log:Math.log10,
    ln:Math.log
  };

  function take(symbol){
    if(text[pos]===symbol){
      pos++;
      return true;
    }
    return false;
  }

  function atom(){
    if(take("(")){
      const v=expr();
      if(!take(")"))throw Error("Жақша");
      return v;
    }

    const rest=text.slice(pos);
    const match=rest.match(/^(?:\d+\.?\d*|\.\d+)/);

    if(match){
      pos+=match[0].length;
      return Number(match[0]);
    }

    if(rest.startsWith("pi")){
      pos+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")){
      pos++;
      return Math.E;
    }

    for(const name of Object.keys(funcs)){
      if(rest.startsWith(name+"(")){
        pos+=name.length+1;

        const v=expr();

        if(!take(")"))throw Error("Жақша");

        return funcs[name](v);
      }
    }

    throw Error("Өрнек дұрыс емес");
  }

  function percent(){
    let v=atom();
    while(take("%"))v/=100;
    return v;
  }

  function power(){
    let v=percent();
    if(take("^"))v=Math.pow(v,unary());
    return v;
  }

  function unary(){
    if(take("+"))return unary();
    if(take("-"))return -unary();
    return power();
  }

  function term(){
    let v=unary();

    while(true){
      if(take("*")){
        v*=unary();
      }else if(take("/")){
        const d=unary();
        if(d===0)throw Error("Нөлге бөлу");
        v/=d;
      }else{
        break;
      }
    }

    return v;
  }

  function expr(){
    let v=term();

    while(true){
      if(take("+"))v+=term();
      else if(take("-"))v-=term();
      else break;
    }

    return v;
  }

  if(!text)throw Error("Бос өрнек");

  const value=expr();

  if(pos!==text.length || !Number.isFinite(value)){
    throw Error("Есептеу қатесі");
  }

  return Math.abs(value)<1e-12?0:value;
}

// =======================================
// КАЛЬКУЛЯТОР АШУ / ЖАБУ
// =======================================

function toggleCalculator(type){
  const element=$("calc-"+type);
  const opening=!element.classList.contains("visible");

  const other=type==="basic"?"science":"basic";
  $("calc-"+other).classList.remove("visible");

  element.classList.toggle("visible",opening);

  if(opening){
    const rect=element.getBoundingClientRect();

    element.style.left=Math.min(
      Math.max(0,innerWidth-element.offsetWidth),
      Math.max(0,rect.left)
    )+"px";

    element.style.top=Math.min(
      Math.max(0,innerHeight-element.offsetHeight),
      Math.max(0,rect.top)
    )+"px";
  }
}

$("basicLaunch").addEventListener("click",
  ()=>toggleCalculator("basic"));

$("scienceLaunch").addEventListener("click",
  ()=>toggleCalculator("science"));

document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $("calc-"+btn.dataset.close).classList.remove("visible");
  });
});

// =======================================
// КАЛЬКУЛЯТОРДЫҢ КОРПУСЫНАН
// ҰСТАП ЖЫЛЖЫТУ
// =======================================

function makeDraggable(element){
  let drag=null;
  let blockClick=false;

  element.addEventListener("pointerdown",event=>{
    if(event.target.closest(".close-calc"))return;
    if(event.pointerType==="mouse" && event.button!==0)return;

    const rect=element.getBoundingClientRect();

    drag={
      id:event.pointerId,
      startX:event.clientX,
      startY:event.clientY,
      left:rect.left,
      top:rect.top,
      moved:false
    };

    blockClick=false;
  });

  window.addEventListener("pointermove",event=>{
    if(!drag || event.pointerId!==drag.id)return;

    const dx=event.clientX-drag.startX;
    const dy=event.clientY-drag.startY;

    if(Math.hypot(dx,dy)>6)drag.moved=true;
    if(!drag.moved)return;

    element.classList.add("dragging");

    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);

    element.style.left=Math.max(
      0,Math.min(maxX,drag.left+dx)
    )+"px";

    element.style.top=Math.max(
      0,Math.min(maxY,drag.top+dy)
    )+"px";
  });

  window.addEventListener("pointerup",event=>{
    if(!drag || event.pointerId!==drag.id)return;

    blockClick=drag.moved;
    element.classList.remove("dragging");
    drag=null;
  });

  window.addEventListener("pointercancel",event=>{
    if(!drag || event.pointerId!==drag.id)return;
    drag=null;
    element.classList.remove("dragging");
  });

  element.addEventListener("click",event=>{
    if(!blockClick)return;

    event.preventDefault();
    event.stopImmediatePropagation();
    blockClick=false;
  },true);
}

// =======================================
// ІСКЕ ҚОСУ
// =======================================

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
