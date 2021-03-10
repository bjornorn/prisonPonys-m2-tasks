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
    info1: 'header22222',
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
      // former Query
    formerQuery: {
      Query1: "Spørreundersøkelse 24.01.2020",
      Query2: "Spørreundersøkelse 05.03.2020",
      Query3: "Spørreundersøkelse 16.07.2020",
      Query4: "Spørreundersøkelse 04.06.2020",
    },

    // Query Results 
   

    //option 1 everything in diffrent obj. makes the code longer and kinda easier to deal with . 
    QueryResult:{
       CurrentQuery: "Spørreundersøkelse 19.02.2021"},
        queryQuestion1: {
          questionField: 'question',
           answerField1: 'answer1',
           answerField2: 'answer2',
           answerField3: 'answer3',}
    ,
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

     //PDF file
    toPDF:{
      PdF: "Last ned PDF"
    },
   //spørreskjema 
    //dette er hva bruker ser 
      QueryView: {
        CurrentQuery: "Spørreundersøkelse 04.06.2021"},

        //Defined ID
        Anonymous: {textField: "Denne testen er ikke anonym og vil bli loggført med BrukerID"},
        //add Function with Return Value True or false from  defineAnonymous:
         
                //lik som model.JS linje 29 
    queryQuestion1Answerd: {
      questionField: 'question',
      answerField1: 'answer1',
      answerField2: 'answer2',
      answerField3: 'answer3',},
      
      //go to last question
      lastQuestionBox: {
      lastQuestionButton: "forrige spørsmål"},
      //go to next question 
      nextQuestionBox: {
      nextQuestionBox:"Neste spørsmål"}

    

};
