var person = 
{
    fname: "Joseph",
    lname: "Mathew",
    age: 37,

    getAge: function()
    {
        return this.age;
    },
    
    getFirstName: function()
    {
        return this.fname;
    },

    getLastName: function()
    {
        return this.lname;
    },

    getName: function()
    {
        return this.fname + " " + this.lname;
    },
};

Object.prototype.greet = function()
{
    console.log("Hello " + this.fname + " !!");
}

function createObject()
{
    console.log( person.getFirstName() );
    console.log( person.getLastName() );
    console.log( person.getName() );
    console.log( person.getAge() );
    person.greet();
    console.log(person.toString());

    // Another way to create person object
    var newPerson = new Object();
    newPerson.fname = "Radhika";
    newPerson.lname = "Joshi";
    newPerson.age = 32;
    newPerson.getAge = function() 
    {
        return this.age;
    }
    newPerson.getFirstName = function() 
    {
        return this.fname;
    }


    console.log(newPerson.getAge());
    console.log(newPerson.getFirstName());
    newPerson.greet();

    // Object.create
    var createdPerson = Object.create(person)
    console.log(createdPerson.getName());
    createdPerson.greet();

    console.log( Object.getPrototypeOf(createdPerson) == person );
    console.log( createdPerson.__proto__.__proto__ == person.__proto__ );
}

createObject();

function constrFunc()
{
    function Person() 
    {
        this.fname = "Joseph";
        console.log(this);

    }

    function Person2( name ) 
    {
        this.fname = name;
        console.log(this);

    }

    Person.prototype.greet = function()
    {
        console.log("Hello Constructor");
    }

    var constrPerson = new Person();
    var constrPerson2 = new Person2("Pappu");

    constrPerson.greet();
    console.log( constrPerson.__proto__ == Person.prototype);
    console.log( constrPerson instanceof Person );
    console.log( constrPerson.fname );
    console.log( constrPerson2.fname );
}

constrFunc();

function bindApplyCall()
{
    function func( message )
    {
        console.log(this + " : " + message);
    }

    //func();

    var functObj = 
    {
        objFunc: func
    }

    var newPerson = 
    {
        name: "Joseph"
    }

    functObj.objFunc("SimpleHello");
    functObj.objFunc.bind(this, "BindHello")();
    functObj.objFunc.bind(newPerson, "BindHello")();
    functObj.objFunc.call(newPerson, "CallHello");
    functObj.objFunc.apply(newPerson, ["ApplyHello"]);
}

bindApplyCall()

function defineProp()
{
    var account =
    {
        cash: 1200,
        _holder: "Joseph",
        withdraw: function(amount)
        {
            if( amount <= this.cash )
            {
                this.cash -= amount;
                console.log( this.accNum + ": $" + amount + " withdrawn from account. Cash remaining = $" + this.cash );
            }
            else
            {
                console.log(this.accNum + ": Cannot withdraw $" + amount + " from the account. Cash remaining = $" + this.cash );
            }
        }
    }

    Object.defineProperty( account, 'holder',
    {
        get: function()
        {
            return this._holder;
        },
        set: function( holder )
        {
            this._holder = holder;
        }
    }
    );

    Object.defineProperty( account, 'deposit',
    {
        value: function(amount)
        {
            this.cash += amount;
            console.log( this.accNum + ": $" + amount + " deposited into the account. Cash remaining = $" + this.cash );
        },
        writable: false,
        enumerable: false
    }
    );

    Object.defineProperty( account, 'accNum',
    {
        value: "ID03-001",
        writable: true,
        enumerable: false
    }
    );
    
    console.log(account.holder);

    account.accNum = "ID003-02";
    account.holder = "Radhika"; 

    account.withdraw(100);
    account.deposit(1000);
    account.withdraw(100);
    console.log(account.holder);

    //console.log('_holder' in account);
    //delete account._holder;
    //console.log('_holder' in account);
    console.log(account);    

}

defineProp();