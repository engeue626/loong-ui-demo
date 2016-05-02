export class TableRowValueConverter {
	toView(rows) {
	    return rows.map(function(row) {
	    	var newRow = new Object();
	    	newRow.isChecked = row.isChecked;
	    	newRow.value = Object.keys(row.value).map(function(key){return row.value[key]});
	    	return newRow;
	    });
	}
}