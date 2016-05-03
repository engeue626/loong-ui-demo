import {bindable, decorators} from 'aurelia-framework';
import $ from 'jquery'
import {toHtmlTagFormat} from 'lib/html-tag-format'

export let SideBar = decorators(bindable('router')).on(class {
	static inject = [Element];

	items  = [
		{
			"name": "Table", 
			"icon": "fa-bars", 
			"href": "#", 
			"subItems": [
				{
					"name": "Table 1",
					"href": "#/table",
				},
				{
					"name": "Table 2",
					"href": "#/table",
				}				
			],
			"active": true
		},
		{
			"name": "Buttons", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		},
		{
			"name": "Datapicker", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		},
		{
			"name": "Dropdown", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		},
		{
			"name": "Form", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		},
		{
			"name": "Grid", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		},
		{
			"name": "Inputs", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		},
		{
			"name": "Notification", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		},
		{
			"name": "Sidebar", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		},
		{
			"name": "Tiles", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		},
		{
			"name": "Toolbar", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		},
		{
			"name": "Typography", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		}
	];

	currentItem = null;

	constructor(element) {
		this.router = null;
		this.element = element;
	}

	activeItem(item) {
		// item and current item might be sub item.
		if (this.currentItem) {
			this.currentItem.active = false;
		}
		item.active = true;
		this.currentItem = item;
	}

	collapse(item) {
		var id = toHtmlTagFormat(item.name);
		var subItems = $(this.element).find("#" + id);
		if ($(subItems).prev().hasClass("collapsed")) {
			$(subItems).prev().removeClass("long-sidebar-submenu-collapsed");
			$(subItems).prev().addClass("long-sidebar-submenu");
		} else {
			$(subItems).prev().removeClass("long-sidebar-submenu");
			$(subItems).prev().addClass("long-sidebar-submenu-collapsed");
		}
	}
});