export class Ltable {
	
	name = "";

	heads = [];

	rows = [];

    constructor() {
        this.name = "Table";
        mockData(this);
    }

}

function mockData(that) {
    that.heads = ["#", "Property1", "Property2", "Property3", "Property4", "Action"];
    that.rows = [
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": true,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": true,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": true,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": true,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    },
    {
        "isChecked": false,
        "value": {"#":"1", "Property1": "p1-1", "Property2": "p1-2", "Property3":"p1-3", "Property4":"p1-4"}
    }
    ];
}
