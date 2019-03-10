
/// object test1
var o1 = {
    /// prop one
    one: 1,
    /// prop two
    propTwo: "propTwo"
};

/// object test1
var o2 = Object.freeze({
    /// prop one
    one: 1,
    /// prop two
    propTwo: "propTwo"
});

var foo = function (a) { };

// This should NOT work.
var fooNOT = function (aNOT) { };

/// This should work 2.
var foo2 = function (a2) { };

/// <summary>
/// This should NOT work 2.
/// </summary>
var fooNOT2 = function (aNOT2) { };

var foo3 = function (a3)
{
    /// <summary>
    /// This should work 3.
    /// </summary>
};

/// This should NOT work 4.
var foo4 = function (a4)
{
    /// <summary>
    /// This should work 4.
    /// </summary>
};


/// json test object
var jsonObject = {
    /// prop one
    one: "one",
    /// prop two
    propTwo: "propTwo"
};

//type a dot after json object and tern will get properties
jsonObject

function TestFn(a, b, c, useSum, p1)
{
    /// <summary>
    /// Description of this fn
    /// </summary>
    /// <param name="a" type="number" integer="true">first number</param>
    /// <param name="b" type="number" integer="false">second number</param>
    /// <param name="c" type="number" optional="true">third number to include</param>
    /// <param name="useSum" type="bool" optional="true">pass true to use sum instead of product</param>
    /// <param name="p1">Test.</param>
    /// <returns type="number">the product of the passed parameters</returns>

    if (useSum === true)
    {
        if (c) return a + b + c;
        return a + b;
    }
    if (c) return a * b * c;
    return a * b;
}

//place cursor inside of parenthesis to see argument hints
var tmp = TestFn(100, 200);

function TestObjectArg(obj)
{
    /// <summary>
    /// test function with object as argument and jsDoc comments that describe the object properties
    /// </summary>
    /// <param name="obj">
    /// Parameter Object.
    /// <br />boolProp: bool
    /// <br />arrayProp: array
    /// <br />stringProp: string
    /// </param>
    /// <returns></returns>

    if (typeof (obj) !== "object")
    {
        throw new Error("obj parameter is required and must be an object");
    }
    if (!obj.boolProp) {
        obj.boolProp = false;
    }
    if (!Array.isArray(obj.arrayProp)) {
        obj.arrayProp = [];
    }
    if (typeof(obj.stringProp) !== "string") {
        obj.stringProp = "default string";
    }
    return obj;
}

//place cursor inside of parenthesis to see advanced object arg hints from comments
TestObjectArg();
