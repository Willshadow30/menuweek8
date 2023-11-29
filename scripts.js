class Hero{ /// class is basically a template for objects.  
    constructor(name,role){ /// A constructor function, allows useres to create multiple objects from the same template
        this.name = name;   /// the word 'this' is a keyword that is use to refer to an object that is contained in a method.
        this.role = role;
    }
    describe(){ /// function that let users group test cases together
     return `${this.name} plays ${this.role}`;   /// the keyword 'return' is a statment that ends the function, exectuion its and return specfic vaules.
    }
}
    class Guilds{ // second class
        constructor(name){
            this.name = name
            this.heroes = [] /// an array is can store multiple values and elements. remeber that arrays are zero indexed. start from zero. 
        }
        addhero(hero){/// "add an element to a specfic object"
          if(hero instanceof Hero){ ///  if and else are statments use to define expressions and runs them. If will only work if statement is true, else will work only work if the statement is false.
           this.heroes.push(hero) ///  push adds a new item to an array. Keep in mind that item will appear at the end of an array
          }  else{
                throw new Error(`You can only add the instance of a Hero. SHODAN is not a hero:${hero}`); /// the throw statement will stop any fuction that is currently working and cause an expection or error.
          }
          
        }
        describe(){
            return`${this.name}  has ${this.heroes.length}heroes.`; /// length is a property that returns number of elements that are in an array
        }          /// ${' '} syntax  is known as template literals evalute your expressions dynamically.
    }
        class Menu{
            constructor(){
                this.guilds =[]; /// array
                this.selectedGuild = null  /// null a variable that stands for absolute nothing.
            }
            start(){ // function that allows the menu to run 
                let selection = this.showMainMenuOptions();
                while(selection != 0){ // != inequality operator, not strict, so it can compare as well as convert different types of all that "wonderful math" stuff
                    switch(selection){ /// the switch statment is almost simliar to an if else statment, however with switch statement it compares a single vaule to muliple values. easier to write and and read.
                        case'1' : /// switch statment will check each value and will run if true.
                        this.createAGuild();
                        break;/// break out of switch statment
                        case'2' :
                        this.viewAGuild();
                        break;
                        case'3' :
                        this.deleteAGuild();
                        break;
                        case'4' :
                        this.displayAGuild();
                        break;
                        default: /// will only run if any cases turn out to be false.
                            selection = 0;
                    }
                   selection = this.showMainMenuOptions(); 
                }
                   alert('The cake is a lie') /// similar to prompt and confirm its a message  modal(stops user from using website till they deal with it) sidenote- portal reference yay! :) 
            }
                showMainMenuOptions(){/// this 4 options  will show up on the main menu
                    return prompt(`    
                    0) exit
                    1) create a new guild
                    2) view a guild
                    3) delete a guild
                    4) display a guild
                    `);
                }
                    showGuildMenuOptions(guildsInfo){ 
                        return prompt(`
                        0) cancel
                        1) add a member
                        2) remove a member
                        ----------------
                        ${guildsInfo}    
                        `);
                    }
                    displayAGuild(){
                        let guildString = '';
                        for(let i = 0; i < this.guilds.length; i++){ /// for loop which contains three expressions, init, condition, and final expression. A loop runs the same expression multiple times.
                            guildString += i+ ') ' + this.guilds[i].name + '\n';
                        }
                        alert(guildString);
                    }
                     createAGuild(){
                        let name = prompt('Enter a name for your Guild:');
                        this.guilds.push(new Guilds(name));
                     }
                    
                     viewAGuild(){
                        let index = prompt("Enter the index of the guild you want to view:");
                        if(index > -1 && index < this.guilds.length){ // && and expression, > greater than oper < less than oper 
                            this.selectedGuild = this.guilds[index];
                            let description = 'Guild Name: ' + this.selectedGuild.name + '\n';
                            description += ' ' + this.selectedGuild.describe() + '\n';
                            for (let i = 0; i < this.selectedGuild.heroes.length; i++){
                            description += i + ') ' + this.selectedGuild.heroes[i].describe() +'\n';
                            }
                            let section1 = this.showGuildMenuOptions(description);
                            switch (section1){
                                case '1' :
                                    this.createHero();
                                    break;
                                    case '2' :
                                        this.deleteHero();
                            }
                        }
                        
                    
                    }           deleteAGuild(){
                                let index = prompt('Enter the index of a guild that you want to delete:');
                                if(index > -1 &&  index< this.guilds.length){
                                this.guilds.splice(index,1);    
                                }
                            }
                    
                            createHero(){
                                let name = prompt('Enter the name for your new hero:');
                                let role = prompt('Enter a role for your new hero');
                                this.selectedGuild.addHero(new Hero(name,role));
                            }
                            deleteHero(){
                                let index = prompt('Enter the index of your hero that you wish to delete:');
                                if(index > -1 && index < this.selectedGuild.heroes.length){
                                    this.selectedGuild.heroes.splice(index,1)////splice method, returns a new array that is made up of elements that was either added or removed from the orginal array.
                                }
                            }
                        }
                        let menu = new Menu();
                        menu.start();
                    
                       
       

    