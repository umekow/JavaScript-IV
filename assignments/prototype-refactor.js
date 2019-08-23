/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/



/************************code from previous assignment******************************/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`

function GameObject(attr){
    this.createdAt= attr.createdAt,
    this.name = attr.name;
    this.dimensions = attr.dimensions; 
    
  }
  GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`; 
  }
*/

  class GameObject{
    constructor(attr){
        this.createdAt = attr.createdAt, 
        this.name = attr.name, 
        this.dimensions = attr.dimensions
    }

    destroy() {
        return `${this.name} was removed from the game.`; 
    }
  }
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
 
  ===Old Code===
  function CharacterStats(attr){
    GameObject.call(this, attr); 
    this.healthPoints = attr.healthPoints; 
  }
  CharacterStats.prototype = Object.create(GameObject.prototype); 
  CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`; 
  }
  
  */ 

  class CharacterStats extends GameObject{
      constructor(attr){
          super(attr); 
          this.healthPoints = attr.healthPoints; 
      }

      takeDamage() {
        return `${this.name} took damage.`;  
      }
      
  }
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  
  function Humanoid(attr) {
    CharacterStats.call(this, attr); 
    this.team = attr.team; 
    this.weapons = attr.weapons; 
    this.language = attr.language; 
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`; 
  }
  */

  class Humanoid extends CharacterStats{
      constructor(attr){
        super(attr);  
        this.team = attr.team;
        this.weapons = attr.weapons;
        this.language = attr.language;
      }
     
      greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
      }
  }
  
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    /*
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    function Villian(attr) {
      Humanoid.call(this, attr); 
      this.motive = attr.motive; 
      this.power = attr.power; 
      this.weakness = attr.weakness; 
    }
    
  Villian.prototype = Object.create(Humanoid.prototype);
    Villian.prototype.say_victory_speech = function () {
      return `${this.name}: Haha!! I finally achieve my dream of ${this.motive}! Prepare to die,!! \n ${this.name} begins to walk toward s battered body.` ; 
    }
  
    function Hero(attr){
      Humanoid.call(this, attr); 
      this.last_minute_luck = attr.last_minute_luck; 
    }
    Hero.prototype = Object.create(Hero.prototype); 
    Hero.prototype.have_last_minute_luck = function(){
      console.log(`${this.name} realizes that the ${this.weapon} his father gave him was the secret weapon that can kill `); 
    }
  
  
  
    
  
    function game(){
      
      const choice= prompt('Welcome to The Story of NoSinse: The Tale of The Edeot Stone \nSo do you want to be the villian or hero of this story? (type in "Hero" or "Villian")'); 
      const username = prompt("What is your username?"); 
      let player_type; 
      if (choice.toLowerCase() === "hero"){
         this.player_type = new Hero({
          createdAt: new Date(),
          dimensions: {
            
            height: 6,
          },
          healthPoints: 100,
          name: username,
          team: 'Your friends abandoned you after you lost your job',
          weapons: [
            "an uncool amulet from your father", 
            "raggedy sword from pawn shop"
          ],
          language: 'English',
        });
       
        hero_version();
  
      } else{
        this.player_type = new Villian({
          createdAt: new Date(),
          dimensions: {
            
            height: 3,
          },
          healthPoints: 100,
          name: username,
          team: 'You are too egotistical to work on a team',
          weapons: [
            'Demon sword', 
            'Toy Chicken', 
            'Dark Elf Staff'
          ],
          language: 'English',
          motive: "world domination", 
          power: ["stealing"], 
          weakness: "severe allergy to metal and peanuts"
        });
  
     
  
          villian_version(); 
      }
  
   
  
    }
  
    function hero_version(){
  
    
      alert(`As you were reading an email from your boss, your girlfriend sat down next to you. She saw the worried expression on your face and asked, "What's wrong?" You wanted to cry at that moment, but sighed instead. "Babe, I was fired for using the company car to get here'. The young lady replied, "Oh...well.." Before she could say another word, a man in a dingy robe appeared in front of you. "Come my child!! Join my evil army and...." Thinking he was just some lunatic who watched too much TV, you interrupted him to tell him no. The man stood there for awhile then grabbed your girlfriend's arm. "Either you will have to kill me or join my army to save her!!!" The strange man chanted a spell then your girlfriend and the man disappeared.`);
      const choice1 = prompt("An accomplish warrior heard about your problem. He is offering to train you, how long will you train before attempting to rescue your gf?\n 1: 5 weeks\n 2: 5 months\n 3: 5 years (1 - 3)"); 
      if (choice1 === "1"){
        console.log(`You chose to train for 5 weeks.`); 
        alert(`Your new mentor urged you to train longer, but your love for your girlfriend kept nudging you to fight now. When you arrived at the villian's castle, you rush in to stab him with a dagger. You miss. The villian knocks you out with a candlestick. Your girlfriend tries to escape while the villian was distracted. The villian captures her again then feeds both of you to a pack of wolves.`); 
        
        //player dies
        console.log(this.player_type.destroy()); 
      }else if(choice1 === "2"){
        console.log(`You chose to train for 5months.`); 
        alert(`You cannot believe how strong you are after training with your mentor. The villian has acquired new skills as well. He chants a spell that reverses the strength you gained in the last 5 months. You say your prayers as he walks over to you. As he says his victory speech, you remember the amulet around your neck. Your father gave it to you as a gift. It is called "The Edeot stone". He said it has special powers that will save your life someday.`) ;
        const choice2 = prompt(`What do you want to do with the edeot stone?\n 1:Say, "Edeot stone serve your master!"\n 2:Throw the stone at the villian`); 
        
      }else if(choice1 === "3"){
        console.log(`You chose to train for 5 years.`); 
        alert(`You train hard for 5 years. So hard, that your biceps are 14 times bigger than they were before. You were able to win the battle by punching the villian several times in the chest. You were so fast that he could not chant his spells fast enough. You save your girlfriend, but she hates you now. She says you took too long to save her. She informs you that she is pregnant by the villian and you have made a single mother.`); 
  
         
      }else{
        console.log("you wasted your time because you entered an invalid input"); 
        
      }
      
      
    }
  
  
    function villian_version(){
      alert(`You need an army to achieve ${this.player_type.motive}. You are walking in circles until a light bulb appears above your head. You think to yourself, "I should go and convince my master's son to be the first member of my army." You chant a spell that grants you the ability to appear infront of anyone if you know their name. Although your master's son looks like he has never fought a day in his life, you demand him to join your army anyway. When he refuses, you kidnap his girlfriend and hold her captive in a dungeon. Your assistant tells you that he has heard a rumour about the boy training with an accomplished warrior to save his girlfriend. `);
    
      const choice1 = prompt("What will you do to prepare for the battle\n 1: Read some old ancient textbooks that have been collecting dust\n 2:Train your military as hard as you can\n (1 or 2)"); 
    
      if (choice1 === "1"){
        console.log(`You chose to read some old ancient textbooks that have been collecting dust.`); 
        alert("Nice! You acquired a new power: advanced dark magic"); 
        //adds new item to power property
        this.player_type.power.push(" advanced dark magic")
        alert(`Your current powers: ${this.player_type.power}`); 
        alert("The young man stabbed you in the chest.");
        //take damage
        console.log(this.player_type.takeDamage());
  
        alert(`You chuckle before you chant the spell you learned from one of your ancient textbooks. You gain twice the healthPoints that you lost. The boy tries to run away after seeing your flesh regenerate before his eyes. You wave your fingers in a circular motion while chanting another spell. When you closed your mouth, black fire consumed your enemy. After looking at the boy's ashes, you think, "Okay, What should I do next?"`); 
      }else if(choice1 === "2"){
        console.log(`You chose to train your military as hard as you can.`); 
        alert(`The boy becomes stronger than you ever anticipated and you never had a military to begin with. Your assistant flees from the battle along with all of you weapons. You die from one blow. Thankfully the woman you kidnapped now has stockholm syndrome. She tells you she loves you and will remember you in her heart. You finally accomplished something in your life.`); 
  
        console.log(this.player_type.destroy()); 
      }else{
        console.log("you wasted your time because you entered an invalid input"); 
      }
    }
  game();
  
  */