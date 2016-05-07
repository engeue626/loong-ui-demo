import {bindable, decorators} from 'aurelia-framework';
import $ from 'jquery';

export let NavBar = decorators(bindable('router')).on(class {

	constructor() {
		this.router = null;
	}

	attached() {
		$('[data-toggle="popover"]').popover();
	}

	onFullScreen() {
		var elem = document.getElementById("long-main");
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen();
		}
	}
});