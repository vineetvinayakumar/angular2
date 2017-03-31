import { Component } from '@angular/core';

@Component({
	selector: 'my-tutorials',
	template: `<h2>Child Tutorials Component</h2>
				<label>Enter Child Tutorials Component Value</label>
				<input type="text">
				<p>Value from Parent App Component is </p>`
})

export class TutorialsComponent{
	public title="Tutorials from Vineet Vinayakumar";
	public cone=true;
	public ctwo=true;
	public style = 'italic';
	public size = '20px';
	toggle(){
		this.cone = !this.cone;
		this.ctwo = !this.ctwo;
	}
}