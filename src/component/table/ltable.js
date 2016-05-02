export class Ltable {
	
	name = "";

	heads = ["#", "Property1", "Property2", "Property3", "Property4", "Action"];

	rows = [
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
    }
    ];

    constructor() {
        this.name = "Table";
    }
}