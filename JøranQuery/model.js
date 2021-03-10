/*
For hver side: 
    - hvilke data trengs for å tegne opp denne siden? 
        queries
    - hva kan man gjøre på denne siden? hva kan man endre?
        commands
 - Noe data er felles for flere sider
 - Alle inputs er også felt i modellen - disse kan vi lagre per side
*/
//  Kloning av et obj
// const obj = { one: 1, two: 2 };

// const obj2 = obj;
const model = {
  //admin Navigation blocks
  infoBlocks: {
    info1: 'header',
    info2: 'createNewQuery',
    info3: 'watchActiveQueries',
    info4: 'showEndedQueries',
  },
  // Questionere block
  queryBlock: {
    addQueryText: 'Skriv navn på spørreundersøkelsen her:',
    questionField: 'question',
    queryId: 'queryIdNumber',
  },
  //question blocks
  queryQuestion1: {
    questionField: 'question',
    answerField1: 'answer1',
    answerField2: 'answer2',
    answerField3: 'answer3',
  },
  queryQuestion2: {
    questionField: 'question',
    answerField1: 'answer1',
    answerField2: 'answer2',
    answerField3: 'answer3',
  },

  queryQuestion3: {
    questionField: 'question',
    answerField1: 'answer1',
    answerField2: 'answer2',
    answerField3: 'answer3',
  },

  queryQuestion4: {
    questionField: 'question',
    answerField1: 'answer1',
    answerField2: 'answer2',
    answerField3: 'answer3',
  },

  addQuestion: {
    add: false,
    addQuestionText: 'Skriv inn spørsmålet her',
    questionInputField: 'Spørsmålstekst',
  },
  //Define ID
  defineAnonymous: {
    status: false,
  },
  // Define time
  setDeadline: {
    status: false,
    date: 'dato',
  },
  // People
  addParticipants: {
    status: false,
    participantName: 'navn',
    participantEMail: 'epost',
    participantGroupField1: 'Faste ansatte',
    participantGroupField2: 'Deltid ansatte',
    participantGroupField3: 'Styret',
    participantGroupField4: 'Ringevikarer',
    participantGroupField5: 'Jørans mamma',
  },
  // push the query
  publishQuery: {
    status: false,
    publishButton: '',
  },

  //Query Result
};
