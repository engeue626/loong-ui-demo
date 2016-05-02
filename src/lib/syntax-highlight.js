export class SyntaxHighlightCustomAttribute {
	static inject = [Element];

	constructor(element) {
        this.element = element;
    }

    attached() {
        Prism.highlightElement(this.element);
    }
}