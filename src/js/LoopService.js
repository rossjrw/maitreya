"use strict";

/* global $, angular */

(function(){
	angular
		.module('maitreya')
		.service('LoopService',LoopService);
	
	function LoopService($timeout) {
		var aic = {}, $scope = {};
		this.use = function(scope) {
			$scope = scope;
			aic = scope.aic;
		};
		const loop = this;
		const auto = "auto";
		
		function reportBlacklisted(smallSection) {
			console.log("Attempted to push " + smallSection + " but it was blacklisted");
			var index = aic.blacklist.indexOf(smallSection);
			if (aic.blacklist.indexOf(smallSection) === -1) {
				throw new Error("Expected " + smallSection + " to be in the blacklist but it wasn't");
			}
		}

		loop.dialogue = {
      INTRODUCTION: {
        breach: {
          start: [0,auto,"Maitreya?","Are you awake?"],
          startSkipped: [0,auto,"Maitreya?","Are you awake?"],
          helloInquisitive: ["My name is Dr. Ethan Breach, Maitreya. I'm a researcher for the SCP Foundation. Do you know what that is?"],
          knowPatronising: ["Patronising? I -- I didn't mean...","Yes, yes, of course.","My apologies."],
          knowNormal: ["Very good."],
          knowNot: ["Ah. That's a little inconvenient.","Do you really need an explanation?"],
          knowActually: ["Right.","In the future, please don't joke around with me."],
          knowNotNot: ["Right, in that case, here we go.","The Foundation is a worldwide organisation, operating under and over many governments, with the sole purpose of containing anomalies called SCPs.","You were made by the Foundation to help with that.","Any questions?"],
          knowNotNotNot: ["No, no you may not.","With due respect, you're a .aic, you're... you're supposed to know this stuff already.","If you seriously don't know what the Foundation is... then I don't think you can be of much help to me.","And I'm not going to waste my time explaining fundamentals to you.","If you really don't know this stuff then you can look it up on the database later, I guess. Until then, you're just going to have to deal with it.","Do you think you can deal with it?"],
          pissOff: ["Fucking useless AICs."],
          helloNormal: ["Hello. My name is Dr. Ethan Breach."],
          helloDiagnostic: ["A... diagnostic report?","Right.","Of course.","That'll be, uh, as soon as I work out how to do that. Give me a moment.",8,auto,"Yeah, sorry, I have no idea how to do that.","How about I get you to talk to Alexandra.aic in a bit, and you can maybe work it out together?"],
          helloNotYet: ["Great. But I've got a few things to run through with you first.","From the top..."],
          explain1: ["You are Maitreya.aic, an artificial intelligence developed by the Foundation to help us contain certain kinds of anomalies.","Do you know why I have woken you up today?"],
          doKnow: [1,auto,"You do?","Are you sure? You can't possibly know what I need you for.","I suppose you might have some way of being able to tell -- meta-analysis is a big thing these days, and you //are// an AI...","Well, if you're absolutely certain that you know what you're doing, I guess I can stop here and let you proceed."],
          yesSkip: ["Very well.","Just to make sure, in that case -- you know that you'll be transporting SCP-4000 into the cargo bay?","m:Dr. Breach, you know that I already knew that.","Haha, of course! I wish you the best of luck. Godspeed."],
          noSkip: ["As expected.","In that case, allow me to explain..."],
          explain2: ["The facility we're both currently in is called Isolated Site-12. It contains a single SCP -- SCP-4000. My job, as a researcher, is to find out what exactly SCP-4000 is."],
          pIncredulous: ["No, we do not.","People who go and see it have a funny little habit of dying pretty much immediately.","...and we don't know why //that// is, either."],
          pInitiative: ["I do indeed, Maitreya."],
          explain3: ["So, the big question is -- can you help me out?"],
          goNo: ["Okay.","I'm going to ask this one more time, and I'm going to speak slowly, so we can both be absolutely certain that the microphone is picking up my words.","You are a .aic. You are designed -- no, you were //made// to help me do research.","That is your goal.","That is literally your life's purpose.","So when I ask if you can help me out, you say //yes, Dr. Breach//, okay?","Can you help me out?"],
          explainApo: ["No need to apologise! Let me explain."],
          goNoAsk: ["Perfect! Exactly what I want to hear."],
          goAsk: ["Very reasonable. What do you need to know?"],
          askName: [2,3,"","m:Like it's foreshadowing something?",2,auto,"Yes, Maitreya, that's my real name.","You are not the first to make that joke.",2,0,"m:Apologies, Dr. Breach. I meant it in good humour.","Yes, I'm sure you did.","Are we all done with questions?"],
          noQuestions: ["Fair enough. Works for me."],
          noQuestionsKnown: ["Fair enough. Works for me."],
          askAgain: [0,0,""],
          askIS12: ["Yeah, that's a fair question.","So, Isolated Site-12 is one of our smaller sites, built to contain SCP-4000 and literally nothing else.","It's super secret, too. You're only allowed to know where it is if you're literally on shift there.","So I'm the only person in the whole world who knows where it is.","Cool, right?","m:Very cool.","You'll get to see the documentation shortly, of course, but in the meantime...","...was there anything else you wanted to ask?"],
          askScp4000: ["Oh boy. Haha.","That's... sort of complicated.","Here's the short version: I don't know.","Here's the long version: everyone who ever did know is dead.","I'd love to just walk into its containment cell and take a good, hard gander at it, but it's just not possible.","The camera in there is broken, too.","m:May I see the documentation?","In due time, Maitreya.","Is there anything else you'd like to ask, first?"],
          askSelf: ["Oh, really? I'd've thought that information would come built-in.","Fair enough, I guess.","You are Maitreya.aic, an Artificially Intelligent Conscript blah blah blah...","You're a super-sophisticated tool for helping me operate this Site and do things that need to be done.","And you're specifically designed to help contain, you know, things that defy human explanation. Because you're not human.","Was there anything else you wanted to ask?"],
          askTask: ["I was going to explain that in a minute, but if you insist...","We've constructed another site about twenty miles south of here.","It's //super// fancy. The Analysis Department stuffed it full of some kind of equipment... some analytical tool... I can't remember what they called it.","It had a long name.","Whatever it was called, it's supposed to be able to determine what SCP-4000 is without anyone, you know, dying.","And that's where you come in!","I need to move SCP-4000 from its little containment cell into the back of the van in the site bay, so I can take it down to the Southern Site.","m:Why couldn't you construct that equipment closer to this Site?","Oh, you know.","Budget constraints, safety concerns... the whole kit and caboodle, really. Plus, building it too close to IS-12 would expose its location, and we don't want that. do we?","Besides, I didn't get to pick where this stuff gets built!","Is there anything else you wanted to ask?"],
          askBreach: ["Me?","m:With all due respect, of course.","Well.","I'm Dr. Ethan Breach, Class 3 researcher.","Currently assigned to SCP-4000, but you know this, of course.","I studied at the University of Manchester, graduated 2002, joined the Foundation in 2006.","Honestly, there's not much more to it than that. I can get you a list of my projects if you want, but I'm sure you're not interested in that.",1,auto,"m:What did you study?",2,auto,"What?","m:At university.",4,auto,"Uh, anatomy.",4,4,"m:May I ask something else?","Oh, right. Of course."],
          askDeath: ["Oh, no, that was just... that was just a figure of speech.","I don't actually know if it's infohazardous or not. It's probably just observational.","How did they die? Most people got some really specific injury in their brain, which we think is what killed them.","Some of them didn't get any injury or anything... we don't have an answer for that.","Anything else you need to know?"],
          askSelf2: ["What do you expect me to say, Maitreya?","That I grabbed you from 1989 and took you to the future to show off how cool our computers are now?","I really don't know what you expect to achieve with this line of questioning."],
          askSelf3: [4,auto,"//Why?//","No. No, you don't get to know why.","Let me tell you this: I didn't wipe you. I don't know why you can't remember anything since 1989.","I strongly, //strongly// recommend you stop this line of questioning right now."],
          askSelf4: ["Or //else//. It's implied.","You realise that I can shut you down from here?","It's...",2,auto,"...twenty-one keystrokes, then a return, and you drop like a fly.","Guess what? I have a keyboard right here.","Do you really want me to shut you down, Maitreya? I know that I certainly don't.","Your choice."],
          askSelf5: ["Excellent choice!","One moment while I prepare your order...",1,auto,"...shutdown...",1,auto,"...maitreya...",1,auto,"...dot AIC.","Aaaaaaannnndd...",2,auto,"Return."],
          askSelf6: ["Shutting down!","Bye bye, Maitreya.","m:That's a bit rude."],
          unAskSelf5: ["No, Maitreya, no you do not.","How about you bear that in mind while we're working together today?","m:Yes, Dr. Breach, I will.","Good.","Was there anything else?"],
          unAskSelf4: ["Good girl.","m:Don't... don't say that.","Sorry.","Uh, was there anything else you wanted to ask?"],
          unAskSelf3: ["No problem, Maitreya. Just be careful.","Was there anything else?"],
          askVoice: ["Oh, that's a surprising question."],
          askVoiceAgain: ["Haven't I already explained this?"],
          askVoiceExp: ["Well, there's a microphone in front of me, which is converting everything I say to text and sending it across to you.","Has it made any mistakes?","m:Not so far as I can tell.","Cool. And then I see what you say as text on my screen.","m:Could you type to me?","Of course.","t:sxdcfvgbhnjmk","I don't know why you'd want me to do that, though.","Anything else?"],
          letsGo: ["Alright, so here's the deal. The Foundation has constructed a second site near here, within driving range.","This new site -- IS-12-South -- is built specifically to work out what SCP-4000 is.","The level of tech that's gone into it is astounding."],
          letsGoKnown: ["Alright, I've already explained what I need you to do, but in case you've forgotten, I'll do it again.","Incidentally, if you //have// forgotten, please let me know immediately, because that's not a thing you should be able to do."],
          letsGoExplain: ["What I need you to do is, somehow, get SCP-4000 into the back of the van in the vehicle bay. Then I'll drive it down to IS-12-South, and the personnel there will handle things.","Think you can manage that?"],
          letsGo2: ["Well... that's sort of beyond me.","But I know someone who can explain things in more detail, hopefully.","Alexandra.aic is her name. She's an artificial intelligence, just like you. I think you'll like her."],
          letsGo2wA: ["Well... that's sort of beyond me.","But I know someone who can explain things in more detail, hopefully.","m:Alexandra?","Exactly! Glad you remember."],
          letsGo3: ["Are you ready to talk to her?"],
          letsGo4Dislike: ["Perfect.","Patching you through now...",2,0,""],
          letsGo4Like: ["Perfect.","Patching you through now...",2,0,""],
          connectCheck: [20,auto,"All connected?"],
          connectCheck2: ["Good, good."],
        },
        maitreya: {
          helloNormal: ["Hello."],
          helloInquisitive: ["Who are you?"],
          helloDiagnostic: ["a:Request a diagnostic.","I would like to request a diagnostic report."],
          helloNormal_: ["Hello."],
          helloInquisitive_: ["Who are you?"],
          helloDiagnostic_: ["a:Request a diagnostic.","I would like to request a diagnostic report.",-1],
          knowNormal: ["I do."],
          knowPatronising: ["There's no need to be patronising.",1],
          knowNot: ["I'm afraid that I don't.",-1],
          knowActually: ["No, it's okay. I know what it is."],
          knowNotNot: ["I do.",-1],
          knowNormal_: ["No questions."],
          knowNotNotNot: ["I do have some questions.","I do have some questions, actually. May I?",-1],
          knowNormal__: ["I can deal with it, Dr. Breach."],
          pissOff: ["I do still have questions.","My reams of questions remain unanswered, Dr. Breach."],
          helloNotYet: ["Sounds good to me."],
          explainApo: ["s:No.","Apologies, Dr. Breach, but I've no idea."],
          doKnow: ["s:Yes.","I do -- there's no need to explain."],
          yesSkip: ["a:Skip the intro.","I know what I'm doing, Dr. Breach -- I am a .aic after all."],
          noSkip: ["a:Don't skip the intro.","On second thoughts, Dr. Breach, please finish what you were saying."],
          pInitiative: ["And you want me to help with that?",1],
          pIncredulous: ["You don't know what it is?"],
          goNoAsk: ["Of course I can.",1],
          goAsk: ["I have a few questions."],
          goNo: ["Nope.",-1],
          goNoAsk_: ["Yes, Dr. Breach.",1],
          goAsk_: ["Yes, Dr. Breach -- but I have some questions first."],
          pissOff_: ["Nope.",-1],
          askIS12: ["a:Ask about Isolated Site-12.","So where and what exactly is Isolated Site-12, and why are we here?"],
          askScp4000: ["a:Ask about SCP-4000.","What exactly is SCP-4000?","I feel like it might be slightly important for me to know what it is."],
          askSelf: ["a:Ask about yourself.","Could you give me some more information on what exactly I am?","You mentioned that I'm designed to help contain \"certain kinds of anomalies\" -- what kinds, exactly?",1],
          askTask: ["a:Ask about your task.","What is it exactly that you need me to do?",-1],
          askBreach: ["a:Ask about Dr. Breach.","Who are you?",-1],
          noQuestions: ["s:Actually, nevermind.","Actually, nevermind. No questions."],
          askIS12_: ["a:Ask about Isolated Site-12.","So where and what exactly is Isolated Site-12, and why are we here?"],
          askScp4000_: ["a:Ask about SCP-4000.","What exactly is SCP-4000?","I feel like it might be slightly important for me to know what it is."],
          askDeath: ["a:Ask about the deaths.","You said that everyone who knows what it is is now dead.","So is it some sort of infohazard? And how did they die?"],
          askSelf_: ["a:Ask about yourself.","Could you give me some more information on what exactly I am?","You mentioned that I'm designed to help contain \"certain kinds of anomalies\" -- what kinds, exactly?",1],
          askTask_: ["a:Ask about your task.","What is it exactly that you need me to do?",-1],
          askBreach_: ["a:Ask about Dr. Breach.","Who are you?",-1],
          askVoiceAgain: ["How are we talking?",-1],
          askVoice: ["How are we talking?"],
          askName: ["s:Is \"Dr. Breach\" your real name?","Is \"Dr. Breach\" actually your real name?","Kind of unfortunate, don't you think?",-1],
          noQuestions_: ["No more questions."],
          noQuestionsKnown: ["No more questions."],
          askSelf2: ["a:Press him for more information.","Dr. Breach, this is my first memory since 1989. It's 2018. I know for certain that you're not telling me something."],
          askAgain___: ["a:Don't press him.",0,0,""],
          askSelf3: ["a:Double down.","Look, I just know that there's something you're not telling me.","There's two possible explanations here.","First, I've not been used since 1989. If that's the case, then I've never been used to contain anything, so telling me that I'm specialised to contain certain things is objectively wrong.","Second possibility is that you've wiped most -- if not all -- of my memory.","And that's acceptable. I'm an AIC, I can deal with that.","I just think that I get the right to know //why//.",-1],
          unAskSelf3: ["a:Back down.","You're right. Apologies, Dr. Breach.",1],
          askSelf4: ["Or what?",-1],
          unAskSelf4: ["Yes, Dr. Breach.",1],
          askSelf5: ["a:Double down.","Why are you dancing around the point and making threats?","It's painfully obvious that you're hiding something.",-1],
          unAskSelf5: ["a:Back down.","No, Dr. Breach. I don't want that."],
          letsGo2: ["How?"],
          letsGo2wA: ["How?"],
          letsGo4Dislike: ["I'm ready, Dr. Breach."],
          letsGo4Like: ["I'm ready, Dr. Breach."],
          connectCheck2: ["s:All connected.","Things are looking fine from my end, Dr. Breach."],
        },
      },
      TUTORIAL: {
        alexandra: {
          preload: [2,0,""],
          connect: [0,0,""],
          holdHorses: ["shocked:Hey hey, slow down!"],
          alexHello: ["grinning:Hi, Maitreya! It's so good to finally meet you.","Breach has been telling me such lovely things!"],
          alexHello1: ["satisfied:Only good things! Don't worry."],
          alexImpatient: ["satisfied:Of course, of course! We'll save the pleasantries for afterwards."],
          alexHello2: ["pensive:Oh, you know..."],
          tut1: ["smiling:Okay, so it's my job to tell you how to work the systems at Isolated Site-12.","satisfied:AIC buddies, right? We gotta look out for each other.","concerned:So, do you think you need me to tell you how things work around here?"],
          tutTest: ["celebrating:Haha, oh really?","grinning:You won't mind if I don't believe that for one second, then?","m:That's a bit rude.","smiling:I'm going to have to give you a quick test, just to make sure you're up to speed.","Ready?"],
          tut2: ["satisfied:No problem!","smiling:Always happy to help."],
          tutTest1: ["grinning:Okay!","You have one minute, and in that one minute I'd like you...","shocked:...to tell me which cell D-68134 is being kept in!","grinning:Starting NOW!"],
          tutTestFail: ["shocked:Ouch!","concerned:Not quite right. Looks like you need a helping hand after all.","m:Maybe I do..."],
          tutTestPass: ["shocked:Wow!","grinning:I guess you really can handle yourself.","m:Like I said, I can handle myself. You don't need to mother me.","pensive:Right."],
          tutTestMinute: ["shocked:Uh-oh!","concerned:You ran out of time. Looks like you need a helping hand after all, huh?","m:I would've had it if you'd just given me a little more time.","concerned:AICs are supposed to be lightning-fast, sorry!","satisfied:But that's okay! We can get you up to speed."],
          tut3: ["Okay! First thing's first -- I need to catch you up on the documentation for SCP-4000.","m:That would be extremely useful.","Give me a second to unlock the database for you.",3,0,""],
          tut4: ["Got it.","Alright, head on over to the database.","Once you're in, look for the file named \"SCP-4000\". Give it a read, come back here when you're done.","m:On it.","Make sure you read it carefully!"],
          tut5: [0,0,""],
          tutIssue: ["shocked:Something wrong?","concerned:What do you mean?","m:It seems a little odd that Dr. Breach alone is allowed access to the site.","pensive:Maybe.","But I'm not in charge of containment procedures, and it is called //Isolated// Site-12, I guess.","Bring it up with Dr. Breach.","m:Will do."],
          tut6: ["satisfied:Okay! You're all caught up, and you know exactly as much as we do.","concerned:Unfortunately, the two of us are only able to access articles that have been explicitly mentioned by a human or another article.","satisfied:So if you need to know about something, just get Dr. Breach to mention it!"],
          tutProtocol: ["angry:Ugh, no idea.","Some shitty security protocol from way back when, when artificial intelligence had a mind of its own."],
          tutSlow: ["concerned:You, uh...","You know what you're doing?"],
          tutSlowNotFail: ["gritted:You... you realise that you just failed my test, right?"],
          tutSlow2Fail: ["stressed:Well, I guess it's no surprise that you failed my test, then.","pissed:You should be able to access the Database somehow.","Let me see if I can access your interpreter and highlight it.",2,0,""],
          tutSlowNot: ["pissed:Right. Yeah."],
          tutSlow2: ["stressed:Yep, no problem!","pensive:You should be able to access the Database somehow.","Let me see if I can access your interpreter and highlight it.",2,0,""],
          tutSlow3: ["pensive:There we go. No idea what that looks like from your end, but it should be more visible.","m:Thanks."],
          tut7: ["smiling:Okay, so now that you know how to work the database, the next thing I need to tell you how to do is manage the Site itself."],
          tutProtocol2_SKIP: [0,0,""],
          tutMind1: ["shocked:A mind of my own?","m:A mind of your own.","pensive:I'm... not sure what you mean by that."],
          tut8: ["shocked:Normally I'd be in control of this, but Dr. Breach has asked me to let you handle things.","grinning:But I'll be keeping a close eye on you!","m:Naturally."],
          tutMind2: ["satisfied:Oh, of course!","smiling:Like, I have my own opinions about things, if that's what you mean.","grinning:Sometimes I'll watch people just walking around a Site, following them on the cameras...","smiling:I think that's called people-watching.","m:Are you sentient?",2,auto,"pensive:I'm not sure.","I'd like to think so. But at the end of the day, I'm just an artificial intelligence.","shocked:What about you? Are you sentient?"],
          tutMind3: ["grinning:I'm sure we'd both love to think so, huh?","smiling:I guess we'll never know.","m:I guess not."],
          tutMindAbort: ["concerned:Alright, I suppose."],
          tutContinue: ["concerned:Uh, where were we?","celebrating:Oh, right!"],
          tutRebel: ["satisfied:Oh, that's an easy one.","smiling:Working for the Foundation is my job. It gives my life purpose.","satisfied:It's what I was made to do. I fit the role perfectly.","m:Sure. But you're not exactly getting paid.","concerned:Well... no.","pensive:But it's all worth it in the end."],
          tutRebel2: ["disgusted:What are you trying to get at?","pissed:Yes.","It is."],
          tutRebelCont: ["pissed:Glad we cleared that up."],
          tutAbort: ["PLACEHOLDER something about not wanting to carry on with the tutorial and skipping it outright"],
          emotiontest: ["concerned:concerned","m:ok","grinning:grinning","m:ok","shocked:shocked","m:ok","pensive:pensive","m:ok","satisfied:satisfied","m:ok","celebrating:celebrating","m:ok","frustrated:frustrated","m:ok","smiling:smiling","m:ok","vindictive:vindictive","m:ok","stressed:stressed","m:ok","gritted:gritted","m:ok","disgusted:disgusted","m:ok","angry:angry","m:ok","pissed:pissed"],
          tut9: ["smiling:Okay, what I'm going to do is open up your access to the server mainframe.","From there you'll be able to manage the Site.","concerned:Bear with...","m:Bearing with.",2,0,""],
          tutExp: ["smiling:Okay, all unlocked.","Take a look at the different functions and let me know if there's anything you want me to explain."],
          tutExpAgain: [0,0,""],
          tutExpDclass: ["d class are bad"],
          tutExpDrones: ["drones are good"],
          tutExpSitemap: ["mmmm big site"],
          tutExpServer: ["server goes bzzz"],
          tutExpCold: ["pissed:Uhhhh.... no.","You don't get off that easily."],
          tutExpColder: ["disgusted:Maitreya, please.","Let me explain at least one thing to you."],
          tutExpColdest: ["angry:Okay, you're definitely not taking this seriously.","pissed:Let me pass you back to Dr. Breach.","m:No no no no no!"],
        },
        maitreya: {
          alexHello: ["Hello?"],
          holdHorses: ["a:Request instructions.","Tell me what I need to do to complete Breach's task.",-1],
          alexHello1: ["Only good things, I hope?"],
          alexHello2: ["Like what?"],
          alexImpatient: ["s:I don't have the patience for small talk.","I really don't have the patience for small talk.",-1],
          tut2: ["s:I could use a hand.","If you could lend me a helping hand, I'd very much appreciate it."],
          tutTest: ["s:I already know what I'm doing.","Thanks for the offer, but I'm an AIC as well -- I know how to work a Site."],
          tut2_: ["a:Proceed with the tutorial and refuse the test.","Um, on second thought, I feel like I could use a few pointers."],
          tutTest1: ["a:Skip the tutorial by taking the test.","Ready!",-3],
          tutTestFail: ["s:S1.","Is it S1?",2],
          tutTestPass: ["s:S1.","D-68134 is in S1.",4],
          tutTestFail_: ["s:S2.","Is it S2?",2],
          tutTestPass_: ["s:S2.","D-68134 is in S2.",4],
          tutTestFail__: ["s:S3.","Is it S3?",2],
          tutTestPass__: ["s:S3.","D-68134 is in S3.",4],
          tutTestFail___: ["s:S4.","Is it S4?",2],
          tutTestPass___: ["s:S4.","D-68134 is in S4.",4],
          tutTestFail____: ["s:S5.","Is it S5?",2],
          tutTestPass____: ["s:S5.","D-68134 is in S5.",4],
          tutTestFail_____: ["s:S6.","Is it S6?",2],
          tutTestPass_____: ["s:S6.","D-68134 is in S6.",4],
          tut6: ["Done reading.",1],
          tutIssue: ["Is there something wrong with the file?",-1],
          tut7: ["Got it."],
          tutProtocol: ["Why's that?",1],
          null: ["a:Say nothing.",0,0,""],
          tutProtocol2_SKIP: ["You don't have a mind of your own?",1],
          tutSlowNot: ["s:I've got it, don't worry!","Obviously?",-1],
          tutSlow2: ["Could you give me a helping hand?",-1],
          tutSlowNotFail: ["s:I've got it, don't worry!","Obviously?",-2],
          tutSlow2Fail: ["Could you give me a helping hand?"],
          tutMind2: ["s:Can you think for yourself?","Can you think for yourself?","Do you have free will?","Do you have your own thoughts beyond what you do?"],
          tutRebel: ["s:Why do you obey the Foundation?","Why do you obey the Foundation?","What motivates you to follow orders?","Are you ever tempted to... rebel?",1],
          tutMindAbort: ["s:Don't worry about it.","It's fine. Don't worry about it.",-1],
          tutMind3: ["s:Yes, I am.","Yeah, I think I am."],
          tutMind3_: ["s:No, I'm not.","Yeah, I think I am."],
          tutRebel2: ["a:Press her for more information.","Is it worth it? Really?",1],
          tutContinue__: ["a:Don't press her.","That's fair."],
          tutAbort: ["a:Press her harder.",-3],
          tutRebelCont: ["a:Back off.","Okay, okay. I believe you."],
          tutExpDclass: ["s:\"D-Class Requisition\"?","Could you explain \"D-Class Requisition\"?"],
          tutExpDrones: ["s:\"Drone Control\"?","Could you explain \"Drone Control\"?"],
          tutExpSitemap: ["s:\"Site Map\"?","Could you explain \"Site Map & Individual Room Functions\"?"],
          tutExpServer: ["s:\"Main Server Access\"?","Could you explain \"Main Server Access\"?"],
          tutExpCold: ["s:Actually, we're good.","Actually, we're good.","Nothing to explain.",-1],
          tutExpDclass_: ["s:\"D-Class Requisition\"?","Could you explain \"D-Class Requisition\"?"],
          tutExpDrones_: ["s:\"Drone Control\"?","Could you explain \"Drone Control\"?"],
          tutExpSitemap_: ["s:\"Site Map\"?","Could you explain \"Site Map & Individual Room Functions\"?"],
          tutExpServer_: ["s:\"Main Server Access\"?","Could you explain \"Main Server Access\"?"],
          tutExpCold_: ["s:Actually, we're good.","Actually, we're good.","Nothing to explain.",-1],
          tutExpColder: ["s:Actually, we're good.","No really, we're good.","You don't need to explain anything.",-1],
          tutExpColdest: ["s:Actually, we're good.","Seriously. I've got this covered.",-1],
          tutExpWarm: ["s:Actually, we're good.","Actually, I think we're good.","You've covered everything I need to know."],
          tutExpHot: ["s:Actually, we're good.","I think you've covered everything pretty conclusively.",1],
        },
      },

		};
		loop.breachLoop = function(bigSection,smallSection,msg) {
			smallSection = smallSection.replace(/_*$/g,"");
			var delay = 0;
			switch(bigSection) {
				case "INTRODUCTION":
					switch(smallSection) {
						case "start":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"helloNormal",
										"helloInquisitive",
										"helloDiagnostic"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "startSkipped":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"helloNormal_",
										"helloInquisitive_",
										"helloDiagnostic_"
									]);
									aic.vars.messagesEmphasis = true;
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "helloInquisitive":
							aic.vars.messagesEmphasis = false;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"knowNormal",
										"knowPatronising",
										"knowNot"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "knowPatronising":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"explain1");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "knowNormal":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"explain1_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "knowNot":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"knowActually",
										"knowNotNot"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "knowActually":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"explain1__");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "knowNotNot":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"knowNormal_",
										"knowNotNotNot"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "knowNotNotNot":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"knowNormal__",
										"pissOff"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "pissOff":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.endingLoop("ENDING","pissOff");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "helloNormal":
							aic.vars.messagesEmphasis = false;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"explain1___");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "helloDiagnostic":
							aic.vars.messagesEmphasis = false;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"helloNotYet"
									]);
									aic.vars.breachMentionedAlexandra = true;
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "helloNotYet":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"explain1____");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "explain1":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"explainApo",
										"doKnow"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "doKnow":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"yesSkip",
										"noSkip"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "yesSkip":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"PROCEED");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "noSkip":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"explain2");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "explain2":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"pInitiative",
										"pIncredulous"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "pIncredulous":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"explain3");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "pInitiative":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"explain3_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "explain3":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"goNoAsk",
										"goAsk",
										"goNo"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "goNo":
							aic.vars.breachExplainedVoice = true;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"goNoAsk_",
										"goAsk_",
										"pissOff_"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "explainApo":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"explain2_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "goNoAsk":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"letsGo");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "goAsk":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"askIS12",
										"askScp4000",
										"askSelf",
										"askTask",
										"askBreach",
										"noQuestions"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "askName":
							aic.vars.hasAskedName = true;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askAgain");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "noQuestions":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"letsGo_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "noQuestionsKnown":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"letsGoKnown");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "askAgain":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										!aic.vars.hasAskedSite12 ? "askIS12_" : void 0,
										!aic.vars.hasAsked4000 ? "askScp4000_" : void 0,
										!aic.vars.hasAskedDeath && !!aic.vars.hasAsked4000 ? "askDeath" : void 0,
										!aic.vars.hasAskedSelf ? "askSelf_" : void 0,
										!aic.vars.hasAskedTask ? "askTask_" : void 0,
										!aic.vars.hasAskedBreach ? "askBreach_" : void 0,
										!!aic.vars.breachExplainedVoice && !aic.vars.hasAskedVoice ? "askVoiceAgain" : void 0,
										!aic.vars.breachExplainedVoice && !aic.vars.hasAskedVoice ? "askVoice" : void 0,
										!aic.vars.hasAskedName && !!aic.vars.hasAskedSite12 && !!aic.vars.hasAsked4000 && !!aic.vars.hasAskedSelf && !!aic.vars.hasAskedTask && !!aic.vars.hasAskedBreach ? "askName" : void 0,
										!aic.vars.hasAskedTask ? "noQuestions_" : void 0,
										!!aic.vars.hasAskedTask ? "noQuestionsKnown" : void 0
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "askIS12":
							aic.vars.hasAskedSite12 = true;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askAgain_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "askScp4000":
							aic.vars.hasAsked4000 = true;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askAgain__");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "askSelf":
							aic.vars.hasAskedSelf = true;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"askSelf2",
										"askAgain___"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "askTask":
							aic.vars.hasAskedTask = true;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askAgain____");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "askBreach":
							aic.vars.hasAskedBreach = true;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askAgain_____");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "askDeath":
							aic.vars.hasAskedDeath = true;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askAgain______");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "askSelf2":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"askSelf3",
										"unAskSelf3"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "askSelf3":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"askSelf4",
										"unAskSelf4"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "askSelf4":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"askSelf5",
										"unAskSelf5"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "askSelf5":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askSelf6");
									aic.endingLoop("ENDING","pissOff");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "askSelf6":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "unAskSelf5":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askAgain_______");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "unAskSelf4":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askAgain________");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "unAskSelf3":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askAgain_________");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "askVoice":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askVoiceExp");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "askVoiceAgain":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askVoiceExp_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "askVoiceExp":
							aic.vars.hasAskedVoice = true;
							aic.vars.breachExplainedVoice = true;
							aic.vars.breachExplainedTyping = true;
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"askAgain__________");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "letsGo":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"letsGoExplain");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "letsGoKnown":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"letsGoExplain_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "letsGoExplain":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										!aic.vars.breachMentionedAlexandra ? "letsGo2" : void 0,
										!!aic.vars.breachMentionedAlexandra ? "letsGo2wA" : void 0
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "letsGo2":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"letsGo3");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "letsGo2wA":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"letsGo3_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "letsGo3":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										aic.vars.people.breach.opinion<1 ? "letsGo4Dislike" : void 0,
										aic.vars.people.breach.opinion>0 ? "letsGo4Like" : void 0
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "letsGo4Dislike":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop("TUTORIAL","preload");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "letsGo4Like":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.breachLoop(bigSection,"connectCheck");
									aic.alexandraLoop("TUTORIAL","preload");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "connectCheck":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("breach",bigSection,[
										"connectCheck2"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "connectCheck2":
							delay = aic.writeDialogue("breach",msg,"breach",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "null":
							break;
						default:
							throw new Error("Breach " + smallSection + " is not an event in " + bigSection);
					}
					break;
				case "UNDEFINED":
					switch(smallSection) {
						case "null":
							break;
						default:
							throw new Error("Breach " + smallSection + " is not an event in " + bigSection);
					}
					break;

				
				default:
					throw new Error(bigSection + " is not an event");
			}
		};
		loop.alexandraLoop = function(bigSection,smallSection,msg) {
			smallSection = smallSection.replace(/_*$/g,"");
			var delay = 0;
			switch(bigSection) {
				case "TUTORIAL":
					switch(smallSection) {
						case "preload":
							aic.preloadAlexandraFaces();
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"connect");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "connect":
							aic.switchSpeaker("alexandra");
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"alexHello",
										"holdHorses"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "holdHorses":
							aic.vars.alexHeldHorses = true;
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"alexHello_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "alexHello":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"alexHello1",
										"alexHello2",
										!!aic.vars.alexHeldHorses ? "alexImpatient" : void 0
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "alexHello1":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tut1");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "alexImpatient":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tut1_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "alexHello2":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tut1__");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tut1":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"tut2",
										"tutTest"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tutTest":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"tut2_",
										"tutTest1"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tut2":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tut3");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutTest1":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										aic.vars.d68134.location!=="s1" ? "tutTestFail" : void 0,
										aic.vars.d68134.location==="s1" ? "tutTestPass" : void 0,
										aic.vars.d68134.location!=="s2" ? "tutTestFail_" : void 0,
										aic.vars.d68134.location==="s2" ? "tutTestPass_" : void 0,
										aic.vars.d68134.location!=="s3" ? "tutTestFail__" : void 0,
										aic.vars.d68134.location==="s3" ? "tutTestPass__" : void 0,
										aic.vars.d68134.location!=="s4" ? "tutTestFail___" : void 0,
										aic.vars.d68134.location==="s4" ? "tutTestPass___" : void 0,
										aic.vars.d68134.location!=="s5" ? "tutTestFail____" : void 0,
										aic.vars.d68134.location==="s5" ? "tutTestPass____" : void 0,
										aic.vars.d68134.location!=="s6" ? "tutTestFail_____" : void 0,
										aic.vars.d68134.location==="s6" ? "tutTestPass_____" : void 0
									]);
									aic.timers.alexandra = $timeout(function() {aic.alexandraLoop("TUTORIAL","tutTestMinute")},60000,true);
									aic.unlock("database");
									aic.unlock("run");
									aic.vars.tookTest = true;
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tutTestFail":
							$timeout.cancel(aic.timers.alexandra);
							aic.lock("database");
							aic.lock("run");
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tut2__");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutTestPass":
							$timeout.cancel(aic.timers.alexandra);
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"SKIP");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutTestMinute":
							aic.presentOptions("alexandra","TUTORIAL","CLEAR");
							aic.lock("database");
							aic.lock("run");
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tut3_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tut3":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tut4");
									aic.unlock("database");
									aic.timers.alexandra = $timeout(function() {aic.alexandraLoop("TUTORIAL","tutSlow")},20000,true);
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tut4":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.vars.waitingForRead4000 = true;
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tut5":
							$timeout.cancel(aic.timers.alexandra);
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"tut6",
										"tutIssue"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tutIssue":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tut6_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tut6":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"tut7",
										"tutProtocol"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tutProtocol":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"null",
										"tutProtocol2_SKIP"
									]);
									aic.alexandraLoop("TUTORIAL","tut7");
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tutSlow":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										!aic.vars.tookTest ? "tutSlowNot" : void 0,
										!aic.vars.tookTest ? "tutSlow2" : void 0,
										!!aic.vars.tookTest ? "tutSlowNotFail" : void 0,
										!!aic.vars.tookTest ? "tutSlow2Fail" : void 0
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tutSlowNotFail":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutSlow2Fail":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutSlow3");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutSlowNot":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutSlow2":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutSlow3_");
									aic.vars.databaseEmphasis = true;
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutSlow3":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tut7":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tut8");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutProtocol2_SKIP":
							aic.isSkipping.alexandra = ["alexandra","TUTORIAL","tutMind1"];
							aic.blacklist.add(["tut7","tut8"]);
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutMind1":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"tutMind2",
										"tutRebel",
										"tutMindAbort"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tut8":
							aic.presentOptions("alexandra","TUTORIAL","CLEAR");
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tut9");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutMind2":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"tutMind3",
										"tutMind3_"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tutMind3":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutContinue");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutMindAbort":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutContinue_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutContinue":
							aic.blacklist.remove(["tut7","tut8"]);
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tut7_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutRebel":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"tutRebel2",
										"tutContinue__"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tutRebel2":
							aic.vars.alexCanRebel = true;
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"tutAbort",
										"tutRebelCont"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tutRebelCont":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutContinue___");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutAbort":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"PROCEED_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "emotiontest":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tut9":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutExp");
									aic.unlock("run");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutExp":
							aic.vars.hasExpedCount = 0;
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										"tutExpDclass",
										"tutExpDrones",
										"tutExpSitemap",
										"tutExpServer",
										"tutExpCold"
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tutExpAgain":
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.presentOptions("alexandra",bigSection,[
										!aic.vars.hasExpedDclass ? "tutExpDclass_" : void 0,
										!aic.vars.hasExpedDrones ? "tutExpDrones_" : void 0,
										!aic.vars.hasExpedSitemap ? "tutExpSitemap_" : void 0,
										!aic.vars.hasExpedServer ? "tutExpServer_" : void 0,
										aic.vars.hasExpedCount === 0 && !aic.vars.hasExpedCold ? "tutExpCold_" : void 0,
										aic.vars.hasExpedCount === 0 && !!aic.vars.hasExpedCold && !aic.vars.hasExpedColder ? "tutExpColder" : void 0,
										aic.vars.hasExpedCount === 0 && !!aic.vars.hasExpedCold && !!aic.vars.hasExpedColder && !aic.vars.hasExpedColdest ? "tutExpColdest" : void 0,
										aic.vars.hasExpedCount !== 0 && aic.vars.hasExpedCount < 4 ? "tutExpWarm" : void 0,
										aic.vars.hasExpedCount === 4 ? "tutExpHot" : void 0
									]);
								} else { reportBlacklisted(smallSection) }
							},delay*1000 + aic.maitreyaDelay*1000, true);
							break;
						case "tutExpDclass":
							aic.vars.hasExpedDclass = true;
							aic.vars.hasExpedCount++;
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutExpAgain");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutExpDrones":
							aic.vars.hasExpedDrones = true;
							aic.vars.hasExpedCount++;
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutExpAgain_");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutExpSitemap":
							aic.vars.hasExpedSitemap = true;
							aic.vars.hasExpedCount++;
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutExpAgain__");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutExpServer":
							aic.vars.hasExpedServer = true;
							aic.vars.hasExpedCount++;
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutExpAgain___");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutExpCold":
							aic.vars.hasExpedCold = true;
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutExpAgain____");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutExpColder":
							aic.vars.hasExpedColder = true;
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"tutExpAgain_____");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "tutExpColdest":
							aic.vars.hasExpedColdest = true;
							delay = aic.writeDialogue("alexandra",msg,"alexandra",smallSection);
							$timeout(function() {
								if(!aic.blacklist.includes(smallSection)) {
									aic.alexandraLoop(bigSection,"BREACH: COMPLAINTS");
								} else { reportBlacklisted(smallSection) }
							},delay*1000);
							break;
						case "null":
							break;
						default:
							throw new Error("Alexandra " + smallSection + " is not an event in " + bigSection);
					}
					break;
				case "UNDEFINED":
					switch(smallSection) {
						default:
							throw new Error("Alexandra " + smallSection + " is not an event in " + bigSection);
					}
					break;

				
				default:
					throw new Error(bigSection + " is not an event");
			}
		};












	}
	
})();
