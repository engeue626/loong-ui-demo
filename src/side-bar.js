import {bindable, decorators} from 'aurelia-framework';
import $ from 'jquery'
import {toHtmlTagFormat} from 'lib/html-tag-format'

export let SideBar = decorators(bindable('router')).on(class {
	static inject = [Element];

	isSidebarCollapsed = false;

	items  = [
		{
			"name": "Table", 
			"icon": "fa-server", 
			"href": "#", 
			"collapsed": true,
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
			"icon": "fa-taxi", 
			"href": "#/button"
		},
		{
			"name": "Datapicker", 
			"icon": "fa-cloud-download", 
			"href": "#/buttons"
		},
		{
			"name": "Dropdown", 
			"icon": "fa-university", 
			"href": "#/dropdown"
		},
		{
			"name": "Form", 
			"icon": "fa-wpforms", 
			"href": "#/form"
		},
		{
			"name": "Grid", 
			"icon": "fa-rebel", 
			"href": "#/grid"
		},
		{
			"name": "Inputs", 
			"icon": "fa-github", 
			"href": "#/input"
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

	onCollapseItem(item) {
		if (this.isSidebarCollapsed) {
			return;
		}	
		item.collapsed = !item.collapsed;
		this.collapseItem(item);
	}

	collapseItem(item) {
		var id = toHtmlTagFormat(item.name);
		var subItems = $(this.element).find("#" + id);
		if (item.collapsed) {
			$(subItems).prev().removeClass("long-sidebar-submenu-collapsed");
			$(subItems).prev().addClass("long-sidebar-submenu");
		} else {
			$(subItems).prev().removeClass("long-sidebar-submenu");
			$(subItems).prev().addClass("long-sidebar-submenu-collapsed");
		}
	}

	onSidebarCollapse() {
		// collapse all subitems
		for (var i in this.items) {
			if (this.items[i].collapsed != null && !this.items[i].collapsed) {
				this.items[i].collapsed = true;
				this.collapseItem(this.items[i]);
			}
		}
		this.isSidebarCollapsed = !this.isSidebarCollapsed;
	}
});